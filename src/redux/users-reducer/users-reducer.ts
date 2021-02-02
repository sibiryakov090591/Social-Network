import {ActionType, UserItemType, UsersType} from "../my-types";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

const initialState: UsersType = {
    users: null,
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingProgress: []
};

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const ON_PAGE_CHANGE = "ON_PAGE_CHANGE";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_IS_FOLLOWING_PROGRESS = "SET_IS_FOLLOWING_PROGRESS";


const usersReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case FOLLOW:
            if (state.users) {
                return {
                    ...state,
                    users: state.users.map(i => {
                        if (i.id === action.userId) {
                            return {
                                ...i,
                                followed: true
                            };
                        } else return i;
                    })
                };
            } else {
                return state;
            }

        case UNFOLLOW:
            if (state.users) {
                return {
                    ...state,
                    users: state.users.map(i => {
                        if (i.id === action.userId) {
                            return {
                                ...i,
                                followed: false
                            };
                        } else return i;
                    })
                };
            } else {
                return state;
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case SET_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isLoading
                    ? [...state.followingProgress, action.userId]
                    // @ts-ignore
                    : state.followingProgress.filter((id: string | number) => id !== action.userId)
            };

        default:
            return state;
    }
}

export const followSuccess = (id: string | number) => ({
    type: FOLLOW,
    userId: id
});
export const unfollowSuccess = (id: string | number) => ({
    type: UNFOLLOW,
    userId: id
});
export const setUsers = (users: UserItemType[]) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (id: number): ActionType => ({
    type: SET_CURRENT_PAGE,
    pageNumber: id
});
export const setTotalCount = (id: number): ActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: id
});
export const onPageChange = (id: number): ActionType => ({
    type: ON_PAGE_CHANGE,
    totalCount: id
});
export const setIsLoading = (isLoading: boolean): ActionType => ({
    type: SET_IS_LOADING,
    isLoading
});
export const setIsFollowingProgress = (id: string | number, isLoading: boolean): ActionType => ({
    type: SET_IS_FOLLOWING_PROGRESS,
    userId: id,
    isLoading
});

export const getUsersThunkCreator = (currentPage: number, pageSize: number): any => {
    return (dispatch: Dispatch) => {
        dispatch(setIsLoading(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setIsLoading(false));
                dispatch(setUsers(response.data.items));
                dispatch(setTotalCount(response.data.totalCount));
            });
    }
};
export const followThunkCreator = (userId: number | string): any => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(userId, true));
        usersAPI.subscribe(userId)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                    dispatch(setIsFollowingProgress(userId, false));
                }
            });
    }
};
export const unfollowThunkCreator = (userId: number | string): any => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(userId, true));;
        usersAPI.unsubscribe(userId)
            .then(({data}) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                    dispatch(setIsFollowingProgress(userId, false));
                }
            });
    }
};

export default usersReducer;
