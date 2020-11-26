<template>
  <section>
    base
    <i-switch v-model="active"></i-switch>
    <br>
    自定义颜色
    <i-switch v-model="active" active-color="red" inactive-color="green"></i-switch>
    <br>
    name 属性
    <i-switch v-model="active" active-color="red" inactive-color="green" name="checked"></i-switch>
  </section>
</template>

<script>
import iSwitch from '@/components/switch/switch';
export default {
  name: 'iswitch',
  components: {
    iSwitch
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

<style>

</style>