import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "998429a7-d76e-46af-a3e8-87cfbdfdd453"
    }
})

export const usersAPI = {
    getUsers (currentPage: number | string = 1, pageSize: number | string = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    subscribe (id: number | string) {
        return instance.post('follow/' + id);
    },
    unsubscribe (id: number | string) {
        return instance.delete('follow/' + id);
    }
};

export const profileAPI = {
    setAuth () {
        return instance.get(`auth/me`);
    },
    setUserProfile (userId: number | string) {
        return instance.get(`profile/` + userId);
    }
};