<template>
    <div>
<ul class="footer" :style="{'background':bg}">
    <li><router-link to="/movie/movieList">电影</li>
    <li><router-link to="/music/musicList">音乐</li>
    <li><router-link to="/book/bookList">书籍</li>
    <li><router-link to="/photo/photoList">图片</li>
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
    color: #ccc;
}
</style>