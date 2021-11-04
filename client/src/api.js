// Thư viện HTTP Client dựa trên Promise
//https://viblo.asia/p/tim-hieu-ve-thu-vien-axios-gAm5ywELZdb
import axios from 'axios'
const url = '/post'

export default class API {
    //to get all the post from the server
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }
    //to get single post
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //to insert post into database
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }
    //to update post into database
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    //to delete a post
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}