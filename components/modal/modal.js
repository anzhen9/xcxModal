/**
 * 提示modal弹窗
 * @param   title         提示标题
 * @param   subtitle      提示内容（副标题）
 * @param   showCancel    是否显示取消按钮  默认true
 * @param   showConfirm   是否显示确认按钮  默认true
 * @param   cancelText    取消按钮文字  默认 取消
 * @param   confirmText   确认按钮文字  默认 确认
 * @param   cancelStyle   取消按钮样式  默认 空
 * @param   confirmStyle  确认按钮样式  默认 空
 * @param   complete      点击按钮执行的方法，返回Object   {cancel:false,confirm:false},点击按钮对应值变为true
 */
const app = getApp();
var isPlainObject = obj => {
  for (var name in obj) {
    return false;
  }
  return true;
}
Component({
  properties: {
    detail:{
      type:Object,
      value:{
        title: '',
        subtitle: '',
        showCancel: true,
        showConfirm: true,
        cancelText: '取消',
        confirmText: '确认',
        cancelStyle: '',
        confirmStyle: '',
        complete: (e) => {
          return e;
        }
      },
      observer:function(newVal, oldVal){
        if (!isPlainObject(newVal) && newVal.subtitle) {
          var specStr = newVal.subtitle.match(/\{(.+?)\}/g);
          var text = newVal.subtitle;
          for (var i in specStr) {
            text = text.replace(/\{(.+?)\}/i, '\\' + i + '\\_');
            specStr[i] = specStr[i].replace(/\{/, '').replace(/\}/,'').split('|');
            specStr[i] = { style: specStr[i][0], text: specStr[i][1] };
          }
          text = text.split('\\_');
          var texts = [];
          for(var j in text){
            let item = text[j].split('\\');
            let textObj = { style: -1, value: item[0] };
            if(item.length == 2) textObj.style = item[1]
            texts = texts.concat(textObj);
          }
          this.setData({
            text: texts,
            specStr:specStr
          })
        }
      }
    }
  },
  data: {

  },
  methods: {
    tapBtn:function(e){
      var flag = e.currentTarget.dataset.flag;
      var result = {
        cancel: false,
        confirm: false
      };
      result[flag] = true;
      if (typeof this.data.detail.complete == 'function') {
        this.data.detail.complete(result);
      }
      let pages = getCurrentPages();
      let page = pages[pages.length - 1];
      page.setData({
        modal:{}
      });
      this.setData({
        detail:{
          title: '',
          subtitle: '',
          showCancel: true,
          showConfirm: true,
          cancelText: '取消',
          confirmText: '确认',
          cancelStyle: '',
          confirmStyle: '',
          complete: (e) => {
            return e;
          }
        }
      })
      
    }
  }
})
