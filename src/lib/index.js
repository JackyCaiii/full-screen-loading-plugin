import loading from "./FullScreenLoading";

const LoadingPlugin = {
  install(Vue, options) {
    const subClass = Vue.extend(loading);
    const Profile = new subClass({
      el: document.createElement("div")
    });
    document.body.appendChild(Profile.$el);
    if (options) {
      if (options.tips) {
        Profile.opTips = options.tips;
      }
    }
    Vue.prototype.$fullScreenLoading = Profile;
  }
};

export default LoadingPlugin;
