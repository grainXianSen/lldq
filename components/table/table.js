// components/table/table.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 表样式
        tClass: {
            type: String,
            default: 'bordered'
        },

        // 表头
        tHead: {
            type: Object,
            default: {}
        },

        // 表身
        tBody: {
            type: Array,
            default: []
        },

        // 表格列宽
        colWidth: {
            type: String,
            default: '100%'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
