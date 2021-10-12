<template>
    <div class="demoBook">
        <div class="manual-wrap active" @touchmove.prevent v-show="show">
            <flipPage ref="flipPage" :width="width" :height="height" :data="dataList" @change="changeFn" @prev="prevFn" @next="nextFn" />
        </div>
    </div>
</template>
<script>
import flipPage from 'vue-flip-page';

export default {
    data() {
        return {
            width: 375,
            height: 667,
            currentIndex: 0,
            id: 0,
            show: true,
            dataList: [{ "picture_image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2600216442,2384386498&fm=15&gp=0.jpg", id: 1 }, { "picture_image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2600216442,2384386498&fm=15&gp=0.jpg", id: 2 }]
        }
    },

    mounted() {
        setTimeout(() => {
            this.handleSwitchManual(1);
        }, 1000);
    },

    methods: {
        handleSwitchManual(index) {
            if (index === this.currentIndex) return;
            this.$refs["flipPage"].toPage(index);
            this.currentIndex = index;
            this.id = this.dataList[this.currentIndex].id;
            // this.show = false;
        },
        changeFn(index) {
            console.log('changeFn', index);
        },
        prevFn(data) {
            console.log('prevFn', data);
        },
        nextFn(data) {
            console.log('nextFn', data);
        },
    },

    components: {
        flipPage,
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
        height: 100vh;
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
        overflow: hidden;
    }

    .manual-wrap.active {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }

    ::v-deep .page-count {
        top: 10px !important;
        padding: 0 10px !important;
    }
}
</style>