<template>
<section>
  <div class="row">
    <i-radio label="1" v-model="gender">男</i-radio>
    <i-radio label="0" v-model="gender">女</i-radio>
  </div>
  <div class="row">
    radio-group: 
    <i-radio-group v-model="radio_group">
      <i-radio label="one">one</i-radio>
      <i-radio label="two">two</i-radio>
    </i-radio-group>
  </div>

</section>
</template>

<script>
import iRadio from '@/components/radio/radio';
import iRadioGroup from '@/components/radio/radio-group';
export default {
  components: {
    iRadio,
    iRadioGroup
  },
  data () {
    return {
      gender: '',
      radio_group: ''
    }
  }
}
</script>

<style>

</style>