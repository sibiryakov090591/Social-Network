import {v1} from "uuid";
import {ActionType, DialogsType, MessagesDataType} from "../my-types";

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
    ]
};

const dialogsReducer = (state = initialState, action: ActionType): DialogsType => {

    switch (action.type) {
        case "ADD_MESSAGE":
            if (action.text) {
                const newMessage: MessagesDataType = {
                    id: v1(),
                    message: action.text
                };
                return {
                    ...state,
                    messagesData: [...state.messagesData, newMessage]
                };
            } else return state;

        default: return state;
    }
}

// Actions object:
export const dialogsActions = {
    addMessage: (text: string) => ({type: "ADD_MESSAGE", text} as const)
};

// Initial Global Type for Users reducer:
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : any;
export type DialogsActionsType = ReturnType<PropertiesType<typeof dialogsActions>>;


export default dialogsReducer;
