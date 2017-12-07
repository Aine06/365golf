export const Code = {
  req_success: { status: 200, msg: '请求成功' },
  no_login: { status: 403, msg: '未登录' },
  code_error: { status: 500, msg: '服务端程序代码错误' },
  db_error: { status: 501, msg: '服务端数据库错误' },
  data_error: { status: 502, msg: '上送的信息为空' },
  inter_error: { status: 503, msg: '上送的信息接口有误' },
  structure_error: { status: 504, msg: '上送的数据体结构有误' },
  body_success: { status: 0, msg: '服务逻辑成功' },
  token_error: { status: 405, msg: 'tokenid错误过多，禁止访问' }
}

export const Storage = {
  TokenID: 'CORP_LOGIN_TOKEN'
}

let baseUrl = 'http://partner.yongkala.com/'
export const Url = {
  base_url: baseUrl,
  auth_url: baseUrl + '#/oauth',
  login_url: baseUrl + '#/login',
  code_url: baseUrl + '#/code',
  api_url: baseUrl + 'api/'
}
