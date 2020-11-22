<template>
  <transition name="slide-fade">
    <section class="i-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="i-dialog" :style="{ width:width, marginTop:top }">
        <div class="i-dialog__header">
          <slot name="title">
            <span class="i-dialog__title">{{ title }}</span>
          </slot>
          <button class="i-dialog__headerbtn" @click="handleClose">
            <i-icon name="close"></i-icon>
          </button>
        </div>
        <div class="i-dialog__body">
          <slot><!-- 默认插槽 -->
            <span>这是一条信息</span>
          </slot>
        </div>
        <div class="i-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </section>
  </transition>
</template>


<script>
  import iIcon from '@/components/icon/icon';
  export default {
    name: 'i-dialog',
    props: {
      title: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '30%'
      },
      top: {
        type: String,
        default: '15vh'
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    components: {
      iIcon
    },
    data () {
      return {

      }
    },
    methods: {
      handleClose () {
        // 传递 visible = false 给父组件
        this.$emit('update:visible', false)
      }
    }
  }
</script>


<style>
  /* 背景 */
  .i-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* dialog */
  .i-dialog__wrapper .i-dialog {
    position: relative;
    margin: 15vh auto 50px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    background-color: #ffffff;
  }

  /* header */
  .i-dialog__wrapper .i-dialog .i-dialog__header {
    padding: 20px 20px 10px;
  }
  .i-dialog__wrapper .i-dialog .i-dialog__header .i-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }
  .i-dialog__wrapper .i-dialog .i-dialog__header .i-dialog__headerbtn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
  }

  /* body */
  .i-dialog__wrapper .i-dialog .i-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-wrap: break-all;
  }

  /* footer */
  .i-dialog__wrapper .i-dialog .i-dialog__footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
  }
  .i-dialog__wrapper .i-dialog .i-dialog__footer button:first-child {
    margin-right: 20px;
  }

  /* slide-fade */
  /*
  .slide-fade-enter {     
    opacity: 0;
  }
  .slide-fade-enter-to {      
    opacity: 1;
  }
  .slide-fade-enter-active {     
    transition: all .5s;
  }
  .slide-fade-leave {
    opacity: 1;
  }
  .slide-fade-leave-to {
    opacity: 0;
  }
  .slide-fade-leave-active {
    transition: all .5s;
  }
  */

  /* css 动画 */
  .slide-fade-enter-active {
    animation: fade 0.3s;
  }
  .slide-fade-leave-active {
    animation: fade 0.3s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>