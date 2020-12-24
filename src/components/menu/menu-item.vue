<template>
  <li 
    :class="[ 
      `i-menu-item--${mode}`, 
      { 'i-menu-item__disabled': disabled },
      { 'i-menu-item--horizontal__selected': horizontalSelected },
    ]" 
    @click="handleClick"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'i-menu-item',
  inject: ['Menu'],
  props: {
    index: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mode () {
      return this.Menu.mode;
    },
    horizontalSelected () {
      return this.Menu.value.includes(this.index);
    }
  },
  methods: {
    handleClick () {
      if (!this.Menu.value.includes(this.index)) {
        this.Menu.value.splice(0, this.Menu.value.length);
        this.Menu.value.push(this.index);
      }

      this.$emit('click', this);
    }
  }
}
</script>

<style>
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
  .i-menu-item--horizontal {
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
  .i-menu-item--horizontal__selected, .i-menu-item--horizontal:hover {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }

  /* disabled */
  .i-menu-item__disabled {
    color: rgba(0,0,0,.25)!important;
    background: none;
    border-color: transparent!important;
    cursor: not-allowed;
  }
</style>