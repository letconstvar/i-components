<template>
  <button 
    class="i-button" 
    :class="[
      `i-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
      `i-button--${size}`,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: ''
      },
      plain: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      circle: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'medium'
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e);
      }
    }
  }
</script>


<style scoped>
  /* base button style */
  .i-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    /* 禁止文字元素被选中 */
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    /* padding: 12px 20px; */
    font-size: 14px;
    border-radius: 4px; 
  }
  .i-button:hover,
  .i-button:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  /* primary */
  .i-button--primary {
    color: #ffffff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .i-button--primary:hover,
  .i-button--primary:focus {
    background-color: #66b1ff;
    border-color: #66b1ff;
    color: #ffffff;
  }
  /* success */
  .i-button--success {
    color: #ffffff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  .i-button--success:hover,
  .i-button--success:focus {
    background-color: #85ce61;
    border-color: #85ce61;
    color: #ffffff;
  }
  /* info */
  .i-button--info {
    color: #ffffff;
    background-color: #909399;
    border-color: #909399;
  }
  .i-button--info:hover,
  .i-button--info:focus {
    background-color: #a6a9ab;
    border-color: #a6a9ab;
    color: #ffffff;
  }

  /* warning */
  .i-button--warning {
    color: #ffffff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  .i-button--warning:hover,
  .i-button--warning:focus {
    background-color: #ebb563;
    border-color: #ebb563;
    color: #ffffff;
  }
  /* danger */
  .i-button--danger {
    color: #ffffff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  .i-button--danger:hover,
  .i-button--danger:focus {
    background-color: #f78989;
    border-color: #f78989;
    color: #ffffff;
  }

  /* plain */
  .i-button.is-plain:hover,
  .i-button.is-plain:focus {
    background: #ffffff;
    border-color: #409eff;
    color: #409eff;
  }
  /* plain primary */
  .i-button--primary.is-plain {
    color: #a2a8ad;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
  .i-button--primary.is-plain:hover,
  .i-button--primary.is-plain:focus {
    color: #ffffff;
    background: #409eff;
    border-color: #409eff;
  }
  /* plain success */
  .i-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
  .i-button--success.is-plain:hover,
  .i-button--success.is-plain:focus {
    color: #ffffff;
    background: #67c23a;
    border-color: #67c23a;
  }
  /* plain info */
  .i-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
  .i-button--info.is-plain:hover,
  .i-button--info.is-plain:focus {
    color: #ffffff;
    background: #909399;
    border-color: #909399;
  }
  /* plain warning */
  .i-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
  .i-button--warning.is-plain:hover,
  .i-button--warning.is-plain:focus {
    color: #ffffff;
    background: #e6a23c;
    border-color: #e6a23c;
  }
  /* plain danger */
  .i-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
  .i-button--danger.is-plain:hover,
  .i-button--danger.is-plain:focus {
    color: #ffffff;
    background: #f56c6c;
    border-color: #f56c6c;
  }

  /* round */
  .i-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  /* circle */
  .i-button.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  /* disabled */
  .i-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-color: #ffffff;
    border-color: #ebeef5;
  }

  /* size */
  .i-button--mini {
    padding: 7px 15px;
    font-size: 12px;
  }
  .i-button--medium {
    padding: 9px 15px;
    font-size: 12px;
  }
  .i-button--bigger {
    padding: 10px 20px;
    font-size: 14px;
  }

</style>