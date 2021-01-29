import {v1} from "uuid";
import {ActionType, ProfileInfoType, ProfilePostsType, ProfileType} from "../my-types";
import {profileAPI} from "../../api/api";
import {Dispatch} from "redux";

const initialState: ProfileType = {
    profileInfo: null,
    profilePosts: [
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
    currentPostValue: ""
};

export const ADD_POST = "ADD_POST";
export const CHANGE_MY_POST_TEXT = "CHANGE_MY_POST_TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

const profileReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: ProfilePostsType = {
                id: v1(),
                message: state.currentPostValue,
                likesCount: 0
            };
            if (state.profilePosts) {
                return {
                    ...state,
                    profilePosts: [newPost, ...state.profilePosts],
                    currentPostValue: ""
                };
            } else return state;

        case CHANGE_MY_POST_TEXT:
            if (action.text) {
                return {
                    ...state,
                    currentPostValue: action.text
                }
            } else return state;

        case SET_USER_PROFILE:
            if (action.profile) {
                return {
                    ...state,
                    profileInfo: action.profile
                }
            } else return state;

        default:
            return state;
    }
}

export const addPost = (): ActionType => ({
    type: "ADD_POST"
});
export const updatePost = (text: string): ActionType => ({
    type: "CHANGE_MY_POST_TEXT",
    text
});
export const setUserProfile = (profile: ProfileInfoType): ActionType => ({
    type: "SET_USER_PROFILE",
    profile
});

export const setUserProfileThunkCreator = (userId: number | string): any => (dispatch: Dispatch) => {
    profileAPI.setUserProfile(userId).then(({data}) => {
        dispatch(setUserProfile(data));
    });
}

export default profileReducer;