// components/swiper/swiper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        // 图片列表
        imageList: [
            '/static/images/swiper/swiper1.jpg',
            '/static/images/swiper/swiper2.jpg',
            '/static/images/swiper/swiper3.jpg',
            '/static/images/swiper/swiper4.jpg',
            '/static/images/swiper/swiper5.jpg'
        ],
        indicatorDots: true, // 指示器
        indicatorColor: '#fff',
        indicatorActiveColor: '#09bb07',
        autoplay: true, // 自动播放
        interval: 3000, // 播放间隔
        duration: 500 // 滑动时长
    },

    /**
     * 组件的方法列表
     */
    methods: {
        
    }
})