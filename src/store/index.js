import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

//  导入所有的 module js  到 上下文中

/**
 * require.context函数接受三个参数,获取一个特定的上下文,主要用来实现自动化导入模块,
 * 在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用import导入模块
 * directory {String} -读取文件的路径
 * useSubdirectories {Boolean} -是否遍历文件的子目录
 * regExp {RegExp} -匹配文件的正则 
 */

const modulesFiles = require.context('./modules', true, /\.js$/)
// 从文件中自动生成 module 执行了keys方法返回了一个由匹配文件的文件名组成的数组
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'  返回模块的名称
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    //modulesFiles作为一个函数,也接受一个req参数,这个和resolve方法的req参数是一样的,即匹配的文件名的相对路径,而modulesFiles函数返回的是一个模块,这个模块才是真正我们需要的
    const value = modulesFiles(modulePath)
    // 将模块的 default  赋值给 返回参数，以便 reduce 返回
    modules[moduleName] = value.default
    return modules
}, {})
// 创建 Vuex  store
const store = new Vuex.Store({
    modules,
    getters
})

export default store