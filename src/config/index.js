// 测试环境 -- 测试服 打test包
const test = {
    host: 'http://localhost:9096' 
  
}
 
 // 生产环境 -- 正式服 打包 build 时候
const production = {
   host: 'http://localhost:9096' 

}

const config = {
   development: test,
   production: process.env.VUE_APP_TITLE === 'test' ? test : production
}

export default config[process.env.NODE_ENV]
