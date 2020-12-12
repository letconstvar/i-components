<template>
  <section style="width:70px;height:70px;">
    <i-upload-image
      :src="image_src"
      @change="onChange"
      @clear="handleClear">
      <template #uploadIcon>
        <i-icon name="add1" />
      </template>
      <template #closeIcon>
        <i-icon name="roundclosefill" />
      </template>
    </i-upload-image>
  </section>
</template>

<script>
  import uploadImage from '@/components/uploadImage/uploadImage';
  import icon from '@/components/icon/icon';
  export default {
    components: {
      [uploadImage.name]: uploadImage,
      [icon.name]: icon
    },
    data () {
      return {
        image_src: ""
      }
    },
    methods: {
      onChange (e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        let self = this;
        reader.readAsDataURL(file);
        reader.onload = function () {
          self.image_src = this.result;
        }
      },
      handleClear () {
        console.log('clear callback')
        this.image_src = "";
      }
    }
  }
</script>

<style>

</style>