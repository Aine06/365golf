# base 目录

## 基础组件

> 基础组件定义为可跨项目通用的组件，类似于第三方插件。比如：轮播插件、Loading指示器插件...

## usage
``` bash
# 引入组件库
import SmartUI from './base'
# 注册组件
Vue.use(SmartUI)

# 单独引用
import Test from './base/packages/test'
# 注册
Vue.component('test', Test)
```

### 组件列表
- scroll
