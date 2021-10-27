<template>
    <div class="demo360">
        <div id="container">
        </div>
    </div>
</template>
<script>
import { Viewer } from 'photo-sphere-viewer';
import CubemapAdapter from 'photo-sphere-viewer/dist/adapters/cubemap';
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';

export default {
    data() {
        return {

        }
    },

    mounted() {
        //一张全景图
        const viewer = new Viewer({
            container: document.querySelector('#container'),
            panorama: require('images/demo2.jpg'),
            plugins: [
                [MarkersPlugin, {
                    markers: [{
                            id: 'marker1',
                            longitude: '0deg',
                            latitude: '0deg',
                            image: require('images/dot.png'),
                            width: 50,
                            height: 50,
                            style: {
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                cursor: 'point'
                            },
                            tooltip: {
                                content: '三因科技有限公司',
                                position: 'top center'
                            },
                        },
                        {
                            id: 'marker2',
                            longitude: '-45deg',
                            latitude: '0deg',
                            image: require('images/dot.png'),
                            width: 50,
                            height: 50,
                            style: {
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                cursor: 'point'
                            },
                            tooltip: {
                                content: '杭州',
                                position: 'top center'
                            },
                        },
                        {
                            id: 'marker3',
                            longitude: '45deg',
                            latitude: '0deg',
                            image: require('images/dot.png'),
                            width: 50,
                            height: 50,
                            style: {
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                cursor: 'point'
                            },
                            tooltip: {
                                content: '欢迎您',
                                position: 'top center'
                            },
                        }
                    ],
                }],
            ],
        });

        //六张全景图
        // const viewer = new Viewer({
        //     container: document.querySelector('#container'),
        //     adapter: CubemapAdapter,
        //     panorama: {
        //         left: require('images/six/left.jpg'),
        //         front: require('images/six/front.jpg'),
        //         right: require('images/six/right.jpg'),
        //         back: require('images/six/back.jpg'),
        //         top: require('images/six/top.jpg'),
        //         bottom: require('images/six/bottom.jpg'),
        //     },
        //     plugins: [
        //         [MarkersPlugin, {
        //             markers: [{
        //                 id: 'marker1',
        //                 longitude: '80deg',
        //                 latitude: '-30deg',
        //                 image: require('images/dot.png'),
        //                 width: 50,
        //                 height: 50,
        //                 style: {
        //                     backgroundColor: 'rgba(0, 0, 0, 0)',
        //                     cursor: 'point'
        //                 },
        //                 tooltip: {
        //                     content: '去这里？',
        //                     position: 'top center'
        //                 },
        //             }],
        //         }],
        //     ],
        // });

        const markersPlugin = viewer.getPlugin(MarkersPlugin);

        markersPlugin.on('select-marker', (e, marker) => {
            console.log('选择点：', marker);
            markersPlugin.updateMarker({
                id: marker.id,
                image: require('images/dot.png'),
            });
            markersPlugin.gotoMarker(marker.id, 1000).then(() => {

            });
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
    #container {
        height: 100vh;
        #marker1 {
            width: 20px;
            height: 20px;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
}
</style>