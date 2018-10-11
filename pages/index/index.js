const app = getApp()

Page({
  data: {
    modalTemp: {
      title: '111',
      subtitle: '{color:#f00|jaja}哈哈哈{color:#ff0|jaja}{color:#f00|jaja}哈哈哈{color:#f0f|jaja}',
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
  },
  
  onLoad: function () {
    
  },
  changeTitle(e) {
    var modalTemp = this.data.modalTemp;
    modalTemp.title = e.detail.value;
    this.setData({
      modalTemp: modalTemp
    })
  },
  changeSubTitle(e) {
    var modalTemp = this.data.modalTemp;
    modalTemp.subtitle = e.detail.value;
    this.setData({
      modalTemp: modalTemp
    })
  },
  changeCancel(e) {
    var modalTemp = this.data.modalTemp;
    modalTemp.showCancel = e.detail.value;
    this.setData({
      modalTemp: modalTemp
    })
  },
  changeConfirm(e) {
    var modalTemp = this.data.modalTemp;
    modalTemp.showConfirm = e.detail.value;
    this.setData({
      modalTemp: modalTemp
    })
  },
  changeCancelText(e) {
    var modalTemp = this.data.modalTemp;
    modalTemp.cancelText = e.detail.value;
    this.setData({
      modalTemp: modalTemp
    })
  },
  changeConfirmText(e) {
    var modalTemp = this.data.modalTemp;
    modalTemp.confirmText = e.detail.value;
    this.setData({
      modalTemp: modalTemp
    })
  },
  changeCancelStyle(e) {
    var modalTemp = this.data.modalTemp;
    modalTemp.cancelStyle = e.detail.value;
    this.setData({
      modalTemp: modalTemp
    })
  },
  changeConfirmStyle(e) {
    var modalTemp = this.data.modalTemp;
    modalTemp.confirmStyle = e.detail.value;
    this.setData({
      modalTemp: modalTemp
    })
  },
  changeComplete(e) {
    var modalTemp = this.data.modalTemp;
    var complete = (e) =>{
      console.group('打印complete',new Date());
      console.log(e);
    };
    modalTemp.complete = e.detail.value ? complete:function(e){return e};
    this.setData({
      modalTemp: modalTemp
    })
  },
  showModal(){
    app.showModal(this.data.modalTemp)
  }
})
