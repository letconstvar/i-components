<template>
  <div class="i-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <!-- 表单支持 name 属性 -->
    <input class="i___checkbox" type="checkbox" :name="name" ref="input_checkbox">
    <span class="i-switch__core" ref="core">
      <span class="i-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'i-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
      // 数据更新时，修改颜色
      this.$nextTick(()=>{
        this.setColor();
        this.$refs.input_checkbox.value = this.value;
      });
    },

    setColor () {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.inactiveColor : this.activeColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  },
  mounted () {
    this.setColor();
    this.$refs.input_checkbox.value = this.value;
  }
}
</script>

<style>
  /* input checkbox */
  .i___checkbox {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
  }

  .i-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
  }
  .i-switch .i-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
  }
  .i-switch .i-switch__core .i-switch__button {
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #ffffff;
  }

  /* checked style */
  .i-switch.is-checked .i-switch__core {
    border-color: #409eff;
    background-color: #409eff;
  }
  .i-switch.is-checked .i-switch__core .i-switch__button {
    transform: translateX(20px);
  }
</style>