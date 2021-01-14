import {v1} from "uuid";
import dialogsReduser from "./gialogs-reduser/dialogs-reduser";
import profileReduser from "./profile-reduser/profile-reduser";

// Types
export type ProfileInfoDataType = {
    firstName: string
    lastName: string
    birthday: string
    avatar: string
};
export type MyPostsInfoDataType = {
    id: string
    message: string
    likesCount: number
};
export type PeopleDataType = {
    name: string
    id: string
};
export type MessagesDataType = {
    id: string
    message: string
};
export type ProfileType = {
    profileInfoData: ProfileInfoDataType
    myPostsInfoData: Array<MyPostsInfoDataType>
    newPostText: string
};
export type DialogsType = {
    peopleData: Array<PeopleDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
};
export type StateType = {
    profile: ProfileType
    dialogs: DialogsType
};
type StoreType = {
    _state: StateType
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: ActionType) => void
};
export type ActionType = {
    type: string
    post?: string
    text?: string
    message?: string
};


// Store - Redux
let store: StoreType = {
    _state: {
        profile: {
            profileInfoData: {
                firstName: "Andrew",
                lastName: "Sibiryakov",
                birthday: "9 may 1991",
                avatar: "ava.jpg"
            },
            myPostsInfoData: [
                {
                    id: v1(),
                    message: "When we were last in South Africa, I used the most amazing toilet ever (we saw other stuff, too, like penguins and spring bok and geckos. And yet, this post is about toilets",
                    likesCount: 4
                },
                {
                    id: v1(),
                    message: "Though my wife and I have been together for 13 and a half years, and the secrets between us are few",
                    likesCount: 2
                },
                {
                    id: v1(),
                    message: "I need to sleep...",
                    likesCount: 0
                }
            ],
            newPostText: ""
        },
        dialogs: {
            peopleData: [
                {name: "Anna", id: v1()},
                {name: "Andrey", id: v1()},
                {name: "John", id: v1()},
                {name: "Dima", id: v1()},
                {name: "Lio", id: v1()}
            ],
            messagesData: [
                {id: v1(), message: "Hi!"},
                {id: v1(), message: "HELLO! How a u??"},
                {id: v1(), message: "Great !! :))"}
            ],
            newMessageText: ""
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        rerender = observer;
    },
    dispatch(action: ActionType) {
        this._state.profile = profileReduser(this._state.profile, action);
        this._state.dialogs = dialogsReduser(this._state.dialogs, action);

        rerender(store);
    }
}

let rerender = (store: StoreType) => {};