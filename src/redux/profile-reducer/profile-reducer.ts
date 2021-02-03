import {v1} from "uuid";
import {ActionType, ProfileInfoType, ProfilePostsType, ProfileType} from "../my-types";
import {profileAPI} from "../../api/api";
import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "../redux-store";

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
    profileStatus: ""
};

const profileReducer = (state = initialState, action: ActionType): ProfileType => {

    switch (action.type) {
        case "ADD_POST":
            if (action.text) {
                const newPost: ProfilePostsType = {
                    id: v1(),
                    message: action.text,
                    likesCount: 0
                };
                return {
                    ...state,
                    profilePosts: [newPost, ...state.profilePosts]
                };
            } else return state;

        case "SET_USER_PROFILE":
            if (action.profile) {
                return {
                    ...state,
                    profileInfo: action.profile
                };
            } else return state;

        case "SET_USER_STATUS":
            if (action.status) {
                return {
                    ...state,
                    profileStatus: action.status
                };
            } else return {
                ...state,
                profileStatus: ""
            };

        default:
            return state;
    }
}

// Actions object:
export const profileActions = {
    addPost: (text: string) => ({type: "ADD_POST", text} as const),
    setUserProfile: (profile: ProfileInfoType) => ({type: "SET_USER_PROFILE", profile} as const),
    setUserStatus: (status: string) => ({type: "SET_USER_STATUS", status} as const)
}


// Initial Global Type for Profile reducer:
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : any;
export type ProfileActionsType = ReturnType<PropertiesType<typeof profileActions>>;


// Thunks type
type ThunkType = ThunkAction<Promise<void>, GlobalStateType, unknown, ActionType>;


// Thunks creators:
export const setUserProfileThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        profileAPI.setUserProfile(userId).then(({data}) => {
            dispatch(profileActions.setUserProfile(data));
        });
    }
};
export const setUserStatusThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        profileAPI.setUserStatus(userId).then(({data}) => {
            dispatch(profileActions.setUserStatus(data));
        })
    }
};
export const updateUserStatusThunkCreator = (status: string): ThunkType => {
    return async (dispatch) => {
        profileAPI.updateUserStatus(status).then(({data}) => {
            if (data.resultCode === 0) dispatch(profileActions.setUserStatus(status));
        })
    }
}

export default profileReducer;