<template>
  <button class="i-button" :class="[`i-button--${type}`]">
    <span><slot></slot></span>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data () {
      return {

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
    padding: 12px 20px;
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
</style>