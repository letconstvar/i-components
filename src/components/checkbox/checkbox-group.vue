<template>
  <section class="i-checkbox-group">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'i-checkbox-group',
    props: {
      value: {
        type: Array
      }
    },
    provide () {
      return {
        checkboxGroup: this
      }
    }
  }
</script>

<style>

</style>