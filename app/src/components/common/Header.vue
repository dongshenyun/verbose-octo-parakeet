<template>
    <div>
        <div class="header" :style="{'background':bg}">
            <span class="header-home">首页</span>
            <span class="header-title">{{title}}</span>
            <span class="header-home"></span>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','bg']
};
</script>

<style scoped>
.header{
    display: flex;
    height: 1rem;
    color: white;
    line-height: 1rem;
}
.header-title{
    flex-grow: 1;
    text-align: center;
    font-size: .5rem;
    font-weight: bold;
}
.header-home{
    width: 1rem;
    text-indent: .2rem;
}
</style>