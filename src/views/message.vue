<template>
  <div>
    <button @click="openMessage()">message</button>
  </div>
</template>

<script>
  export default {
    methods: {
      openMessage () {
        this.$message({
          type:'success',
          message:'11111111'
        })
      }
    }
  }
</script>