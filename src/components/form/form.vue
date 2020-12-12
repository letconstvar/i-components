<template>
  <section class="i-form">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'i-form',
    props: {
      model: {
        type: Object,
        required: true
      },
      labelWidth: {
        type: String,
        default: '80px'
      },
      labelPosition: {
        type: String,
        default: 'right'
      }
    },
    provide () {
      return {
        Form: this
      }
    }
  }
</script>

<style>

</style>