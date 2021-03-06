import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "998429a7-d76e-46af-a3e8-87cfbdfdd453"
    }
});

export const authAPI = {
    setAuth () {
        return instance.get(`auth/me`);
    },
    login (email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        });
    },
    logout () {
        return instance.delete(`auth/login`);
    },
    getCaptcha () {
        return instance.get(`security/get-captcha-url`);
    }
};

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
    setUserProfile (userId: number | string) {
        return instance.get(`profile/` + userId);
    },
    setUserStatus (userId: number | string) {
        return instance.get(`profile/status/` + userId);
    },
    updateUserStatus (status: string) {
        return instance.put(`profile/status`, { status: status });
    },
    uploadUserPhoto (file: any) {
        const formData = new FormData();
        formData.append("image", file)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    updateProfileInfo (data: any) {
        return instance.put(`profile`, data);
    }
};

