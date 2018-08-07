<template>
    <div>
<ul class="footer" :style="{'background':bg}">
    <li @click="$emit('change','red','movie')"><router-link to="/movie/movieList">电影</router-link></li>
    <li @click="$emit('change','green','music')"><router-link to="/music/musicList">音乐</router-link></li>
    <li @click="$emit('change','blue','book')"><router-link to="/book/bookList">书籍</router-link></li>
    <li @click="$emit('change','orange','photo')"><router-link to="/photo/photoList">图片</router-link></li>
</ul>
    </div>
</template>

<script>
    export default {
        props:['bg']
    }
</script>

<style scoped>
.footer{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.footer li{
    flex-grow: 1;
    text-align: center;
}
.footer li a{
        color: #999;
    }
.footer li a.router-link-active{
        color: #fff;
}
</style>