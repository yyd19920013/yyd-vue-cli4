<template>
    <div class="demoBook">
        <div class="manual-wrap active">
            <turn ref="turn" :width="width" :height="height" :data="dataList" @change="changeFn" @prev="prevFn" @next="nextFn" />
        </div>
    </div>
</template>
<script>
import turn from 'vue-flip-page';

export default {
    data() {
        return {
            width: 500,
            height: 500,
            dataList: [{ "picture_image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2600216442,2384386498&fm=15&gp=0.jpg", }, { "picture_image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2600216442,2384386498&fm=15&gp=0.jpg", }]
        }
    },

    mounted() {

    },

    methods: {
        handleSwitchManual(index) {
            if (index === this.currentIndex) return;
            this.$refs["turn"].toPage(index);
            this.currentIndex = index;
            this.goods_id = this.manuals[this.currentIndex].goods_id;
            this.show = false;
        },
        changeFn(){

        },
        prevFn(){

        },
        nextFn(){

        },
    },

    components: {
        turn,
    },
}
</script>
<style lang="scss" scoped>
@import '~css/public.scss';

.demoBook {
    .manual-wrap {
        position: relative;
        z-index: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-transform: scale(0.95);
        transform: scale(0.95);
        -webkit-transition: opacity ease 0.5s;
        transition: opacity ease 0.5s;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -o-user-select: none;
    }

    .manual-wrap.active {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
}
</style>