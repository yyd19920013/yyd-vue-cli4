<template>
    <div class="demo360">
        <div id="container">
        </div>
        <audio :src="require('images/police_song.mp3')" preload="auto" loop="loop" ref="audio"></audio>
        <el-dialog title="" :visible.sync="dialogVisible" width="30%">
            <div class="wrap">
                <div class="main">
                    <img :src="require('images/logo.png')" alt=""/>
                    <div class="text">
                        <div>重庆三因兴云科技有限公司</div>
                        <div>时刻为您服务！</div>
                    </div>
                </div>
                <div class="end">
                    <el-button type="primary" size="mini" icon="el-icon-video-play" @click="playMusic" v-if="isPlay"></el-button>
                    <el-button type="warning" size="mini" icon="el-icon-video-pause" @click="pauseMusic" v-else-if="!isPlay"></el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { Viewer } from 'photo-sphere-viewer';
import CubemapAdapter from 'photo-sphere-viewer/dist/adapters/cubemap';
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';

export default {
    data() {
        return {
            dialogVisible: false,
            isPlay:true,
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
                            cursor: 'pointer'
                        },
                        // tooltip: {
                        //     content: '重庆三因兴云 时刻为您服务',
                        //     position: 'top center'
                        // },
                    }],
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
            this.dialogVisible = true;
            markersPlugin.updateMarker({
                id: marker.id,
                image: require('images/dot.png'),
            });
            markersPlugin.gotoMarker(marker.id, 1000).then(() => {

            });
        });
    },

    methods: {
        playMusic() {
            this.$refs.audio.play();
            this.isPlay=false;
        },
        pauseMusic() {
            this.$refs.audio.pause();
            this.isPlay=true;
        },
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
    }
    ::v-deep .el-dialog__body {
        padding-top: 10px;
        padding-bottom: 20px;
    }
    .wrap {
        text-align: center;
        .main{
            padding: 20px 0;
            img{
                width: 100px;
            }
            .text{
                padding-top: 10px;
            }
        }
        .end {
            display: flex;
            align-items:end;
            flex-direction:column;
            .el-button{
                display: flex;
                justify-content:center;
                width: 30px;
                margin: 0;
                margin-bottom: 5px;
                span{
                    font-size: 12px;
                }
            }
        }
    }
}
</style>