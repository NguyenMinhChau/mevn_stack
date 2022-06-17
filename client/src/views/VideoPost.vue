<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <h4 class="text-color">Chuyên mục: <em>{{post.title}}</em></h4>
                    <div class="video">
                        <iframe width="100%" height="350" :src="`https://www.youtube.com/embed/${post.videoId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <v-card-text>Mô tả: <em>{{post.content}}</em></v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
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
}
</script>
<style>
    .text-color{
        color: transparent;
        background: linear-gradient(to right, #ff0000, #ff00ff);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
