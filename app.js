//app.js
App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null
  },
  showModal: function (param, callback) {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var modal = {
      title: param.title || '',
      subtitle: param.subtitle || '',
      showCancel: param.showCancel == undefined ? true : param.showCancel,
      showConfirm: param.showConfirm == undefined ? true : param.showConfirm,
      cancelText: param.cancelText || '取消',
      confirmText: param.confirmText || '确认',
      cancelStyle: param.cancelStyle || '',
      confirmStyle: param.confirmStyle || '',
      complete: param.complete || function (e) { return e }
    };
    if (typeof callback == 'function') {
      currentPage.setData({
        modal: modal
      }, callback);
    } else {
      currentPage.setData({
        modal: modal
      });
    }
  },
})