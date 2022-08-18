<template>
  <div class="container">
    testVantAutoImport

    <!-- Button -->
    <div flex>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <van-button loading type="primary" />
      <van-button loading type="primary" loading-type="spinner" />
      <van-button loading type="info" loading-text="加载中..." />
    </div>

    <!-- Icon -->
    <div flex>
      <van-icon name="cart-o" color="#1989fa" size="40" />
      <van-icon name="fire-o" color="#ee0a24" size="40" />
    </div>

    <!-- CellGroup  Cell-->
    <div flex>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Button, Icon, CellGroup, Cell, Toast } from 'vant'
export default {
  name: 'testVantAutoImport',
  components: {
    // 注意:这里需要设置组件的名称
    [Button.name]: Button,
    [Icon.name]: Icon,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
