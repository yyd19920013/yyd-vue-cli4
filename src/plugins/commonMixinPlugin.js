import Vue from 'vue';
import { fileType, alerts } from 'js/utils';

export default {
    install() {
        Vue.mixin({
            data() {
                return {

                }
            },
            mounted() {

            },
            methods: {
                isConfirm(message, confirmButtonText, cancelButtonText) {
                    return new Promise((resolve, reject) => {
                        this.$ele.messageBox({
                            title: '提示',
                            message,
                            showCancelButton: true,
                            confirmButtonText: confirmButtonText || '确定',
                            cancelButtonText: cancelButtonText || '取消',
                        }).then(() => {
                            return resolve(true);
                        }).catch(() => {
                            return resolve(false);
                        });
                    });
                },
                onlyConfirm(message, confirmButtonText, dangerouslyUseHTMLString = false, title = '提示') {
                    return new Promise((resolve, reject) => {
                        this.$ele.messageBox({
                            title,
                            message,
                            dangerouslyUseHTMLString,
                            showCancelButton: false,
                            confirmButtonText: confirmButtonText || '确定',
                        }).then(() => {
                            return resolve(true);
                        });
                    });
                },
                isImageAndLimit(file = {}) {
                    let { name = '', size = 0 } = file;
                    let arr = name.split('.');
                    let isImage = fileType(arr[arr.length - 1]) == 'image';
                    let isLt = size / 1024 / 1024 < 5;

                    console.log('isImageAndLimit', name);
                    if (!isImage) {
                        alerts('上传文件只能是图片', 'warning');
                    }
                    if (!isLt) {
                        alerts('上传图片大小不能超过5MB', 'warning');
                    }
                    return isImage && isLt;
                },
                isExcelAndLimit(file = {}) {
                    let isSheet = fileType(file.name.split('.')[1]) == 'excel';
                    let isLt = file.size / 1024 / 1024 < 5;

                    if (!isSheet) {
                        alerts('导入的文件格式不对，请导入Excel格式', 'warning');
                    }
                    if (!isLt) {
                        alerts('上传的文件超过5M，请重新处理Excel文件', 'warning');
                    }
                    return isSheet && isLt;
                },
            },
            components: {

            },
        });
    },
};