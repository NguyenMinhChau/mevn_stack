<template>
    <v-container>
        <v-row no-gutters>
            <form cols="12" class="text-center" @submit.prevent="submitForm">
                <div class="">
                    <div class="d-flex align-items-center justify-content-start mb-3">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="checkAll" v-on:change="checkAll()">
                        <label class="form-check-label" for="checkAll">Chọn tất cả</label>
                    </div>
                    <div class="form-group" id="selectActions">
                        <select class="form-control" id="selectActions" name="actions" required>
                            <option value="" selected disabled> -- Chọn hành động -- </option>
                            <option value="delete">Xóa vĩnh viễn</option>
                            <option value="restore">Khôi phục</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" id="btnAction" disabled>Thực hiện</button>
                </div>
                </div>
                <v-simple-table>
                    <template v-slot:default class="elevation-1" dense>
                    <thead>
                        <tr>
                            <th class="text-center">
                                #
                            </th>
                            <th class="text-center">
                                Hình ảnh
                            </th>
                            <th class="text-center">
                                Tiêu đề
                            </th>
                            <th class="text-center">
                                Category
                            </th>
                            <th class="text-center">
                                Mô tả
                            </th>
                            <th class="text-center">
                                Thời gian xóa
                            </th>
                            <th class="text-center">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="desserts.length > 0">
                        <tr
                            v-for="item in desserts"
                            :key="item._id"
                        >
                            <td>
                                <input type="checkbox" class="text-center" :value="item.slug" name="postsSlugs[]" v-on:change="checkOne()">
                            </td>
                            <td><v-img class="img-fluid" :src="`/${item.image}`"></v-img></td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.category }}</td>
                            <td>{{ item.content }}</td>
                            <td>{{ item.deletedAt }}</td>
                            <td>
                                <v-btn color="error"
                                    text
                                    data-toggle='modal'
                                    data-target='#exampleModal'
                                    :data-slug='item.slug'
                                    class='btnDelete'
                                    @click="getSlug(item.slug)"
                                >Xóa vĩnh viễn</v-btn>
                                <v-btn color="primary" text @click="restorePost(item.slug)">Khôi phục</v-btn>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6" class="text-center">Thùng rác trống. <a href='/'>Danh sách bài viết</a></td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </form>
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
                        <p>Hành động không thể khôi phục. Bạn chắc chắn muốn xóa khóa học này?</p>
                    </div>
                    <div class='modal-footer'>
                        <v-btn color='primary'
                            class='btn btn-primary'
                            data-dismiss='modal'
                        >Hủy</v-btn>
                        <v-btn color="error" 
                            class='btnModal'
                            @click='deletePost()'
                        >Xóa vĩnh viễn</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>
<script>
import API from '../api'
export default {
    data () {
        return {
            desserts: [],
            posts: [],
        }
    },
    async created(){
        this.posts = await API.findDeleted();
        this.posts = this.posts.filter(post => post.deleted === true);
        const result = this.posts.map(post => {
            return {
                    _id: post._id,
                    image: post.image,
                    title: post.title,
                    category: post.category,
                    content: post.content,
                    deletedAt: post.deletedAt,
                    slug: post.slug
                }
        })
        this.desserts = result;
    },
    methods: {
        async getSlug(slug){
            document.querySelector('.btnModal').setAttribute('data-slug', slug);
        },
        async deletePost(){
            const modal = document.querySelector('.btnModal');
            const slug = modal.getAttribute('data-slug');
            await API.destroyPost(slug);
            window.location.reload();
        },
        async restorePost(slug){
            const response = await API.restorePost(slug);
            this.$router.push({name: 'home', params: {message: response.message}})
        },
        async checkAll(){
            var btnAction = document.querySelector('#btnAction');
            var checkAll = document.querySelector('#checkAll');
            var postsSlugs = $('input[name="postsSlugs[]"]');
            var isCheckAll = checkAll.checked;
            postsSlugs.each(function(){
                this.checked = isCheckAll;
            })
            btnAction.disabled = !isCheckAll;
        },
        async checkOne(){
            var postsSlugs = $('input[name="postsSlugs[]"]');
            var btnAction = document.querySelector('#btnAction');
            var isChecked = postsSlugs.filter(':checked').length === postsSlugs.length;
            if( postsSlugs.filter(':checked').length > 0 ){
                btnAction.disabled = false;
            }else{
                btnAction.disabled = true;
            }
            checkAll.checked = isChecked;
        },
        async submitForm(){
            const actions = document.querySelector('select[name="actions"]');
            const postsSlugs = document.querySelectorAll('input[name="postsSlugs[]"]');
            Array.from(postsSlugs).forEach(async post => {
                if(post.checked){
                    if(actions.value === 'delete'){
                        await API.destroyPost(post.value);
                        window.location.reload();
                    }
                    if(actions.value === 'restore'){
                        this.restorePost(post.value);
                    }
                }
            })
        }
    },
}
</script>
<style>
    .img-fluid{
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 15px;
    }
    #selectActions{
        margin: auto 5px;
        min-height: 45px;
    }
    #btnAction{
        margin-left: 5px;
    }
</style>