import React from 'react'
import api from '../services/api'

const getPost = async () => {
    try {
        const postList = await api.get('posts', { responseType: 'text' })
        if (postList.status !== 200) {
            throw new Error("Deu ruim")
        }
        return postList.data;
    } catch (error) {
        console.log(error)
    }
}

export default getPost
