import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        // 'API-KEY': '5cfcc1b0-6a34-4ead-9faa-3fe4ffa94f8f',
        'API-KEY': '5008bf57-62df-4134-b948-641c777e0f16',
    }
})

export const authAPI = {
    authMe() {
        return instance
            .get('auth/me')
            .then(({ data }) => data)
    },
}

export const profileAPI = {
    getData(id) {
        return instance
            .get(`profile/${id}`)
            .then(({ data }) => data)
    },
}

export const usersAPI = {
    getCurrentPageData(page, count) {
        return instance
            .get(`users?page=${page}&count=${count}`)
            .then(({ data }) => data)
    },
    hasFollow(id) {
        return instance
            .get(`follow/${id}`)
            .then(({ data }) => data)
    },
    follow(id) {
        return instance
            .post(`follow/${id}`)
            .then(({ data }) => data)
    },
    unfollow(id) {
        return instance
            .delete(`follow/${id}`)
            .then(({ data }) => data)
    },
}