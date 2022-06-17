// Thư viện HTTP Client dựa trên Promise
//https://viblo.asia/p/tim-hieu-ve-thu-vien-axios-gAm5ywELZdb
import axios from 'axios'
const url = '/post'

export default class API {
    //to get single post
    static async getPostBySlug(slug){
        const res = await axios.get(`${url}/${slug}`);
        return res.data;
    }
    //find Post deletedAt
    static async findDeleted(){
        const res = await axios.get(`${url}/deleted`);
        return res.data;
    }
    //to get all the post from the server
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }
    //to insert post into database
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }
    //to update post into database
    static async updatePost(slug, post){
        const res = await axios.patch(`${url}/${slug}`, post);
        return res.data;
    }
    //to delete a post
    static async deletePost(slug){
        const res = await axios.delete(`${url}/${slug}`);
        return res.data;
    }
    //to destroy a post
    static async destroyPost(slug){
        const res = await axios.delete(`${url}/destroy/${slug}`);
        return res.data;
    }
    //to restore a post
    static async restorePost(slug){
        const res = await axios.patch(`${url}/restore/${slug}`);
        return res.data;
    }

}