

# 基于koa的模板 (Node.js 8.x)


# 目录结构

project

* build web目录的构建脚本
* client 前端源码
* client/entry 入口点配置，模板
* client/page 页面入口
* server koa相关
* tmp 临时目录
* tmp/log/ 日志
* tmp/ssr/ 存放构建后的ssr组件，每次更新需要重新生成
* 

# 命令

* start 启动服务
* dev 本地开发
* build 构建生产环境资源
* debug 构建测试环境资源（线上，或本地）

# feature

* koa+react 同构模板，使用方便
* 多入口点ServerSideRender
* webpack+koa本地开发中间件，集成热重载
* 简化webpack配置，开箱即用，扩展方便
* 


# TODO

* css模块化
* css图片等资源生成，接入cdn路径绑定
* manifest.json?
* 本地mock
* 自动化测试
* react router |redux
* 提取css 类库 eg:bulma && css未压缩
* ssr性能 ？ React.renderToStream? 缓存？
* 不生成ssr相关临时文件，改为随app启动时生成，减少文件生成及读取


