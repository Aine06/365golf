/**
 * JSON对象转换为字符串
 * @param val
 */
export function serialize(val) {
  return JSON.stringify(val)
}

/**
 * 字符串转换为JSON对象
 * @param val
 * @returns {*}
 */
export function deserialize(val) {
  if (typeof val !== 'string') return undefined
  try {
    return JSON.parse(val)
  } catch (e) {
    return val || undefined
  }
}

/**
 * 手机号码验证
 * @param phone
 * @returns {boolean}
 */
export function verifyPhone(phone) {
  return /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(phone)
}

/**
 * 6位数字验证码验证
 * @param code
 * @returns {boolean}
 */
export function verifyCheckCode(code) {
  return /\d{6}/.test(code)
}

/**
 * 校验用户姓名（包含少数名族）
 * @param userName
 * @returns {boolean}
 */
export function verifyName(userName) {
  return /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/.test(userName)
}

/**
 * 转换url参数
 * @param param
 * @param key
 * @param encode
 * @returns {string}
 */
export function urlEncode(param, key, encode) {
  if (param === null) {
    return ''
  }
  let paramStr = ''
  let t = typeof (param)
  if (t === 'string' || t === 'number' || t === 'boolean') {
    paramStr += '&' + key + '=' + ((encode === null || encode) ? encodeURIComponent(param) : param)
  } else {
    for (let i in param) {
      let k = key === null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      paramStr += urlEncode(param[i], k, encode)
    }
  }
  return paramStr
}

/**
 * 获取参数
 * @param key
 * @returns {*}
 */
export function getParam(key) {
  let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return decodeURIComponent(r[2])
  }
  return null
}

/**
 * 获取域名
 */
export function getOrigin() {
  return location.origin.indexOf('localhost') > -1 ? 'http://partner.yongkala.com/' : location.origin
}

export function getAllParams() {
  // 获取url中"?"符后的字串
  let url = location.search
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
    }
  }
  return theRequest;
}
