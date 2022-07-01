<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path" router>
          <el-submenu v-for="item in menuList" :key="item.path" :index="item.path">
            <template slot="title"><i class="el-icon-message" />{{ item.meta.title }}</template>
            <el-menu-item
              v-for="item1 in item.children"
              :key="item1.path"
              :index="item1.path"
              @click="
                (e) => {
                  return console.log(e, '💙💛 选中项')
                }
              "
              >{{ item1.meta.title }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px" />
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in $route.matched.filter((item) => item.meta.title)" :key="index" :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-main> <router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      console,
      menuList: [
        {
          name: 'home',
          path: '/home',
          meta: {
            title: '首页'
          },
          children: [
            {
              name: 'home-1',
              path: '/home1',
              meta: {
                title: '首页1'
              }
            },
            {
              name: 'home-2',
              path: '/home2',
              meta: {
                title: '首页2'
              }
            }
          ]
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route, '💙💛 $route')
  }
}
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
