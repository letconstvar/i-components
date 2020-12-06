<template>
  <section class="i-radio-group">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'i-radio-group',
  props: {
    value: null,
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style>

</style>