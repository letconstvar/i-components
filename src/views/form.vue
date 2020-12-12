<template>
  <section>
    <div class="row">
      <i-form :model="form" label-position="right">
        <i-form-item label="密码">
          <i-input 
            class="i-input-demo"
            style="width: 200px"
            placeholder="请输入密码"
            v-model="form.password"
            showPassword
            size="mini">
          </i-input>
        </i-form-item>
      </i-form>
    </div>
  </section>
</template>

<script>
  import form from '@/components/form/form';
  import formItem from '@/components/form/form-item';
  import input from '@/components/input/input';
  export default {
    components: {
      [form.name]: form,
      [formItem.name]: formItem,
      [input.name]: input
    },
    data () {
      return {
        form: {
          password: ''
        }
      }
    }
  }
</script>

<style>

</style>