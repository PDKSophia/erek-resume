const state = {
    SchoolList : [
        {
           value: '湖南科技大学',
           label: '湖南科技大学'
       }
    ],
    // 多级联动
    AcademyMajorList : [
        {
            value: '土木工程学院',
            label: '土木工程学院',
            children : [
                {
                    value: '工程力学',
                    label: '工程力学' 
                },
                {
                    value: '给水排水工程',
                    label: '给水排水工程' 
                },
                {
                    value: '道路与桥梁工程',
                    label: '道路与桥梁工程' 
                },
                {
                    value: '勘查技术与工程',
                    label: '勘查技术与工程' 
                },
                {
                    value: '建筑工程',
                    label: '建筑工程' 
                },
                {
                    value: '工程管理',
                    label: '工程管理' 
                }
            ]
        },
        {
            value: '能源与安全工程学院',
            label: '能源与安全工程学院',
            children : [
                {
                    value: '工业工程',
                    label: '工业工程' 
                },
                {
                    value: '建筑环境与设备工程',
                    label: '建筑环境与设备工程' 
                },
                {
                    value: '安全工程',
                    label: '安全工程' 
                },
                {
                    value: '采矿工程',
                    label: '采矿工程' 
                }
            ]
        }
    ],
    AcademyList : [
        {
            value: '能源与安全工程学院',
            label: '能源与安全工程学院'
        },
        {
            value: '土木工程学院',
            label: '土木工程学院'
        },
        {
            value: '机电工程学院',
            label: '机电工程学院'
        },
        {
            value: '信息与电气工程学院',
            label: '信息与电气工程学院'
        },
        {
            value: '计算机科学与工程学院',
            label: '计算机科学与工程学院'
        },
        {
            value: '化学化工学院',
            label: '化学化工学院'
        },
        {
            value: '材料化学',
            label: '材料化学'
        },
        {
            value: '数学与计算科学学院',
            label: '数学与计算科学学院'
        },
        {
            value: '物理学院',
            label: '物理学院'
        },
        {
            value: '生命科学学院',
            label: '生命科学学院'
        },
        {
            value: '建筑与城乡规划学院',
            label: '建筑与城乡规划学院'
        },
        {
            value: '人文学院',
            label: '人文学院'
        },
        {
            value: '外国语学院',
            label: '外国语学院'
        },
        {
            value: '马克思主义学院',
            label: '马克思主义学院'
        },
        {
            value: '教育学院',
            label: '教育学院'
        },
        {
            value: '商学院',
            label: '商学院'
        },
        {
            value: '艺术学院',
            label: '艺术学院'
        },
        {
            value: '体育学院',
            label: '体育学院'
        },
        {
            value: '管理学院',
            label: '管理学院'
        },
        {
            value: '法学院',
            label: '法学院'
        },
        {
            value: '潇湘学院',
            label: '潇湘学院'
        }
    ],
    MajorList : [
        {
            value: '计算机科学与技术',
            label: '计算机科学与技术'
        },
        {
            value: '软件工程',
            label: '软件工程'
        },
        {
            value: '信息安全',
            label: '信息安全'
        },
        {
            value: '物联网',
            label: '物联网'
        },
        {
            value: '网络工程',
            label: '网络工程'
        }
    ],
    JobList : [
        {
            value: '前端工程师',
            label: '前端工程师'
        },
        {
            value: '后端工程师',
            label: '后端工程师'
        },
        {
            value: 'Android工程师',
            label: 'Android工程师'
        }
    ],

    // 登陆人信息
    Auth : {
        school : '',
        academy : '',
        major : '',
        job : ''
    }
}

export default state;