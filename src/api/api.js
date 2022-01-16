import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5cfcc1b0-6a34-4ead-9faa-3fe4ffa94f8f',
        // 'API-KEY': '5008bf57-62df-4134-b948-641c777e0f16',
    },
});

export const authAPI = {
    authMe() {
        return instance
            .get('auth/me')
    },
}

export const profileAPI = {
    getData(id) {
        return instance
            .get(`profile/${id}`)
    },
    getStatus(id) {
        return instance
            .get(`profile/status/${id}`)
    },
    changeStatus(status) {
        return instance
            .put('profile/status', { status })
    },
}

export const usersAPI = {
    getCurrentPageData(page, count) {
        return instance
            .get(`users?page=${page}&count=${count}`)
    },
    hasFollow(id) {
        return instance
            .get(`follow/${id}`)
    },
    follow(id) {
        return instance
            .post(`follow/${id}`)
    },
    unfollow(id) {
        return instance
            .delete(`follow/${id}`)
    },
}