import Vue from 'vue';
import store from './LightboxStore';

Vue.directive('lightbox', {
  bind(el) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      store.state.video = el.getAttribute('videoUrl');
    })
  }
})

