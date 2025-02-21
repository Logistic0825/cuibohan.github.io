import { request } from "@/utils";

export function ChatAPI(inputMessage) {
    return request({
        url:'/chat',
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({ message: inputMessage })
    })
}

export function addArticleAPI(data) {
    return request({
        url:'/addarticles',
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
}

export function getArticlesAPI() {
    return request({
        url:'/getarticles',
        method:'GET'
    })
}