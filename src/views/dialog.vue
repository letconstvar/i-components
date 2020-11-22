<template>
  <div>
    <i-button @click="fn()"> dialog </i-button> &nbsp;
    <i-dialog
      title="标题"
      width="50%"
      top="15vh"
      :visible.sync="visible"
    >
      默认插槽
      <template v-slot:footer>
        <i-button @click="visible=false">取消</i-button>
        <i-button @click="visible=false">确认</i-button>
      </template>
    </i-dialog>

    <i-button @click="visible1=true">具别名 title</i-button>
    <i-dialog
      width="30%"
      :visible.sync="visible1"
    >
      <template v-slot:title>
        <span>具别名 title</span>
      </template>
      具别名插槽
      <template v-slot:footer>
        <i-button @click="visible1=false">取消</i-button>
        <i-button @click="visible1=false">确认</i-button>
      </template>
    </i-dialog>
  </div>
</template>


<script>
  import iButton from '@/components/button/button';
  import iDialog from '@/components/dialog/dialog';
  export default {
    components: {
      iButton,
      iDialog
    },
    data () {
      return {
        visible: false,
        visible1: false,
      }
    },
    methods: {
      fn () {
        this.visible = true;
      }
    }
  }
</script>