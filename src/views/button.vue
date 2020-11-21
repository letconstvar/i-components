<template>
  <div class="row">
    <i-button>button</i-button>
    <i-button type="primary">primary</i-button>
    <i-button type="success">plain</i-button>
    <i-button type="warning">warning</i-button>
    <i-button type="info">info</i-button>
    <i-button type="danger">danger</i-button>
  </div>
</template>


<script>
  import iButton from '@/components/button/button'
  export default {
    components: {
      iButton
    },
    data () {
      return {

      }
    }
  }
</script>


<style scoped>
  .row button {
    margin-right: 20px;
  }
</style>