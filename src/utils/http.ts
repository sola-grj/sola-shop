/**
 * 添加拦截器
 *  拦截request请求
 *  拦截uploadFile文件上传
 *
 * TODO
 *  1.非http开头需要拼接地址
 *  2.请求超时
 *  3.添加小程序端请求标识
 *  4.添加token请求头标识
 */

import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1.非http开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2.请求超时，默认60s
    options.timeout = 600000
    // 3.添加小程序端请求标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4.添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 请求函数
 * @param UniApp.RequestOptions
 * @returns Promise
 * 1.返回Promise对象
 * 2.请求成功
 *  2.1 提取核心数据 res.data
 *  2.2 添加类型，支持泛型
 * 3.请求失败
 *  3.1 网络错误 提示用户更换网络
 *  3.2 401错误 清理用户信息，跳转到登路页面
 *  3.3 其他错误 根据后端错误提示轻提示
 */

interface Data<T> {
  code: string
  msg: string
  result: T
}
// 2.2 添加类型，支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 2.请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 3.2 401错误 清理用户信息，跳转到登路页面
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 3.3 其他错误 根据后端错误提示轻提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        // 3.1 网络错误 提示用户更换网络
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
