import {v1} from "uuid";
import {ActionType, ProfilePostsType, ProfileType} from "../my-types";

const initialState: ProfileType = {
    profileInfo: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagram.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
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

const profileReduser = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: ProfilePostsType = {
                id: v1(),
                message: state.currentPostValue,
                likesCount: 0
            };
            return {
                ...state,
                profilePosts: [newPost, ...state.profilePosts],
                currentPostValue: ""
            };

        case CHANGE_MY_POST_TEXT:
            if (action.text !== undefined) {
                return {
                    ...state,
                    currentPostValue: action.text
                }
            } else return state

        case SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profile
            }

        default: return state;
    }
}

export const addPostActionCreator = () => ({
    type: "ADD_POST"
});

export const updatePostActionCreator = (text: string) => ({
    type: "CHANGE_MY_POST_TEXT",
    text
});

export const setUserProfileActionCreator = (profile: any) => ({
    type: "CHANGE_MY_POST_TEXT",
    profile
});

export default profileReduser;