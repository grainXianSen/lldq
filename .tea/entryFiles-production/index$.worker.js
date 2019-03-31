if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

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
require('../..//app');
require('../../components/swiper/swiper');
require('../../components/banner/banner');
require('../../components/panel/panel');
require('../../components/table/table');
require('../../components/tabbar/tabbar');
require('../../pages/index/index');
require('../../pages/info/index');
require('../../pages/ticket/index');
require('../../pages/scenery/index');
require('../../pages/about/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}