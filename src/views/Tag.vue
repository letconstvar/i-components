<template>
  <div class="Tag">
    <div>
      size:  
    </div>
    <Tag size="mini">mini</Tag> &nbsp;
    <Tag theme="plain" size="small">small</Tag>&nbsp;
    <Tag theme="light" size="medium">medium</Tag>&nbsp;
    <Tag theme="full" size="bigger">bigger</Tag>&nbsp;
    <div>
      close:
    </div>
    <Tag theme="full" size="bigger" :closable=true @close="onClose">bigger</Tag>&nbsp;
    <Tag theme="plain" size="mini" :closable=true @close="onClose">bigger</Tag>&nbsp;
  </div>
</template>

<script>
import Tag from '@/components/tag/tag.js'
export default {
  name: 'tag',
  components: {
    Tag
  },
  data () {
    return {
      
    }
  },
  methods: {
    onClose (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
  @import '../components/tag/tag.css'
</style>
