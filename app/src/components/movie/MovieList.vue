<template>
    <div>
    
        <common-header title='movie' bg='blue'></common-header>
    
        movieList
        <common-footer title='movie' bg='blue'></common-footer>
    
    </div>
</template>

<script>
    import CommonHeader from '@/components/common/Header'
    import CommonFooter from '@/components/common/Footer'

    export default {
    
        components: {
    
            CommonHeader,
            CommonFooter
    
        }
    
    }
</script>

<style scoped>
    
</style>