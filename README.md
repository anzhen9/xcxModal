# 微信小程序Toast自定义组件

之前写过一个自定义组件[地址在这](https://blog.csdn.net/anzhen9/article/details/80593542)

今天重新写了一个，在第一个样式基础上新增了一个样式。

需要的参数比之前的多很多，后期可能会考虑优化


## 用法

在需要的页面的JSON里引入<br>
```json
{
    "usingComponents": {
    "modal": "(你的文件目录)/modal/modal"
  }
}
```
对应页面wxml中<br>
```xml
<button catchtap="showModal">显示</button>
<modal detail="{{modal}}"></modal>
```
对应页面js的data里modal空对象放不放都行<br>
在需要弹窗的方法里进行setData操作即可<br>
```js
Page({
    data:{

    },
    onLoad: function (options) {

    },
    showModal: function(){
        this.setData({
            modal: {
                title: '提示',
                subtitle: '内容{color:#f00|红色}内容',
                showCancel: true,
                showConfirm: true,
                cancelText: '取消',
                confirmText: '确认',
                cancelStyle: '',
                confirmStyle: '',
                complete: (e) => {
                    console.log(e);
                }
            }
        })
    }
})
```
为了方便，我在app.js里封装了个showModal方法<br>
```js
showModal: function (param) {
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
    currentPage.setData({
        modal: modal
    });
},
```
只需要在对应页面调用app.showModal，传入需要的参数即可
```js
app.showModal({
    title: '测试',
    subtitle: '{color:#00f|确定}{color:#f00|全开}{color:#0f0|组合名称}吗？',
    showCancel: true,
    showConfirm: true,
    cancelText: '取消',
    confirmText: '确认',
    cancelStyle: '',
    confirmStyle: '',
    complete:function(e){
      console.log(e);
    }
});
},
```
其中subtitle可以自定义样式，写法格式灵感来源于echarts，不过也有不同<br>
整体就是个字符串，把需要改变样式部分用{}包起来，{}里样式与内容用|分开，前面写样式，后面些内容就成了下边的格式<br>
内容{样式|内容}内容<br>
其中样式使用css样式的写法<br>
cancelStyle和confirmStyle也是css样式写法
以下为参数介绍<br>
<table>
    <tr>
        <td>字段</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>title</td>
        <td>提示标题</td>
    </tr>
    <tr>
        <td>subtitle</td>
        <td>提示内容（副标题）</td>
    </tr>
    <tr>
        <td>showCancel</td>
        <td>是否显示取消按钮  默认true</td>
    </tr>
    <tr>
        <td>showConfirm</td>
        <td>是否显示确认按钮  默认true</td>
    </tr>
    <tr>
        <td>cancelText</td>
        <td>取消按钮文字  默认 取消</td>
    </tr>
    <tr>
        <td>confirmText</td>
        <td>确认按钮文字  默认 确认</td>
    </tr>
    <tr>
        <td>cancelStyle</td>
        <td>取消按钮样式  默认 空</td>
    </tr>
    <tr>
        <td>confirmStyle</td>
        <td>确认按钮样式  默认 空</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>点击按钮执行的方法，返回Object   {cancel:false,confirm:false},点击按钮对应值变为true</td>
    </tr>
</table>
