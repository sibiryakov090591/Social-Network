import {v1} from "uuid";
import {ActionType, MyPostsInfoDataType, ProfileType} from "../state";

const initialState: ProfileType = {
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
};

export const ADD_POST = "ADD_POST";
export const CHANGE_MY_POST_TEXT = "CHANGE_MY_POST_TEXT";

export const profileReduser = (state: ProfileType = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: MyPostsInfoDataType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                myPostsInfoData: [newPost, ...state.myPostsInfoData],
                newPostText: ""
            };

        case CHANGE_MY_POST_TEXT:
            if (action.text !== undefined) {
                return {
                    ...state,
                    newPostText: action.text
                }
            } else return state

        default: return state;
    }
}

export const addPostActionCreator = () => ({
    type: "ADD_POST"
});

export const updatePostActionCreator = (text: string) => ({
    type: "CHANGE_MY_POST_TEXT",
    text: text
});

export default profileReduser;