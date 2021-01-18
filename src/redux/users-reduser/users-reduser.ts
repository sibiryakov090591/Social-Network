import {v1} from "uuid";
import {ActionType, UserItemType, UsersType} from "../my-types";

const initialState: UsersType = {
    users: [
        {
            id: v1(),
            name: "Alex",
            photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
            isFriend: false,
            location: {
                country: "Russia",
                city: "Moscow"
            },
            status: "Test status"
        },
        {
            id: v1(),
            name: "Alex",
            photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
            isFriend: true,
            location: {
                country: "Russia",
                city: "Moscow"
            },
            status: "Test status"
        },
        {
            id: v1(),
            name: "Alex",
            photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
            isFriend: false,
            location: {
                country: "Russia",
                city: "Moscow"
            },
            status: "Test status"
        }
    ]
};

export const SUBSCRIBE_TO_IT = "SUBSCRIBE_TO_IT";
export const UNSUBSCRIBE_TO_IT = "UNSUBSCRIBE_TO_IT";
export const SET_USERS = "SET_USERS";


const usersReduser = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case SUBSCRIBE_TO_IT:
            return {
                ...state,
                users: state.users.map(i => {
                    if (i.id === action.userId) {
                        return {
                            ...i,
                            isFriend: true
                        };
                    } else return i;
                })
            };

        case UNSUBSCRIBE_TO_IT:
            return {
                ...state,
                users: state.users.map(i => {
                    if (i.id === action.userId) {
                        return {
                            ...i,
                            isFriend: false
                        };
                    } else return i;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        default:
            return state;
    }
}

export const subscribeActionCreator = (id: string) => ({
    type: "SUBSCRIBE_TO_IT",
    userId: id
});

export const unsubscribeActionCreator = (id: string) => ({
    type: "UNSUBSCRIBE_TO_IT",
    userId: id
});

export const setUsersActionCreator = (users: UserItemType[]) => ({
    type: "SET_USERS",
    users: users
});

export default usersReduser;
