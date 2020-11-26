<template>
  <div class="i-input" :class="[{ 'i-input--suffix': isSuffix },`i-input__${size}`]">
    <!-- 如果传了showPassword, 判断密码框的显示，不传则直接使用type -->
    <input 
      class="i-input__inner" 
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" 
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="i-input__suffix" v-if="isSuffix">
      <i-icon :name="showPasswordIcon" v-if="showPassword" @click="handlePassword"></i-icon> 
      <i-icon name="roundclosefill" v-if="clearable && value" @click="clear"></i-icon> 
    </span>
  </div>
</template>


<script>
  import iIcon from '@/components/icon/icon';
  export default {
    name: 'i-input',
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "text"
      },
      name: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        defalut: false
      },
      value: {
        type: String,
        default: ""
      },
      clearable: {
        type: Boolean,
        default: false
      },
      showPassword: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: "medium"
      }
    },
    components: {
      iIcon
    },
    computed: {
      isSuffix () {
        return this.clearable || this.showPassword;
      },
      showPasswordIcon () {
        return this.passwordVisible ? 'eye' : 'eye-close';
      }
    },
    data () {
      return {
        passwordVisible: false,
      }
    },
    methods: {
      handleInput (e) {
        this.$emit('input', e.target.value);
      },
      clear () {
        this.$emit('input', '');
      },
      handlePassword () {
        this.passwordVisible = !this.passwordVisible;
      }
    }
  }
</script>


<style>
  .i-input {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 14px;
  }
  .i-input .i-input__inner {
    -webkit-appearance: none;
    background-color: #ffffff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
  }

  .i-input .i-input__inner::placeholder {
    color: #cacbcc;
  }
  .i-input .i-input__inner:hover {
    outline: none;
    border-color: #409eff;
  }
  .i-input .i-input__inner:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  .i-input .i-input__inner[disabled] {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1;
  }
  .i-input .i-input__inner[disabled]:hover {
    border-color: #d9d9d9;
  }


  /* icon */
  .i-input--suffix {
    margin-right: 15px;
  }
  .i-input--suffix .i-input__suffix {
    line-height: 40px;
    position: absolute;
    height: 100%;
    right: 5px;
    top: 0;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
  }
  .i-input--suffix .i-input__suffix .icon {
    display: inline-block;
    color: #c0c4cc;
    font-size: 14px;
    cursor: pointer;
    transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-right: 5px;
  }

  /* size */
  .i-input__large .i-input__inner {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
  }
  .i-input__large .i-input__suffix {
    line-height: 50px;
    font-size: 18px;
  }
  .i-input__mini .i-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .i-input__mini .i-input__suffix {
    line-height: 30px;
  }
</style>