import {v1} from "uuid";
import usersReduser, {SET_USERS, SUBSCRIBE_TO_IT, UNSUBSCRIBE_TO_IT} from "./users-reduser";
import {ActionType, UserItemType, UsersType} from "../my-types";

test("Set users data", () => {

    const data: UserItemType[] = [
        {
            id: v1(),
            name: "Alex",
            uniqueUrlName: "Alex",
            photos: {
                small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
            },
            followed: false,
            status: "Test status"
        },
        {
            id: v1(),
            name: "Alex",
            uniqueUrlName: "Alex",
            photos: {
                small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
            },
            followed: false,
            status: "Test status"
        },
        {
            id: v1(),
            name: "Alex",
            uniqueUrlName: "Alex",
            photos: {
                small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
            },
            followed: false,
            status: "Test status"
        },
    ];

    const state: UsersType = {
        users: [],
        pageSize: 4,
        totalUsersCount: 20,
        currentPage: 1
    };

    const action: ActionType = {
        type: SET_USERS,
        users: data
    };

    const newState = usersReduser(state, action);

    expect(newState.users?.length).toBe(3);
});

test("Subscribe to user", () => {

    const state: UsersType = {
        users: [
            {
                id: v1(),
                name: "Alex",
                uniqueUrlName: "Alex",
                photos: {
                    small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                    large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
                },
                followed: false,
                status: "Test status"
            },
            {
                id: v1(),
                name: "Alex",
                uniqueUrlName: "Alex",
                photos: {
                    small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                    large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
                },
                followed: false,
                status: "Test status"
            },
            {
                id: v1(),
                name: "Alex",
                uniqueUrlName: "Alex",
                photos: {
                    small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                    large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
                },
                followed: false,
                status: "Test status"
            },
        ],
        pageSize: 4,
        totalUsersCount: 20,
        currentPage: 1
    };

    const action: ActionType = {
        type: SUBSCRIBE_TO_IT,
        userId: state.users[0].id
    };

    const newState = usersReduser(state, action);

    expect(newState.users[0].isFriend).toBe(true);
});

test("unSubscribe to user", () => {

    const state: UsersType = {
        users: [
            {
                id: v1(),
                name: "Alex",
                uniqueUrlName: "Alex",
                photos: {
                    small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                    large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
                },
                followed: false,
                status: "Test status"
            },
            {
                id: v1(),
                name: "Alex",
                uniqueUrlName: "Alex",
                photos: {
                    small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                    large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
                },
                followed: false,
                status: "Test status"
            },
            {
                id: v1(),
                name: "Alex",
                uniqueUrlName: "Alex",
                photos: {
                    small: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj",
                    large: "https://yt3.ggpht.com/ytc/AAUvwnh9X4yxoYU_eDNNrGxKGKtdBRYg-LLog_4r83mJQw=s900-c-k-c0x00ffffff-no-rj"
                },
                followed: false,
                status: "Test status"
            },
        ],
        pageSize: 4,
        totalUsersCount: 20,
        currentPage: 1
    };

    const action: ActionType = {
        type: UNSUBSCRIBE_TO_IT,
        userId: state.users[1].id
    };

    const newState = usersReduser(state, action);

    expect(newState.users[1].isFriend).toBe(false);
});