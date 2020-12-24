<template>
  <section>
    <i-menu v-model="active" mode="horizontal">
      <i-menu-item index="home">
        <i-icon name="home"></i-icon> 主页
      </i-menu-item>
      <i-menu-item index="rank">
        <i-icon name="rank"></i-icon> 折线图
      </i-menu-item>
      <i-menu-item index="disabled" disabled>
        <i-icon name="warn"></i-icon> disabled
      </i-menu-item>

      <i-sub-menu>
        <template #title>
          <i-icon name="sortlight"></i-icon> title
        </template>
        <i-menu-item index="option1">
          option1
        </i-menu-item>
        <i-menu-item index="option2">
          option2
        </i-menu-item>
      </i-sub-menu>

      <i-menu-item index="ranks">
        <i-icon name="rank"></i-icon> 折线图s
      </i-menu-item>


    </i-menu>
  </section>
</template>

<script>
import menu from '@/components/menu/menu';
import menuItem from '@/components/menu/menu-item';
import subMenu from '@/components/menu/sub-menu';
export default {
  components: {
    [menu.name]: menu,
    [menuItem.name]: menuItem,
    [subMenu.name]: subMenu
  },
  data () {
    return {
      active: ['home']
    }
  }
}
</script>

<style>

</style>