<template>
  <!-- bg-[url('/src/assets/uploads/login_bg.svg')] -->
  <div style="background-image: url('/uploads/login_bg.svg')" bg="center cover no-repeat" min-w-100vw min-h-100vh>
    <div w="40px" h="40px" bg="red-300" @click="init()">88</div>
  </div>
</template>

<script>
import { getLogin } from '../../services/request'
import { GET_USER_MSG } from '../../store/modules/user/constant'
export default {
  name: 'Home',
  data() {
    return {}
  },

  mounted() {
    console.log(import.meta.env.VITE_PORT, '💙💛 环境变量')

    this.$store.commit(`User/${GET_USER_MSG}`, { name: 'yoona', age: 23 })
  },
  methods: {
    async init() {
      const res = await getLogin({
        userName: 'iu',
        password: '123'
      })
      console.log(res, '💙💛 初始化登录')
    }
  }
}
</script>

<style scoped lang="scss"></style>
