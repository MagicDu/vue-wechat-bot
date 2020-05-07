import { getToken, setToken, removeToken } from '@/utils/auth'
import { userLogout, userLogin, getInfo } from '@/api/user'
import * as types from '../types.js'
import { userDsf, roleList } from '@/settings'

const state = {
  token: getToken(),
  sex: '', // 性别
  truename: '', // 用户truename
  name: '', // 用户名
  avatar: '', // 头像
  deptName: '', // 机构名称
  areaNumber: '', // 机构标识码
  userId: '', // 用户id
  deptId: '',// 用户标识码
  permissions: '', // 用户访问列表
  roles: [],// 用户角色列表
  rolesList: [],//用户角色列表 判断当前角色
  rolesName: '', // 用户当前角色名字
  addressDataList: [], // 所有省市三级联动
  isOneLogin: false, // 是不是刚登录
  isAdmin: false, // 平台端
  isProvince: false, // 省教育局
  isCity: false, // 市教育局
  isCounty: false, // 区教育局
  isSchool: false,  //学校
  isInstitution: false, //校外机构
  isConsultant: false, //咨询师
  isStudent: false, //学生
  isParent: false, //家长
  isLeader: false, //班主任
  isTeacher: false, //老师
  isAdministration: false, //行政
  isSupportstaff: false, //后勤
	isDsf: false, // 第三方
	thirdUser: {}, // 第三方登录的用户信息
}

const mutations = {
  [types.SET_TOKEN]: (state, token) => {
    state.token = token
    state.isOneLogin = true
  },
  [types.SET_ISONELOGIN]: (state, flag) => {
    state.isOneLogin = flag
  },
  [types.SET_PERMISSIONS]: (state, permissions) => {
    state.permissions = permissions
  },
  [types.SET_SYSUSER]: (state, sysUser) => {
    let { nickname, avatar, userId, deptId, truename, userType, deptName, areaNumber, sex } = sysUser
    state.name = nickname // nickname是昵称。username是登录账号
    state.avatar = avatar
    state.userId = userId
    state.deptId = deptId
    state.truename = truename
    state.deptName = deptName
    state.areaNumber = areaNumber
    state.sex = sex
    
    // 
    state.isDsf = userType == '14' ? true : false // 设置第三方双重角色
    if (state.isDsf) { // 第三方角色赋参
      let roles = state.thirdUser ? state.thirdUser.thirdRole : '';
      state.deptId = state.thirdUser.deptId

      for (let item of roleList) { // 设置当前角色
        state[item.param] = item.value == roles ? true : false
        if (item.value == roles) {
          state.rolesName = item.name
        }
      }
    } else { // 非第三方赋参
      for (let item of roleList) { // 设置当前角色
        state[item.param] = item.userType == userType ? true : false
        if (item.userType == userType) {
          state.rolesName = item.name
        }
      }
    }
  },

  [types.SET_ROLES]: (state, roles) => {
    state.roles = roles
  },

  [types.SET_AVATAR]: (state, avatar) => {
    state.avatar = avatar
  },

	[types.SET_ROLESLIST]: (state, param) => { 
    let list = param.filter(item => item.currentRole == 1)[0]
    let roles = list ? list.roleCode : ''

    state.rolesList = param
    state.rolesName = list ? list.roleName : ''
    state.isDsf = roles == userDsf ? true : false // 设置第三方双重角色
    
    if (state.isDsf) {  // 第三方重新设置角色判断。重新设置deptid
      roles = state.thirdUser ? state.thirdUser.thirdRole : '';
      state.deptId = state.thirdUser.deptId 
    }
    
    for (let item of roleList) { // 设置当前角色
      state[item.param] = item.value == roles ? true : false
    }
  },
  [types.SET_THIRDUSER]: (state, param) => {
		param = param ? param : {}
		let thirdRole = param.thirdRole
		let list = roleList.filter(item => item.value == thirdRole)
		param.thirdRoleName = list[0] ? list[0].name : ''
		state.thirdUser = param
  },
  [types.SET_ADDRESSDATA]: (state, param) => {
    state.addressDataList = param
  }
}

const actions = {
  // api处理逻辑
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      userLogin({ username: username.trim(), password: password }).then(response => {
        const access_token = response.data
        commit(types.SET_TOKEN, access_token)
        setToken(access_token)
        resolve(userInfo)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info api处理逻辑
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }


        const { roles, sysUser, permissions, thirdUser, thirdRole, deptName, areaNumber } = data

        if (!sysUser.avatar) {
          sysUser.avatar = sysUser.sex == '1' ? require('@/assets/images/user-g.png') : require('@/assets/images/user-b.png');
        }


        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!' + state)
				}

				if (thirdUser) {
					thirdUser.thirdRole = thirdRole
        }
        sysUser.deptName = deptName
        sysUser.areaNumber = areaNumber
				commit(types.SET_THIRDUSER, thirdUser)
        commit(types.SET_ROLES, roles)
				commit(types.SET_SYSUSER, sysUser)
				commit(types.SET_PERMISSIONS, permissions)

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
	},
	
	setThidrUser({ commit }, thirdUser) {
		commit(types.SET_THIRDUSER, thirdUser) //  设置第三方用户信息
		commit(types.SET_ROLESLIST, state.rolesList) // 重新设置角色
	},

  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      userLogout(state.token).then(() => {
        removeToken()
        resolve(state)
        commit(types.SET_TOKEN, '')
        commit(types.SET_ROLES, [])
      }).catch(error => {
        removeToken()
        resolve(state)
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit(types.SET_TOKEN, '')
      commit(types.SET_ROLES, [])
      removeToken()
      resolve()
    })
  },
  

  setIsOneLogin({ commit }, flag) {
    commit(types.SET_ISONELOGIN, flag)
  },
  resetAvatar({ commit }, avatar) {
    commit(types.SET_AVATAR, avatar)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
