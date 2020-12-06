<template>
  <label class="i-radio" :class="{ 'is-checked': label===model }">
    <span class="i-radio__input">
      <span class="i-radio__inner"></span>
      <input 
        class="i-radio__original" 
        type="radio"
        :value=label 
        :name="name" 
        v-model="model"
      />
    </span>
    <span class="i-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'i-radio',
  inject: {         // 接收 radio-group 组件的值，
    RadioGroup: {
      default: ''
    }
  },    
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        // 如果radio被radio-group所包裹，则取radio-group的value值，否则取自身value值
        return this.isRadioGroup ? this.RadioGroup.value : this.value;
      },
      set (value) {
        // 触发父组件input事件，修改v-model值
        // this.$emit('input', value);
        this.isRadioGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input', value);
      }
    },
    // 判断 radio 是否被 radio-group 所包裹
    isRadioGroup () {
      return this.RadioGroup == "" ? false : true;
    }
  }
}
</script>

<style>
  .i-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 20px;
    -moz-user-focus: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .i-radio .i-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  .i-radio .i-radio__input .i-radio__inner{
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
  }
  .i-radio .i-radio__input .i-radio__inner:after {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #ffffff;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .15s ease-in;
  }

  .i-radio .i-radio__original {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    margin: 0;
  }

  .i-radio__label {
    font-size: 14px;
    padding-left: 5px;
  }


  /* checked style */
  .i-radio.is-checked .i-radio__input .i-radio__inner{
    border-color: #409eff;
    background-color: #409eff;
  }
  .i-radio.is-checked .i-radio__input .i-radio__inner:after{
    transform: translate(-50%,-50%) scale(1);
  }
  .i-radio.is-checked .i-radio__label {
    color: #409eff;
  }
</style>