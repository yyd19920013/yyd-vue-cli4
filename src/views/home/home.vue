<template>
    <div class="Home">
        首页
        <div class="text">
            第一行文字1
        </div>
        <div class="time">
            {{'2020/5/28'|date}}
        </div>
        <el-button type="primary">主要按钮</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            query: this.$route.query,
        }
    },

    mounted() {
        this.getList();
    },

    methods: {
        async getList() {
            let res = await this.$services.testAxios({ pageIndex: 1, pageSize: 10 });

            console.log(res);
        },
    },

    components: {

    },
}
</script>
<style lang="scss" scoped>
@import '~css/public.scss';

.Home {
    .text {
        display: flex;
        border-top: 1px solid #ddd;
        border-bottom: 2px solid #ddd;
    }
}
</style>