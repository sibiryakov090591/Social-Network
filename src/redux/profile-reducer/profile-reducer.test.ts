import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import {ActionType, ProfileType} from "../my-types";

beforeEach(() => {
    const state: ProfileType = {
        profileInfo: {
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: null,
                twitter: null,
                instagram: null,
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: false,
            lookingForAJobDescription: null,
            fullName: "Andrew",
            userId: 5,
            photos: {
                small: null,
                large: null
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
        profileStatus: ""
    };
})

test("My post added", () => {
    const action: ActionType = {
        type: "ADD_POST",
        text: "Test post"
    };

    const newState = profileReducer(state, action);

    expect(newState.profilePosts.length).toBe(4);
    expect(newState.profilePosts[0].message).toBe("Test message");
});

test("newPostText is changed", () => {

    const state: ProfileType = {
        profileInfo: {
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
    const action: ActionType = {
        type: CHANGE_MY_POST_TEXT,
        text: "Test message"
    };

    const newState = profileReducer(state, action);

    expect(newState.newPostText).toBe("Test message");
});