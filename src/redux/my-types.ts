import {AuthActionsType} from "./auth/auth-reducer";
import {ProfileActionsType} from "./profile-reducer/profile-reducer";
import {UsersActionsType} from "./users-reducer/users-reducer";
import {DialogsActionsType} from "./dialogs-reducer/dialogs-reducer";
import { AppActionsType } from "./app-reducer/app-reducer";

// Auth
export type AuthType = {
    id: string | null
    login: string | null
    email: string | null
    isAuth: boolean
    captcha: undefined | string
}

// Profile
export type ProfileType = {
    profileInfo: ProfileInfoType | null
    profilePosts: ProfilePostsType[] | []
    profileStatus: string
}
export type ProfileInfoType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | string
    photos: {
        small: string | null
        large: string | null
    }
}
export type ProfilePostsType = {
    id: string
    message: string
    likesCount: number
}

// Dialogs
export type DialogsType = {
    peopleData: PeopleDataType[]
    messagesData: MessagesDataType[]
}
export type PeopleDataType = {
    name: string
    id: string
}
export type MessagesDataType = {
    id: string
    message: string
}

// Users
export type UsersType = {
    users: UserItemType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingProgress: number[]
}
export type UserItemType = {
    id: number
    name: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

// Global Action type
export type ActionType = AppActionsType | AuthActionsType | ProfileActionsType | UsersActionsType | DialogsActionsType
