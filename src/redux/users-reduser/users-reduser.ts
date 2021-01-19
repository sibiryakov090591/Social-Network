import {ActionType, UserItemType, UsersType} from "../my-types";

const initialState: UsersType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 20,
    currentPage: 1
};

export const SUBSCRIBE_TO_IT = "SUBSCRIBE_TO_IT";
export const UNSUBSCRIBE_TO_IT = "UNSUBSCRIBE_TO_IT";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const ON_PAGE_CHANGE = "ON_PAGE_CHANGE";


const usersReduser = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case SUBSCRIBE_TO_IT:
            if (state.users.length > 0) {
                return {
                    ...state,
                    // @ts-ignore
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


        case UNSUBSCRIBE_TO_IT:
            if (state.users.length > 0) {
                return {
                    ...state,
                    // @ts-ignore
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

        default:
            return state;
    }
}

export const subscribeActionCreator = (id: string | number) => ({
    type: "SUBSCRIBE_TO_IT",
    userId: id
});

export const unsubscribeActionCreator = (id: string | number) => ({
    type: "UNSUBSCRIBE_TO_IT",
    userId: id
});

export const setUsersActionCreator = (users: UserItemType[]) => ({
    type: "SET_USERS",
    users: users
});

export const setCurrentPageActionCreator = (id: number) => ({
    type: "SET_CURRENT_PAGE",
    pageNumber: id
});

export const setTotalCountActionCreator = (id: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalCount: id
});

export const onPageChangeActionCreator = (id: number) => ({
    type: "ON_PAGE_CHANGE",
    totalCount: id
});

export default usersReduser;
