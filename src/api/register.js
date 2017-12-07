import request from './base'

let url = {
  send_sms: 'user/send_sms',
  register: 'user/register'
}

export const Codes = {
  success: { status: 0, msg: '发送成功' },
  fail: { status: 1, msg: '短信发送失败，请稍后重试' },
  mobile_error: { status: 2, msg: '手机号码格式错误' },
  verified: { status: 0, msg: '验证成功' },
  code_error: { status: 1, msg: '验证码错误' },
  code_format_error: { status: 3, msg: '验证码格式错误' },
  code_expired: { status: 4, msg: '验证码已失效，请重新获取' },
  registered: { status: 5, msg: '手机号已注册' }
}

/**
 * 发送验证码
 * @param mobile
 */
export function sendSms(mobile) {
  return request({ mobile: mobile }, { url: url.send_sms })
}

/**
 * 用户注册
 * @param mobile
 * @param sms_code
 */
export function register(mobile, sms_code) {
  return request({ mobile: mobile, sms_code: sms_code }, { url: url.register })
}
