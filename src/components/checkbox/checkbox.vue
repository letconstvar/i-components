<template>
  <section class="i-checkbox" :class="{ 'is-checked': isChecked }" @click="handleClick">
    <span class="i-checkbox__input">
      <span class="i-checkbox__inner"></span>
      <input 
        class="i-checkbox__original"
        type="checkbox" 
        :name="name"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="i-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default"> {{label}} </template>
    </span>
  </section>
</template>


<script>
export default {
  name: 'i-checkbox',
  inject: {
    checkboxGroup: {
      default: ''
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    isCheckboxGroup () {
      return this.checkboxGroup == "" ? false : true;
    },
    isChecked () {      // 判断组是否选择
      return this.isCheckboxGroup 
              ? this.checkboxGroup.value.includes(this.label) ? this.label : false
              : this.model;
    },
    model: {
      get () {
        // return this.value;   // 父组件传进来的值
        return this.isCheckboxGroup 
          ? this.checkboxGroup.value
          : this.value;
      },
      set (value) {           // 修改
        // this.$emit('input', value);
        this.isCheckboxGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value);
      }
    }
  },
  methods: {
    handleClick () {
      // this.$emit('input', !this.value);
      this.isCheckboxGroup 
        ? this.checkboxGroup.value.includes(this.label) 
          ? this.checkboxGroup.value.splice(this.checkboxGroup.value.indexOf(this.label), 1)
          : this.checkboxGroup.value.push(this.label)
        : this.$emit('input', !this.value);
    }
  }
}
</script>


<style>
  .i-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 20px;
  }
  .i-checkbox .i-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    margin-right: 5px;
  }
  .i-checkbox .i-checkbox__input .i-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #ffffff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46), background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  }
  .i-checkbox .i-checkbox__input .i-checkbox__inner:after {
    box-sizing: border-box;
    content: "";
    border: 1px solid #ffffff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
  }
  .i-checkbox .i-checkbox__input .i-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    left: 10px;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
  .i-checkbox .i-checkbox__original {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }

  /* checked */
  .i-checkbox.is-checked .i-checkbox__input .i-checkbox__inner {
    background-color: #409eff;
    color: #409eff;
  }
  .i-checkbox.is-checked .i-checkbox__input .i-checkbox__inner:after {
    transform: rotate(45deg) scaleY(1);
  }
  .i-checkbox.is-checked .i-checkbox__label {
    color: #409eff;
  }
</style>