<template>
  <li 
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
    <div :class="[ 
        `i-sub-menu--${mode}`, 
        { 'i-menu-item__disabled': disabled },
        { 'i-sub-menu--horizontal__selected': horizontalSelected },
      ]"
    >
      <span class="i-sub-menu-title">
        <slot name="title"></slot>
      </span>
    </div>
    <transition name="slide-down">
      <ul 
        ref="expend"
        v-if="expend" 
        :class="[`i-sub-menu-expend--${mode}`]"
      >
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'i-sub-menu',
  inject: ['Menu'],
  props: {
    index: [String, Number],
    title: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      expend: false,
    }
  },

  mounted () {
    console.log(this.$slots.default)
  },

  computed: {
    mode () {
      return this.Menu.mode;
    },
    horizontalSelected () {
      return this.Menu.value.includes(this.index);
    },
  },

  methods: {
    onMouseEnter () {
      this.expend = true;
    },
    onMouseLeave () {
      this.expend = false;
    },
  }
}
</script>

<style>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    display: block;
    list-style-type: disc;
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 47px;
    box-sizing: border-box;
  }
  
  /* horizontal */
  .i-sub-menu--horizontal {
    margin: 0;
    padding: 0 20px;
    white-space: nowrap;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: color .3s cubic-bezier(.645,.045,.355,1),
                border-color .3s cubic-bezier(.645,.045,.355,1),
                background .3s cubic-bezier(.645,.045,.355,1),
                padding .15s cubic-bezier(.645,.045,.355,1);
  }
  .i-sub-menu--horizontal__selected, .i-sub-menu--horizontal:hover {
    color: #1890ff;
    /* border-bottom: 2px solid #1890ff; */
  }
  .i-sub-menu-expend--horizontal {
    background: #ffffff;
    box-shadow: 0px 0px 5px rgba(204, 204, 204, 0.5);
    min-width: 200px;
    height: auto;
  }
  /* slide-down */
  .slide-down-enter {     
    opacity: 0;
  }
  .slide-down-enter-to {      
    opacity: 1;
  }
  .slide-down-enter-active {     
    transition: all .5s;
  }
  .slide-down-leave {
    opacity: 1;
  }
  .slide-down-leave-to {
    opacity: 0;
  }
  .slide-down-leave-active {
    transition: all .5s;
  }
 

  /* .slide-down-enter-active {
    animation: slide-down 1s;
  }
  .slide-down-leave-active {
    animation: slide-down 1s reverse;
  }
  @keyframes slide-down {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  } */

  /* disabled */
  .i-menu-item__disabled {
    color: rgba(0,0,0,.25)!important;
    background: none;
    border-color: transparent!important;
    cursor: not-allowed;
  }
</style>