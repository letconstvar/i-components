<template>
  <transition name="message-fade">
    <div v-if="visible" :class="wrapClasses">
        <!-- <img class="message_img" :src="typeImg"/> -->
        <span>
          {{message}}
        </span>
    </div>        
  </transition>
</template>


<script>
  const prefixCls = 'message';
  export default {
    name: 'message',
    data () {
      return {
        visible: false,
        type:'info',
        message: '',
        duration: 3000
      }
    },
    computed:{
      // typeImg(){
      //   return require(`./assets/${this.type}.svg`);
      // },
      wrapClasses(){
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`
        ]
      }
    },

    mounted() {
      this.setTimer() // 挂载的时候就开始计时，3000ms后消失
    },

    methods: {
      setTimer() {
        setTimeout(() => {
          this.close() // 3000ms之后调用关闭方法
        }, this.duration)
      },

      close() {
        this.visible = false
        setTimeout(() => {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
        }, 500)
      }
    }
  }
</script>


<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    transition: all 0.2s ease;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>