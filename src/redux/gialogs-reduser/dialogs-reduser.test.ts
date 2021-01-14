import {v1} from "uuid";
import dialogsReduser, { ADD_MESSAGE, CHANGE_MY_MESSAGE_TEXT } from "./dialogs-reduser";
import {ActionType, DialogsType} from "../state";

test("My message added", () => {

    const state: DialogsType = {
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
        newMessageText: "Test message"
    };
    const action: ActionType = {
        type: ADD_MESSAGE
    };

    const newState = dialogsReduser(state, action);

    expect(newState.messagesData.length).toBe(4);
    expect(newState.messagesData[newState.messagesData.length - 1].message).toBe("Test message");
    expect(newState.newMessageText).toBe("");
})

test("newPostText is changed", () => {

    const state: DialogsType = {
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
    };
    const action: ActionType = {
        type: CHANGE_MY_MESSAGE_TEXT,
        text: "Test message"
    };

    const newState = dialogsReduser(state, action);

    expect(newState.newMessageText).toBe("Test message");
})