<template>
  <svg class="icon" aria-hidden="true" @click="click">
    <use :xlink:href="iconName"></use>
  </svg>
</template>


<script>
  import '@/assets/js/iconfont.js';
  
  export default {
    name: 'i-icon',
    props: {
      name: {
        type: String,
        default: ""
      }
    },
    computed: {
      iconName () {
        return `#icon-${this.name}`
      }
    },
    methods: {
      click (e) {
        this.$emit('click', e);
      }
    }
  }
</script>


<style type="text/css">
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>