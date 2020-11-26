<template>
  <section>
    <div class="row">
      base input
      <i-input 
        class="i-input-demo"
        placeholder="base input"
      >
      </i-input>
    </div>
    <div class="row">
      input disabled
      <i-input 
        class="i-input-demo"
        placeholder="base input"
        disabled
      >
      </i-input>
    </div>
    <div class="row">
      input v-model
      <i-input 
        class="i-input-demo"
        placeholder="base input"
        v-model="username"
      >
      </i-input>
    </div>
    <div class="row">
      input clearable
      <i-input 
        class="i-input-demo"
        placeholder="base input"
        v-model="username"
        clearable
      >
      </i-input>
    </div>
    <div class="row">
      input showPassword
      <i-input 
        class="i-input-demo"
        placeholder="base input"
        v-model="username"
        showPassword
      >
      </i-input>
    </div>
    <div class="row">
      input size
      <i-input 
        class="i-input-demo"
        placeholder="base input"
        v-model="username"
        showPassword
        size="mini"
      >
      </i-input>
      <i-input 
        class="i-input-demo"
        placeholder="base input"
        v-model="username"
        showPassword
        size="large"
      >
      </i-input>
    </div>
  </section>
</template>


<script>
  import iInput from '@/components/input/input'
  export default {
    components: {
      iInput
    },
    data () {
      return {
        username: ""
      }
    }
  }
</script>


<style scoped>
  .i-input-demo {
    width: 300px;
  } 
  .row {
    margin-top: 20px;
  }
</style>