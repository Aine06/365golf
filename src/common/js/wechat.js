import { urlEncode, getParam, getAllParams } from './util'
import { Url } from '../../api/config'

const authBaseUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize'

/**
 * 拼接授权url
 * @param redirect_uri
 * @param response_type
 * @param scope
 * @param state
 * @returns {string}
 */
export function joinSnsApiUrl({ redirect_uri, response_type, scope, state }) {
  let appid = 'wxdee870541ec34bbe'
  redirect_uri = encodeURIComponent(redirect_uri)
  return `${authBaseUrl}?appid=${appid}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&state=${state}#wechat_redirect`
}

export function joinFinalUrl() {
  // 拼装微信重定向页面url
  let redirectUrl = Url.BASE_URL
  // 指定页面
  redirectUrl += (getParam('path') || 'index') + '.html?'
  // 指定附带参数
  let parameters = getAllParams()
  if (parameters.path) {
    delete parameters.path
  }
  if (parameters.code) {
    delete parameters.code
  }
  if (parameters.state) {
    delete parameters.state
  }
  let otherParams = urlEncode(parameters)
  if (otherParams && otherParams[0] === '&') {
    otherParams = otherParams.replace('&', '')
  }
  redirectUrl += otherParams
  if (redirectUrl[redirectUrl.length - 1] === '?') {
    redirectUrl = redirectUrl.substring(0, redirectUrl.length - 1)
  }
  return redirectUrl
}

export function joinLoginUrl() {
  // 拼装微信重定向页面url
  let redirectUrl = Url.LOGIN_URL
  // 指定附带参数
  let parameters = getAllParams()
  if (parameters.code) {
    delete parameters.code
  }
  if (parameters.state) {
    delete parameters.state
  }
  // let otherParams = urlEncode(parameters)
  // if (otherParams && otherParams[0] === '&') {
  //   otherParams = otherParams.replace('&', '')
  // }
  // redirectUrl += otherParams
  if (redirectUrl[redirectUrl.length - 1] === '?') {
    redirectUrl = redirectUrl.substring(0, redirectUrl.length - 1)
  }
  console.log('loginUrl', redirectUrl)
  return redirectUrl
}
