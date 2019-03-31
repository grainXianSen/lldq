// components/tabbar/tabbar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 组件title
        activeIndex: {
            type: Number,
            default: 1
        },

        // tabber列表
        tabbarList: {
            type: Array,
            default: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
		
    },

	/**
     * 组件传递的属性
     */
	props: {
		onSelecttabbar: () => {}
	},

    /**
     * 组件的方法列表
     */
    methods: {
        // 切换
        changeItem (e) {
            let dataset = e.currentTarget.dataset;
            let activeIndex = dataset.index;
            this.setData({ activeIndex });
            this.props.onSelecttabbar(dataset);
        }
    }
})
