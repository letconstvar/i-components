<template>
  <section class="main">
    <div class="row">
      单个checkbox: 
      <i-checkbox v-model="checked">test</i-checkbox>
    </div>

    <div class="row">
      checkbox-group: 
      <i-checkbox-group v-model="checkbox_group">
        <i-checkbox label="one"></i-checkbox>
        <i-checkbox label="two"></i-checkbox>
        <i-checkbox label="three"></i-checkbox>
      </i-checkbox-group>
    </div>
  </section>
</template>

<script>
import iCheckbox from '@/components/checkbox/checkbox';
import iCheckboxGroup from '@/components/checkbox/checkbox-group';
export default {
  components: {
    iCheckbox,
    iCheckboxGroup
  },
  data () {
    return {
      checked: false,

      checkbox_group: ['one'],
    }
  },

}
</script>


<style scoped>

</style>>