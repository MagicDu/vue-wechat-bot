// 测试环境 -- 测试服 打test包
const test = {
    host: 'http://192.168.10.241:2019' 
  
}
 
 // 生产环境 -- 正式服 打包 build 时候
const production = {
   host: 'http://192.168.10.241:2019' 

}

const config = {
   development: test,
   production: process.env.VUE_APP_TITLE === 'test' ? test : production
}

export default config[process.env.NODE_ENV]
