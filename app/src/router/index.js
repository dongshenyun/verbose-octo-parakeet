import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/movieList'
import BookList from '@/components/book/bookList'
import MusicList from '@/components/music/musicList'
import PhotoList from '@/components/photo/photoList'



Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/movie/movieList'
    }, {
        path: '/movie/movieList',
        name: 'movieList',
        component: MovieList
    }, {
        path: '/music/musicList',
        name: 'musicList',
        component: MusicList
    }, {
        path: '/book/bookList',
        name: 'bookList',
        component: BookList
    }, {
        path: '/photo/photoList',
        name: 'photoList',
        component: PhotoList
    }]
})