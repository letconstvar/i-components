
<template>
  <li :class="[ `i-sub-menu-${mode}` ]" @click="handleClick">
    <span class="i-sub-menu-title">
      <slot name="title"></slot>
    </span>
  </li>
</template>

<script>
// import popupMenu from '@/components/menu/popupMenu';
export default {
  name: 'i-sub-menu',
  inject: ['Menu'],
  props: {
    index: [String, Number],
    title: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  components: {
    // [popupMenu.name]: popupMenu
  },

  data () {
    return {
      expend: false,
    }
  },

  mounted () {
    console.log(this.$refs.iPopupMenu)
  },

  computed: {
    mode () {
      return this.Menu.mode;
    },
    horizontalSelected () {
      return this.Menu.value.includes(this.index);
    },
  },

  methods: {
    onMouseEnter () {
      this.expend = true;
    },
    onMouseLeave () {
      this.expend = false;
    },
    // handleClick () {
    //   let body = document.body;
    //   body.appendChild()
    //   console.log(body)
    // }
  }
}
</script>

<style scoped>
  
</style>