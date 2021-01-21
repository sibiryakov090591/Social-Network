// Profile
export type ProfileType = {
    profileInfo: ProfileInfoType | null
    profilePosts: ProfilePostsType[]
    currentPostValue: string
};
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
};
export type ProfilePostsType = {
    id: string
    message: string
    likesCount: number
};

// Dialogs and messages
export type DialogsType = {
    peopleData: PeopleDataType[]
    messagesData: MessagesDataType[]
    newMessageText: string
};
export type PeopleDataType = {
    name: string
    id: string
};
export type MessagesDataType = {
    id: string
    message: string
};

// Users
export type UsersType = {
    users: UserItemType[] | null
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    isLoading: boolean
};
export type UserItemType = {
    id: number | string
    name: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
};

// Action
export type ActionType = {
    type: string
    post?: string
    text?: string
    message?: string
    userId?: string | number
    users?: UserItemType[]
    pageNumber?: number
    totalCount?: number
    isLoading?: boolean
    profile?: any
};
