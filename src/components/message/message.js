import Vue from 'vue';
import message from '@/components/message/message.vue';

const DEFAULT = {
  visible: false,
  text: '',
  duration: 3000,
  type: ''
};

const messageConstructor = Vue.extend(message);

messageConstructor.prototype.close = function () {
  var vm = this;
  this.$on('after-leave', () => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el);
    }
    this.$destroy();
  });
  vm.visible = false;
};

const messageBox = (options = {}) => {
  if (Vue.prototype.$isServer) return;

  options = Object.assign({}, DEFAULT, options);    // 合并参数

  let body = document.body;
  let instance = new messageConstructor({
    el: document.createElement('div'),
    data: options
  });
  body.appendChild(instance.$el);

  Vue.nextTick(()=>{
    instance.visible = true;
    setTimeout(()=>{
      instance.close();
    }, options.duration);
  });

  return instance;
}

export default messageBox;