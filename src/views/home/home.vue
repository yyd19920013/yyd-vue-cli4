<template>
    <div class="Home">
        <div class="text">px转rem测试</div>
        <div class="time">
            时间格式化：{{'2020/5/28'|date}}
        </div>
        <el-button type="primary" @click="confirm">弹出确定按钮</el-button>
        <el-button type="primary" @click="getList">请求接口数据</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },

    mounted() {

    },

    methods: {
        async confirm() {
            this.$vux.confirm.show({
  // 组件除show外的属性
  onCancel () {
    console.log(this) // 非当前 vm
    console.log(_this) // 当前 vm
  },
  onConfirm () {}
})
            let res = await this.isConfirm('是否确定？');
            if (!res) return;

            console.log('确定');
        },
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