module.exports = {
    title: 'bot-ui',
    codeText: window.location.protocol + '//' + window.location.hostname + '/',
    // websocket请求地址
    websocketApi: 'ws://192.168.10.195:9099/websocket',
    /**
     * @type { String}
     * @description 整体logo风格，图片名后缀
     *  */
    skin: '',
    /**
     * @type { boolean} true | false
     * @description Whether show the settings right-panel
     */
    showSettings: true,

    /**
     * @type { boolean} true | false
     * @description Whether need tagsView
     */
    tagsView: true,

    /**
     * @type { boolean} true | false
     * @description Whether fix the header
     */
    fixedHeader: true,
    /**
     * @type { boolean} true | false
     * @description 是不是需要页脚
     */
    hasFooter: true,
    styleValue: '1',
    /**
     * @type { boolean} true | false
     * @description Whether show the logo in sidebar
     */
    sidebarLogo: true,
     /**
     * @type { boolean} true | false
     * @description Whether show the breadcrumb in Navbar
     */
    breadcrumb: true,
    /**
     * @type { string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
    errorLog: 'production',
    /**
     * @type { boolean}  默认 开启。显示
     * @description table上是不是开吧不显示border
     *  */
    noBorder: true,
    /**
     * @type { boolean} 默认关闭斑马纹
     * @description 是否为斑马纹 table
     *  */
    stripe: true,
    /**
     * @type { String}
     * @description table阴影
     *  */
    shadow: 'never',
    /**
     * @type { String}
     * @description table 操作定位
    *  */
    fixed: 'right', 
    /**
     * @type { number} 0:success -1fail -2 need Login
     * @description 默认数据请求成功时候
     *  */
    resOk: 0,
    /**
     * @type { String}
     * @description 第三方角色
     *  */
    userDsf: 'ROLE_THIRD',
    /**
     * @type { Array}
     * @description 角色列表
     *  */
    roleList: [
        { name: '平台端', value: 'ROLE_ADMIN', param: 'isAdmin', userType: '00'},
        { name: '省教育局', value: 'ROLE_PROVINCE', param: 'isProvince', userType: '10'},
        { name: '市教育局', value: 'ROLE_CITY', param: 'isCity', userType: '11'},
        { name: '区/县教育局', value: 'ROLE_COUNTY', param: 'isCounty', userType: '12' },
        { name: '校级管理员', value: 'ROLE_SCHOOL', param: 'isSchool', userType: '13'},
        { name: '校外机构', value: 'ROLE_INSTITUTION', param: 'isInstitution', userType: '6'},
        { name: '咨询师', value: 'ROLE_CONSULTANT', param: 'isConsultant', userType: '3'},
        { name: '学生', value: 'ROLE_STUDENT', param: 'isStudent', userType: '1'},
        { name: '家长', value: 'ROLE_PARENT', param: 'isParent', userType: '5'},
        { name: '班主任', value: 'ROLE_TEACHER_B', param: 'isLeader', userType: '2'},
        { name: '任课老师', value: 'ROLE_TEACHER', param: 'isTeacher', userType: '4'},
        { name: '行政人员', value: 'ROLE_ADMINISTRATION', param: 'isAdministration', userType: '8'},
        { name: '后勤人员', value: 'ROLE_SUPPORTSTAFF', param: 'isSupportstaff', userType: '9' },
        // { name: '第三方', value: 'ROLE_THIRD', param: 'isDsf', userType: '14' } // 不可解开，数据可供参考
    ],
    /**
     * @type { Array}
     * @description 标签组件关闭时候需要请缓存的name列表
    *  */
    permissionList: ['BuildingListUpload', 'AddNewMission', 'StatisticsDetails', 'MissionDetail'],
    /**
     * 固定数据
     */
    // 账号状态
    userStatus: [
        { name: '正常', value: '0' },
        { name: '待审核', value: '1' },
        { name: '已拒绝', value: '2' }
    ],
    // 注册来源
    userRes: [
        { name: '校级管理员', value: '0' },
        { name: '自定义注册', value: '1' },
    ],
    // 系统管理
    statusMap: [
        { name: '有效', value: '0'},
        { name: '无效', value: '1'},
        { name: '锁定', value: '9'}
    ],
    // 资源库上下架状态
    buildingStatus: [
        { name: '上架', value: 1},
        { name: '下架', value: 0},
        { name: '过期', value: 2}
    ],
    // 资源库
    resourceCopyRight: [
        { name: '原创', value: 0},
        { name: '版权', value: 1},
        { name: '转载', value: 2},
        { name: '其他', value: 3}
    ],
    // 单位类型
    companyType: [
        { key: "1", value: "省教育局"},
        { key: "2", value: "市教育局"},
        { key: "3", value: "区/县教育局"},
        { key: "4", value: "学校"},
        { key: "5", value: "校外机构"}
    ],
    // 学校类型-学校
    schoolSort: [
        { key: "0", value: "小学"},
        { key: "1", value: "初中"},
        { key: "2", value: "高中"},
        { key: "3", value: "完中"},
        { key: "4", value: "九年一贯制学校"},
        { key: "5", value: "十二年一贯制学校"}
    ],
    // 学校类型-学校
    schoolSortAll: [
        { label: '小学',value: '0'},
        { label: '初中', value: '1'},
        { label: '高中', value: '2'},
        { label: '完中', value: '3'},
        { label: '九年一贯制学校', value: '4'},
        { label: '十二年一贯制学校', value: '5'}
    ],
    //机构-人员类型 mry
    personTypes:[
        { label: '任课老师',value: '0'},
        { label: '班主任',value: '1'},
        { label: '咨询师',value: '2'},
        { label: '行政人员',value: '3'},
        { label: '后勤人员',value: '4'}
    ], 
    // 机构层级
    statusOptions: [
        { value: '1', label: '1级(省)' },
        { value: '2', label: '2级(市)' },
        { value: '3', label: '3级(区/县)' },
        { value: '4', label: '4级(学校)' },
        // { value: '5', label: '5级(校外机构)' }
    ],
    //教育阶段 mry
    gradeTypes: [
        { label: '小学',value: '0'},
        { label: '初中', value: '1'},
        { label: '高中', value: '2'}
    ],
    // 单位类型-市教育局 王冬冬 2019/08/24 市教育局暂时注释
    deptType: [
        { key: "0", value: "直属学校"},
        //{ key: "1", value: "机构"},
        { key: "2", value: "教育局"},
        // { key: "3", value: "学校"}
    ],
    // 任务中心-任务类型
    isTaskTypeList: [
        { name: '测评', value: '0' },
        // {name: '问答', value: '1'}, // 李素素隐藏问答 19-9-19
        // {name: '直播', value: '2'},
        // {name: '团辅', value: '3'},
        // {name: '资源', value: '4'},
        // {name: '调查', value: '5'},
        // {name: '其他', value: '6'},
    ],
    sourceTypeList: [
        { label: "自建", value: "0" }, 
        { label: "上级", value: "1" },
        { label: "下级", value: "2" }
    ],
    transferList: [
        { label: "未转", value: "0" },
        { label: "已转", value: "1" },
        { label: "自建", value: "2" }
    ],
    // 任务中心-任务状态:
    // lss 20190927001 修改状态
    // isStateList: [
    //     { label: "全部", value: ""},
    //     { label: "进行中",value: "0"},
    //     { label: "未完成", value: "1"},
    //     { label: "已完成", value: "2"},
    //     { label: "已作废",value: "3"}
    // ],
    isStateList: [
        { label: "进行中", value: "0" },
        // { label: "未完成", value: "1"},
        { label: "已结束", value: "2" },
        { label: "已作废", value: "3" }
    ],
    // 学校测评状态
    isCePSta: [
        { name: "未开始", value: "0" },
        { name: "已完成", value: "1" },
        { name: "进行中", value: "3" }
    ],
    // 0.运行中,1.未完成,2.已完成,3.已作废,4.草稿,5.已结束
    // 性别  王冬冬2019/08/23 返回的性别value为字符串
    sexList: [
        { label: "男", value: "0"},
        { label: "女", value: "1"},
        { label: "保密", value: "2"}
    ],
    // 预约咨询 ---- 角色
    userTypeList: [
        { name: "学生", value: 0},
        { name: "班主任", value: 1},
        { name: "任课老师", value: 2},
        { name: "行政后勤", value: 3}
    ],
    //预约咨询 --- 状态
    statusList: [
        { name: "已预约", value: 0},
        { name: "已完成", value: 1},
        { name: "已取消", value: 2},
        { name: "待审核", value: 3},
        { name: "已拒绝", value: 4}
    ],
    //预约咨询 --- 状态
    // lss 20190924001 隐藏家长(代)
    typeList: [
        { name: "主动预约", value: 0},
        { name: "咨询师(代)", value: 1},
        { name: "班主任(代)", value: 2},
        // { name: "家长(代)", value: 3}
    ],
    //预警
    levels:[
        { name:'黄色预警',value:'0'},
        { name:'橙色预警',value:'1'},
        { name: '红色预警', value: '2' },
        { name: '未预警', value: '4' },
    ],
    //预警
    analysis: [
        { name: '整体分析', value: '0' },
        { name: '性别分析', value: '1' },
        { name: '性别分析', value: '2' },
    ],
    //处理状态 
    deal:[
        { name: '未处理' ,value: 0},
        { name: '处理中' ,value: 1},
        { name: '已处理' ,value: 2},
    ],
    // 测试状态
    testList: [
        { name: '已测', value: '1' },
        { name: '未测', value: '0' }
    ],
    isYes: [
        { name:'是', value: '1'},
        { name:'否', value: '0'},
    ],
    batch: [
        { id: "1", value: "第一批"},
        { id: "2", value: "第二批"},
        { id: "3", value: "第三批"},
        { id: "4", value: "第四批"}
    ],
    // 网站维护
    type: [
        { name:'文本编辑', value:'0'},
        { name:'图片上传', value:'1'},
    ],
    typeListMH: [
        { name:'心理咨询技能', value: '0'},
        { name:'心理老师技能', value: '1'},
    ],
    // 字典管理
    dictType: [
        { name: '启用', value: '0'}, 
        { name: '停用', value: '1'}
    ],
    // 调查问卷选择类型
    choiceType: [
        { name: '单选题', value: '0' },
        { name: '多选题', value: '1' },
        { name: '填空题', value: '2' }
    ],
}
