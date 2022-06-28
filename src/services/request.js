/**
 * 封装的请求api
 */

import soumnsHttp from '@/libs/http'

/**
 * @method getLogin
 * @param 无
 * @returns
 * {
 *  RESULT_MES {string }
 *  msg {string}
 *  status {number}
 * }
 * @desc 测试封装api的get请求
 */

export const getLogin = (params) => {
  return soumnsHttp.get('/api/login', params)
}

/**
 * @method postMock
 * @param 无
 * @returns
 * {
 *  RESULT_MES {string }
 *  msg {string}
 *  status {number}
 * }
 * @desc 测试封装api的post请求
 */
export const postMock = (params) => {
  return soumnsHttp.post('/postMock', params)
}
