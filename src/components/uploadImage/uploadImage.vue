<template>
  <section class="i-upload-image">

    <!-- upload input -->
    <div class="i-upload-image__content" @click="getFile" v-show="!showImage">
      <span class="i-upload-image__uploadIcon">
        <span v-if="$slots.uploadIcon">
          <slot name="uploadIcon"></slot>
        </span>
        <span v-else>+</span>
      </span>
      <input 
        class="i-upload-image__input"
        type="file" 
        ref="upload_input" 
        accept="image/*" 
        @change="onChange"
      />
    </div>

    <!-- image -->
    <div class="i-upload-image__imageBox" v-show="showImage">
      <span class="i-upload-image__closeIcon" @click="handleClear">
        <span v-if="$slots.closeIcon">
          <slot name="closeIcon"></slot>
        </span>
        <span v-else>X</span>
      </span>
      <span class="i-upload-image__image">
        <img 
          :style="imageFit"
          :alt="alt" 
          :src="src" 
          @click="previewImage"
        />
      </span>
    </div>

    <!-- 预览蒙层 -->
    <transition name="fade">
      <div class="i-upload-image__mantle" @click.self="hiddenPreviewImage" v-if="isPreviewImage">
        <div class="i-upload-image__mantle__image" :style="previewImageBox">
          <img 
            :alt="alt" 
            :src="src" 
            style="width:100%; height:auto;" 
          />
        </div>
      </div>
    </transition>
    
  </section>
</template>

<script>
export default {
  name: 'i-upload-image',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    objectFit: {
      type: String,
      default: 'contain'
    },

  },
  data () {
    return {
      showImage: false,
      isPreviewImage: false,
      previewImageBox: {
        width: '',
        height: ''
      },
      imageFit: {
        width: '100%',
        height: '100%',
        objectFit: this.objectFit
      }
    }
  },
  methods: {
    getFile () {
      this.$refs.upload_input.click();
    },
    onChange (e) {
      this.$emit('change', e);
      this.showImage = true;
    },
    handleClear () {
      this.$refs.upload_input.value = null;
      this.showImage = false;
      this.$emit('clear', '');
    },
    previewImage () {
      this.isPreviewImage = true;
      let img = new Image();
      img.src = this.src;
      let target_img_width,target_img_height;
      let img_width = img.width,                                                         // 获取图片宽度
          img_height = img.height,                                                       // 获取图片高度
          widow_visible_width = document.documentElement.clientWidth,                    // 获取页面可见宽度
          widow_visible_height = document.documentElement.clientHeight;                  // 获取页面可见高度
      let scale = 0.8;       

      if (img_height > widow_visible_height*scale) {                                     // 判断图片高度是否大于页面可视高度
        target_img_height = widow_visible_height * scale;
        target_img_width = img_width/img_height * target_img_height;
        if (target_img_width > widow_visible_width * scale) {
          target_img_width = widow_visible_width * scale;
        }
      } else if (img_width > widow_visible_width*scale) {                                // 判断图片宽度是否大于页面可视宽度
        target_img_width = widow_visible_width * scale;
        target_img_height = target_img_width/img_width * img_height;
      } else {
        target_img_width = img_width;
        target_img_height = img_height;
      }

      this.previewImageBox.width = target_img_width + 'px';
      this.previewImageBox.height = target_img_height + 'px';
    },
    hiddenPreviewImage () {
      this.isPreviewImage = false;
    }
  }
}
</script>

<style>
.i-upload-image .i-upload-image__content, .i-upload-image__imageBox {
    position: relative;
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    overflow: hidden;
  }
  .i-upload-image .i-upload-image__content .i-upload-image__uploadIcon {
    position: absolute;
    width: 100%;
    font-size: 30px;
    color: #cccccc;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }
  .i-upload-image .i-upload-image__content .i-upload-image__input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .i-upload-image .i-upload-image__imageBox .i-upload-image__closeIcon {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #d9d9d9;
  }

  .i-upload-image .i-upload-image__mantle {
    position: fixed;
    top: 0;
    left: 0;
    background:rgba(0,0,0,0.5);
    z-index: 1;
    width: 100vw;
    height: 100vh;
    cursor: pointer;
  }
  .i-upload-image .i-upload-image__mantle .i-upload-image__mantle__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  /* 过度效果 */
  .fade-enter-active {
    animation: fade 0.3s;
  }
  .fade-leave-active {
    animation: fade 0.3s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>