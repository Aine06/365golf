import request from './base'

const url = {
  login: 'user/login',
  preLogin: 'user/prelogin'
}

/**
 * 获取微信公众号appId
 */
export function getAppID() {
  let payload = { url: url.preLogin }
  return request({}, payload)
}

/**
 * snsapi_base
 * @param code
 * @returns {*}
 */
export function preLogin(code) {
  let param = { code: code }
  let payload = { url: url.preLogin }
  return request(param, payload)
}

/**
 * snsapi_userinfo
 * @param code
 * @param encryptedData
 * @param iv
 */
export function login(code, encryptedData, iv) {
  let param = {
    code: code,
    encryptedData: encryptedData || null,
    iv: iv || null
  }
  let payload = { url: url.login }
  return request(param, payload)
}
