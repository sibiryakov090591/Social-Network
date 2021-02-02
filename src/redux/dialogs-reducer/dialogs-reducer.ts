import {v1} from "uuid";
import {ActionType, DialogsType, MessagesDataType} from "../my-types";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const CHANGE_MY_MESSAGE_TEXT = "CHANGE_MY_MESSAGE_TEXT";

const initialState: DialogsType = {
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

const dialogsReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesDataType = {
                id: v1(),
                message: state.newMessageText
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ""
            };

        case CHANGE_MY_MESSAGE_TEXT:
            if (action.text !== undefined) {
                return {
                    ...state,
                    newMessageText: action.text
                }
            } else return state


        default: return state;
    }
}

export const addMessageActionCreator = (): ActionType => ({
    type: ADD_MESSAGE
});

export const updateMessageActionCreator = (text: string): ActionType => ({
    type: CHANGE_MY_MESSAGE_TEXT,
    text: text
});

export default dialogsReducer;
