# full-screen-loading-plugin

在项目中安装

~~~javascript
npm i @jackycai/full-screen-loading-plugin
~~~



main.js

~~~javascript
import FullScreenLoadingPlugin from "@jackycai/full-screen-loading-plugin";
Vue.use(FullScreenLoadingPlugin);

// 或者添加自定义配置
Vue.use(FullScreenLoadingPlugin, { tips: "请稍等..." });
~~~



使用方法：

~~~javascript
this.$fullScreenLoading.show();
setTimeout(() => {
  this.$fullScreenLoading.hide();
}, 2000);

// 也可以在 show 方法中添加自定义的文字
this.$fullScreenLoading.show("全屏插件转圈圈...");
~~~

