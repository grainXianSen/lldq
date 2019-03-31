if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$.js?appxworker=1');
require('./importScripts$.js?appxworker=1');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app.js?appxworker=1');
require('../../components/swiper/swiper.js?appxworker=1');
require('../../components/banner/banner.js?appxworker=1');
require('../../components/panel/panel.js?appxworker=1');
require('../../components/table/table.js?appxworker=1');
require('../../components/tabbar/tabbar.js?appxworker=1');
require('../../pages/index/index.js?appxworker=1');
require('../../pages/info/index.js?appxworker=1');
require('../../pages/ticket/index.js?appxworker=1');
require('../../pages/scenery/index.js?appxworker=1');
require('../../pages/about/index.js?appxworker=1');
}
self.bootstrapApp ? self.bootstrapApp({ success: success }) : success();
}