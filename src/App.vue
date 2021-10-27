<template>
  <div v-if="onOff" class="App" id="App">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Loading :showLoading="isLoading" :showRefreshBt="showRefreshBt" :status="status" />
  </div>
</template>
<script>
import Loading from './components/common/Loading';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      onOff: true,
    }
  },

  computed: {
    ...mapState({
      isLoading(state) {
        return state.isLoading;
      },
      showRefreshBt(state) {
        return state.showRefreshBt;
      },
      status(state) {
        return state.status;
      },
    })
  },

  created() {
    //挂载刷新方法在window上
    window.webviewRefresh = this.webviewRefresh;
  },

  methods: {
    webviewRefresh() {
      this.onOff = false;
      this.$nextTick(() => {
        this.onOff = true;
      });
    },
  },

  components: {
    Loading,
  },
}
</script>
<style lang="scss">
@import '~css/index.scss';
</style>