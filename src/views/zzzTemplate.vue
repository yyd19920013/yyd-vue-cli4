<template>
    <div class="wrapName">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
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

    },

    components: {

    },
}
</script>
<style lang="scss" scoped>
@import '~css/public.scss';

.wrapName {}
</style>