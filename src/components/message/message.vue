<template>
  <transition name="sidle-fade" @after-leave="handleAfterLeave">
    <div v-show="visible" :class="[ 'i-message' , `i-message-${type}`, '$__count-message' ]" :style="positionTop">

      <span class="i-message-icon-success" v-if="type=='success'">
        <i-icon name="roundcheckfill"></i-icon>
      </span>

      <span class="i-message-icon-info" v-if="type=='info'">
        <i-icon name="commentfill"></i-icon>
      </span>

      <span class="i-message-icon-warning" v-if="type=='warning'">
        <i-icon name="warnfill"></i-icon>
      </span>

      <span class="i-message-icon-error" v-if="type=='error'">
        <i-icon name="roundclosefill"></i-icon>
      </span>

      <span class="i-message-text">
        {{ text }}
      </span>

      <span class="i-message-close-icon" @click="handleClose">
        <i-icon name="close"></i-icon>
      </span>
    </div>
  </transition>
</template>


<script>
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
  };
  export default {
    name: 'i-message',
    data () {
      return {
        visible: false,
        type: '',
        text: '',
      }
    },
    computed: {
      positionTop () {
        let count = document.getElementsByClassName('$__count-message').length;
        let top = count == 0 ? 20 : 40*count + 10*count + 20;
        return {
          top: `${top}px`
        }
      }
    },
    methods: {
      handleAfterLeave () {
        this.$emit('after-leave', '');
      },
      handleClose () {
        this.$el.parentNode.removeChild(this.$el);
        this.$destroy();
      }
    }
  }
</script>


<style>
  .i-message {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    min-width: 200px;
    border-radius: 2px;
    height:40px;
    line-height: 40px;
    padding: 0 20px;
    background-color: #ffffff;
    box-shadow: 0 0 5px rgba(204, 204, 204, 0.5);
  }
  .i-message-close-icon {
    float: right;
  }
  .i-message-text {
    margin: 0 10px;
    font-size: 14px;
    color: #a09f9f;
  }

  /* icon style */
  .i-message-icon-success {
    color: rgb(51, 177, 51);
    font-size: 18px;
  }
  .i-message-icon-info {
    color: #cccccc;
    font-size: 18px;
  }
  .i-message-icon-warning {
    color: #faecd8;
    font-size: 18px;
  }
  .i-message-icon-warning {
    color: #fdc678;
    font-size: 18px;
  }
  .i-message-icon-error {
    color: #ff7171;
    font-size: 18px;
  }
  .i-message-close-icon {
    color: #cccccc;
    font-size: 18px;
  }

  .sidle-fade-enter-active {
    animation: sildeFade .5s;
  }
  .sidle-fade-leave-active {
    animation: sildeFade .5s reverse;
  }
  @keyframes sildeFade {
    0% {
      transform: translate(-50%, -40px);
    }
    100% {
      transform: translate(-50%, 0px);
    }
  }
</style>