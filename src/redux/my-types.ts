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
    users: UserItemType[]
};
export type UserItemType = {
    id: string
    name: string
    photoUrl: string
    isFriend: boolean
    location: {
        country: string
        city: string
    }
};


export type ActionType = {
    type: string
    post?: string
    text?: string
    message?: string
    userId?: string
    users?: UsersType[]
};
