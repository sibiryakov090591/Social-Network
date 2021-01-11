import {v1} from "uuid";
import {ActionType, DialogsType, MessagesDataType} from "./state";

const initialState = {
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

const dialogsReduser = (state: DialogsType = initialState, action: ActionType) => {

    const ADD_MESSAGE = "ADD_MESSAGE";
    const CHANGE_MY_MESSAGE_TEXT = "CHANGE_MY_MESSAGE_TEXT";

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesDataType = {
                id: v1(),
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = "";
            return state;

        case CHANGE_MY_MESSAGE_TEXT:
            if (action.text !== undefined) {
                state.newMessageText = action.text;
            }
            return state;

        default: return state;
    }
}

export const addMessageActionCreator = () => ({
    type: "ADD_MESSAGE"
});

export const updateMessageActionCreator = (text: string) => ({
    type: "CHANGE_MY_MESSAGE_TEXT",
    text: text
});

export default dialogsReduser;