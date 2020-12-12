<template>
  <div class="i-form-item">
    <label class="i-form-item__label" :style="labelStyle">
      {{ label }}
    </label>
    <div class="i-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'i-form-item',
  inject: ['Form'],
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      labelStyle: {
        width: this.Form.labelWidth,
        textAlign: this.Form.labelPosition
      }
    }
  }
}
</script>

<style>
  .i-form-item {
    margin-bottom: 20px;
  }
  .i-form-item .i-form-item__label {
    display: inline-block;
    vertical-align: middle;
    float: left;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .i-form-item .i-form-item__content {
    position: relative;
    font-size: 14px;
    overflow: hidden;
    line-height: 40px;
  }
</style>