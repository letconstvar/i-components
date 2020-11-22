<template>
  <div class="row">
    <div>
      <div>type</div>
      <i-button>button</i-button>
      <i-button type="primary">primary</i-button>
      <i-button type="success">plain</i-button>
      <i-button type="warning">warning</i-button>
      <i-button type="info">info</i-button>
      <i-button type="danger">danger</i-button>
    </div>
    <br>
    <div>
      <div>plain</div>
      <i-button plain type="primary">primary</i-button>
      <i-button plain type="success">plain</i-button>
      <i-button plain type="warning">warning</i-button>
      <i-button plain type="info">info</i-button>
      <i-button plain type="danger">danger</i-button>
    </div>
    <br>
    <div>
      <div>round</div>
      <i-button plain round type="success">plain</i-button>
      <i-button plain round type="primary">primary</i-button>
      <i-button plain round type="warning">warning</i-button>
      <i-button plain round type="info">info</i-button>
      <i-button plain round type="danger">danger</i-button>
    </div>
    <br>
    <div>
      <div>circle</div>
      <i-button circle plain round type="success"><i-icon name="search"></i-icon></i-button>
      <i-button circle plain round type="primary"><i-icon name="emoji"></i-icon></i-button>
      <i-button circle plain round type="warning"><i-icon name="emoji"></i-icon></i-button>
      <i-button circle plain round type="info"><i-icon name="emoji"></i-icon></i-button>
      <i-button circle plain round type="danger" @click="fn"><i-icon name="emoji"></i-icon></i-button>
    </div>
    <br>
    <div>
      <div>size</div>
      <i-button size="mini" plain type="success"><i-icon name="search"></i-icon></i-button>
      <i-button size="medium" plain type="primary"><i-icon name="emoji"></i-icon></i-button>
      <i-button size="bigger" plain type="warning"><i-icon name="emoji"></i-icon></i-button>
    </div>
    <br>
    <div>
      <div>disabled</div>
      <i-button circle plain disabled round type="danger" @click="fn"><i-icon name="attentionforbidfill"></i-icon></i-button>
    </div>
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
    },
    methods: {
      fn () {
        console.log(0)
      }
    }
  }
</script>


<style scoped>
  .row button {
    margin-right: 20px;
  }
</style>