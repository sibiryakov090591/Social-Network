import {v1} from "uuid";
import dialogsReducer from "./dialogs-reducer";
import {ActionType, DialogsType} from "../my-types";

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
        ]
    };
    const action: ActionType = {
        type: "ADD_MESSAGE",
        text: "Test message"
    };

    const newState = dialogsReducer(state, action);

    expect(newState.messagesData.length).toBe(4);
    expect(newState.messagesData[newState.messagesData.length - 1].message).toBe("Test message");
});