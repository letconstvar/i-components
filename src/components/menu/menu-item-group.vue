<template>
  <div class="i-menu-group">
    <div class="i-item-group-title">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'i-menu-group',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>