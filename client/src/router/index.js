import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'
import Calendar from '../views/Calendar.vue'
import Contact from '../views/Contact.vue'
import PostDeleted from '../views/PostDeleted.vue'
import VideoPost from '../views/VideoPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },
  {
    path: '/post/:slug',
    name: 'post',
    component: Post
  },
  {
    path: '/edit-post/:slug',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/deleted',
    name: 'postDeleted',
    component: PostDeleted
  },
  {
    path: '/video/:slug',
    name: 'videoPost',
    component: VideoPost
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
