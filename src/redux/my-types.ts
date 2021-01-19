// Types
export type ProfileType = {
    profileInfoData: ProfileInfoDataType
    myPostsInfoData: MyPostsInfoDataType[]
    newPostText: string
};
export type ProfileInfoDataType = {
    firstName: string
    lastName: string
    birthday: string
    avatar: string
};
export type MyPostsInfoDataType = {
    id: string
    message: string
    likesCount: number
};

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

export type UsersType = {
    users: UserItemType[] | []
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
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


export type ActionType = {
    type: string
    post?: string
    text?: string
    message?: string
    userId?: string | number
    users?: UserItemType[]
    pageNumber: number
    totalCount: number
};
