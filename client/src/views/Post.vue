<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${post.image}`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn :to="{name: 'videoPost', params: {slug: post.slug}}" small outlined color="primary" class="category">{{post.category}}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="success" text :to="{name: 'edit-post', params: {slug: post.slug}}">
                                    <v-icon left>mdi-pencil</v-icon> Sửa</v-btn>
                                <v-btn color="red" text 
                                    data-toggle='modal'
                                    data-target='#exampleModal'
                                    :data-slug='post.slug'
                                    class='btnDelete'
                                    @click="getSlug(post.slug)"
                                >
                                    <v-icon left>mdi-delete</v-icon> Xóa</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3>{{post.title}}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{post.content}}</p>
                        <p>{{post.created}}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div class='modal' id='exampleModal' tabindex='-1' role='dialog'>
            <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <h5 class='modal-title'>Thông báo</h5>
                        <button
                            type='button'
                            class='close'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div class='modal-body'>
                        <p>Bạn chắc chắn muốn xóa khóa học này?</p>
                    </div>
                    <div class='modal-footer'>
                        <v-btn color='primary'
                            class='btn btn-primary'
                            data-dismiss='modal'
                        >Hủy</v-btn>
                        <v-btn color="error" 
                            class='btnModal'
                            @click='deletePost()'
                        >Xóa bỏ</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>
<style>
@import '../css/main.css';
</style>
<script>
import API from '../api'
export default {
    data(){
        return {
            post: {},
        }
    },
    async created(){
        const response = await API.getPostBySlug(this.$route.params.slug)
        this.post = response;
    },
    methods: {
        async getSlug(slug){
            document.querySelector('.btnModal').setAttribute('data-slug', slug);
        },
        async deletePost(){
            const modal = document.querySelector('.btnModal');
            const slug = modal.getAttribute('data-slug');
            const response = await API.deletePost(slug);
            this.$router.push({name: 'home', params: {message: response.message}})
            window.location.reload();
        }
    }
}
</script>
