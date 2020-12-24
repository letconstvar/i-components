<template>
  <div>
    <i-button @click="successMessage">success</i-button>
    <i-button @click="infoMessage">info</i-button>
    <i-button @click="warningMessage">warning</i-button>
    <i-button @click="errorMessage">error</i-button>
  </div>
</template>

<script>
  import button from '@/components/button/button';
  export default {
    components: {
      [button.name]: button
    },
    methods: {
      successMessage () {
        this.$message({
          type: 'success',
          text: '这是一条success消息',
          duration: 4000
        })
      },
      infoMessage () {
        this.$message({
          type: 'info',
          text: '这是一条info消息',
          duration: 4000
        })
      },
      warningMessage () {
        this.$message({
          type: 'warning',
          text: '这是一条warning消息',
          duration: 4000
        })
      },
      errorMessage () {
        this.$message({
          type: 'error',
          text: '这是一条error消息',
          duration: 4000
        })
      },
    }
  }
</script>