import {ActionType, UserItemType, UsersType} from "../my-types";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "../redux-store";

const initialState: UsersType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    followingProgress: []
};

const usersReducer = (state = initialState, action: UsersActionsType): UsersType => {
    switch (action.type) {
        case "FOLLOW":
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

        case "UNFOLLOW":
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

        case "SET_USERS":
            return {
                ...state,
                users: action.users
            };

        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.pageNumber
            };

        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalCount
            };

        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            };

        case "SET_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingProgress: action.isLoading
                    ? [...state.followingProgress, action.userId]

                    : state.followingProgress.filter((id) => id !== action.userId)
            };

        default: return state;
    }
}

// Actions object:
export const usersActions = {
    followSuccess: (id: number) => ({type: "FOLLOW", userId: id} as const),
    unfollowSuccess: (id: number) => ({type: "UNFOLLOW", userId: id} as const),
    setUsers: (users: UserItemType[]) => ({type: "SET_USERS", users} as const),
    setCurrentPage: (id: number) => ({type: "SET_CURRENT_PAGE", pageNumber: id} as const),
    setTotalCount: (id: number) => ({type: "SET_TOTAL_USERS_COUNT", totalCount: id} as const),
    onPageChange: (id: number) => ({type: "ON_PAGE_CHANGE", totalCount: id} as const),
    setIsLoading: (isLoading: boolean) => ({type: "SET_IS_LOADING", isLoading} as const),
    setIsFollowingProgress: (id: number, isLoading: boolean) => ({
        type: "SET_IS_FOLLOWING_PROGRESS",
        userId: id,
        isLoading
    } as const)
}


// Initial Global Type for Users reducer:
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : any;
export type UsersActionsType = ReturnType<PropertiesType<typeof usersActions>>;


// Thunks type
type ThunkType = ThunkAction<Promise<void>, GlobalStateType, unknown, ActionType>;

// Thunks creators:
export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(usersActions.setIsLoading(true));
        dispatch(usersActions.setCurrentPage(currentPage));

        const response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(usersActions.setIsLoading(false));
        dispatch(usersActions.setUsers(response.data.items));
        dispatch(usersActions.setTotalCount(response.data.totalCount));
    }
};
export const followThunkCreator = (userId: number): ThunkType => {
    return async (dispatch: Dispatch) => {
        dispatch(usersActions.setIsFollowingProgress(userId, true));

        const {data} = await usersAPI.subscribe(userId);
        if (data.resultCode === 0) {
            dispatch(usersActions.followSuccess(userId));
            dispatch(usersActions.setIsFollowingProgress(userId, false));
        }
    }
};
export const unfollowThunkCreator = (userId: number): ThunkType => {
    return async (dispatch: Dispatch) => {
        dispatch(usersActions.setIsFollowingProgress(userId, true));

        const {data} = await usersAPI.unsubscribe(userId);
        if (data.resultCode === 0) {
            dispatch(usersActions.unfollowSuccess(userId));
            dispatch(usersActions.setIsFollowingProgress(userId, false));
        }
    }
};

export default usersReducer;
