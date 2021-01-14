import {v1} from "uuid";
import profileReduser, { ADD_POST, CHANGE_MY_POST_TEXT } from "./profile-reduser";
import {ActionType, ProfileType} from "../state";

test("My post added", () => {

    const state: ProfileType = {
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
        newPostText: "Test message"
    };
    const action: ActionType = {
        type: ADD_POST
    };

    const newState = profileReduser(state, action);

    expect(newState.myPostsInfoData.length).toBe(4);
    expect(newState.myPostsInfoData[0].message).toBe("Test message");
    expect(newState.newPostText).toBe("");
});

test("newPostText is changed", () => {

    const state: ProfileType = {
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
    const action: ActionType = {
        type: CHANGE_MY_POST_TEXT,
        text: "Test message"
    };

    const newState = profileReduser(state, action);

    expect(newState.newPostText).toBe("Test message");
});