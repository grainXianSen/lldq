//ticket.js
const _public = getApp().globalData.utils._public; // 全局方法
const _common = getApp().globalData.utils._common; // 复用方法

Page({
    data: {
        // banner
        bannerImage: '/static/images/banner/ticket.jpg',
        bannerHead: '极速抢票',
        bannerDesc: '在你最需要的时候，为你抢到最心仪的票',

        // 票务预定
        resHead: '票务预定',

        // 选择票务类型
        activeType: 1,
        ticketTypeList: [
            { name: '票务类型：', value: 'title', isTitle: true },
            { name: '单程', value: 'single' },
            { name: '往返', value: 'double' }
        ],
        // 票务表单
        // 出发地
        startList: ['北京', '上海', '广州', '深圳', '重庆', '成都', '杭州', '南京'],
		startIndex: 0,
        // 目的地
        destList: ['北京', '上海', '广州', '深圳', '重庆', '成都', '杭州', '南京', '昆明', '太原'],
		destIndex: 0,
        // 出发日
        startDate: _public.formatDate(new Date(), 'yyyy-MM-dd'),
        // 返程日
        destDate: _public.formatDate(new Date(), 'yyyy-MM-dd'),
        // 是否禁用返程日
        isShowDest: false,

        // 最新票务
        latestHead: '最新票务',
        // 切换条
        activeIndex: 1,
        tabbarList: [
            {value: 'title', name: '热门城市：', isTitle: true},
            {value: 'beijing', name: '北京'},
            {value: 'shanghai', name: '上海'},
            {value: 'guangzhou', name: '广州'},
            {value: 'shenzhen', name: '深圳'},
            {value: 'chongqing', name: '重庆'},
            {value: 'chengdu', name: '成都'},
            {value: 'hangzhou', name: '杭州'},
            {value: 'nanjing', name: '南京'}
        ],
        //表格
        latestTableClass: 'always',
        latestColWidth: '14.2857%',
        latestTableHead: {
            lines: '路线',
            date: '日期',
            price: '价格',
            taxes: '税费',
            meals: '餐食',
            flight: '航班',
            operation: '操作'
        },
        latestTableBody: [
            { lines: '北京-成都', date: '06-15', price: '￥745', taxes: '￥50', meals: '有', flight: '春秋航空', operation: '预定' },
            { lines: '北京-上海', date: '06-15', price: '￥479', taxes: '￥45', meals: '无', flight: '南方航空', operation: '预定' },
            { lines: '北京-深圳', date: '06-15', price: '￥561', taxes: '￥46', meals: '有', flight: '西部航空', operation: '预定' },
            { lines: '北京-广州', date: '06-15', price: '￥378', taxes: '￥35', meals: '有', flight: '天津航空', operation: '预定' },
            { lines: '北京-重庆', date: '06-15', price: '￥612', taxes: '￥47', meals: '无', flight: '首都航空', operation: '预定' },
            { lines: '北京-昆明', date: '06-15', price: '￥428', taxes: '￥43', meals: '有', flight: '东方航空', operation: '预定' },
            { lines: '北京-厦门', date: '06-15', price: '￥509', taxes: '￥47', meals: '无', flight: '厦门航空', operation: '预定' },
            { lines: '北京-杭州', date: '06-15', price: '￥893', taxes: '￥52', meals: '有', flight: '杭州航空', operation: '预定' },
            { lines: '北京-长沙', date: '06-15', price: '￥663', taxes: '￥49', meals: '有', flight: '四川航空', operation: '预定' }
        ]
    },

    getSelectTabbar (e) {
        let currTabbar = e.name;
        let isShowDest = currTabbar === 'single' ? false : true;
        this.setData({ isShowDest });
    },

    // 改变出发地
    changeStartCity (e) {
        let selectStartCity = e.detail.value;
        this.setData({ selectStartCity });
    },

    // 改变目的地
    changeDestCity (e) {
        let selectDestCity = e.detail.value;
        this.setData({ selectDestCity });
    },

    // 改变出发日期
    changeStartDate (e) {
        let startDate = e.detail.value;
        this.setData({ startDate });
    },

    // 改变返程日期
    changeDestDate (e) {
        let destDate = e.detail.value;
        this.setData({ destDate });
    }
})