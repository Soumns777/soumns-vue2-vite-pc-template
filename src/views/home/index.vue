<template>
  <div :style="{ backgroundImage: 'url(' + mobileBg + ')' }" bg="center cover no-repeat" min-w-100vw min-h-100vh>
    <div w="100px" h="100px" bg="red-300" color="#fff" @click="init()">88</div>

    <img src="@/assets/uploads/form_icon.png" alt="" />

    <i class="i-ep-drizzling" text-30px color="red" absolute left-200px top-300px></i>
  </div>
</template>

<script>
import { getRoutes } from '../../services/request'
import { GET_USER_MSG } from '../../store/modules/user/constant'
import { formatTree } from '@/libs/utools'
import loginBg from '@/assets/uploads/login_bg.svg'
import mobileBg from '@/assets/uploads/mobile.png'
export default {
  name: 'Home',
  data() {
    return {
      loginBg,
      mobileBg
    }
  },

  mounted() {
    console.log(import.meta.env.VITE_PORT, '💙💛 环境变量')

    this.$store.commit(`User/${GET_USER_MSG}`, { name: 'yoona', age: 23 })
  },
  methods: {
    async init() {
      const { data: res } = await getRoutes()
      // console.log(res, '💙💛 初始化路由列表')

      const res1 = formatTree(res)
      console.log(res1, '💙💛 generateRoute')
    }
  }
}
</script>

<style scoped lang="scss"></style>
