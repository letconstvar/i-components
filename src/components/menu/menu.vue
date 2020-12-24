<template>
  <ul class="i-menu" :class="[`i-menu--${mode}`]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'i-menu',
  provide () {
    return {
      Menu: this
    }
  },
  props: {
    value: Array,
    mode: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>

<style>
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding: 0;
    margin: 0;
    height: 47px;
  }

  .i-menu {
    box-sizing: border-box;
    font-size: 14px;
  }
  .i-menu--horizontal {
    display: flex;
    flex-direction: row;
    line-height: 46px;
  }
</style>