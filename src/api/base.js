import Cache from '../common/js/cache'
import { Code, Storage, Url } from './config'
import axios from 'axios'

export default function request(params, payload) {
  // 判断本地用户token是否存在，存在就带上token
  let tokenID = Cache.cookie.get(Storage.TokenID)
  // 公用基本参数
  let baseParam = {
    tokenid: tokenID || 0,
    platform: 'wechat',
    data: params,
    url: ''
  }
  // 判断是否需要微信url授权
  if (payload.wxOAuthUrl) {
    baseParam.url = payload.wxOAuthUrl
  }
  return new Promise((resolve, reject) => {
    axios({
      header: payload.header || { 'content-type': 'application/json' },
      method: payload.method || 'POST',
      url: Url.api_url + (payload.url || ''),
      data: baseParam
    }).then((res) => {
      if (res.status === Code.req_success.status) {
        let resData = res.data
        if (resData) {
          let code = resData.header.status
          switch (code) {
            case Code.req_success.status:
              if (resData.body.code !== Code.body_success.status) {
                if (process.env.NODE_ENV !== 'production') {
                  console.log('服务端:' + resData.body.msg)
                }
              }
              resolve(resData)
              break

            case Code.no_login.status:
              // Cache.cookie.remove(Storage.TokenID)
              // 默认生产环境跳转至微信授权页
              reject(new Error(Code.no_login.msg))
              break

            case Code.code_error.status:
              reject(new Error(Code.code_error.msg))
              break

            case Code.db_error.status:
              reject(new Error(Code.db_error.msg))
              break

            case Code.data_error.status:
              reject(new Error(Code.data_error.msg))
              break

            case Code.inter_error.status:
              reject(new Error(Code.inter_error.msg))
              break

            case Code.structure_error.status:
              reject(new Error(Code.structure_error.msg))
              break
            case Code.token_error.status:
              reject(new Error(Code.structure_error.msg))
              break
          }
        } else {
          reject(new Error('服务接口异常！'))
        }
      } else {
        reject(new Error('网络异常，请检查网络后重试!'))
      }
    }, (err) => {
      reject(new Error(err))
    })
  })
}
