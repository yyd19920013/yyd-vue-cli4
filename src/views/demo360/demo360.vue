<template>
    <div class="demo360">
    </div>
</template>
<script>
import { Viewer } from 'photo-sphere-viewer';
import CubemapAdapter from 'photo-sphere-viewer/src/adapters/cubemap';

export default {
    data() {
        return {

        }
    },

    mounted() {
        //一张全景图
        // const viewer = new Viewer({
        //     container: document.querySelector('.demo360'),
        //     panorama: require('images/demo1.jpg'),
        // });

        //六张全景图
        const viewer = new Viewer({
            container: document.querySelector('.demo360'),
            adapter: CubemapAdapter,
            panorama: {
                left: require('images/six/left.jpg'),
                front: require('images/six/front.jpg'),
                right: require('images/six/right.jpg'),
                back: require('images/six/back.jpg'),
                top: require('images/six/top.jpg'),
                bottom: require('images/six/bottom.jpg'),
            },
        });
    },

    methods: {

    },

    components: {

    },
}
</script>
<style lang="scss" scoped>
@import '~css/public.scss';

.demo360 {
    height: 100vh;
}
</style>