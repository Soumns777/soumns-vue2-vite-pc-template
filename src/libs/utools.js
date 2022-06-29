/**
 * 使用递归处理路由菜单
 * @param newArr 所有菜单数组
 */
/**
 * 转换树形结构-递归
 */
export function formatTree(data) {
  // 将第一层和其他层的数据结构分开,然后再将其他层的数据筛选出放入其父级结构中
  const parents = data.filter((b) => b.pid === 0)
  const children = data.filter((c) => c.pid !== 0)

  dataToTree(parents, children)

  function dataToTree(parents, children) {
    parents.map((b) => {
      children.map((c, i) => {
        if (c.pid === b.id) {
          // vue2 template转AST树
          const _c = JSON.parse(JSON.stringify(children))

          //  删除当前的children,继续作为父亲寻找自己的子节点
          _c.splice(i, 1)

          // 继续递归,找出剩下子节点自己的子节点
          dataToTree([c], _c)

          if (b.children) {
            b.children.push(c)
          } else {
            b.children = [c]
          }
        }
      })
    })
  }

  return parents
}

/**
 * @desc 转换router列表
 */
export function generateRoute(userRoutes) {
  const newRoutes = userRoutes.map((r, i) => {
    const routes = {
      path: r.path,
      name: r.name,
      component: () => import(/* @vite-ignore */ `@/views/${r.name}.vue`)
    }

    if (r.children) {
      routes.children = generateRoute(r.children)
    }

    return routes
  })

  return newRoutes
}
