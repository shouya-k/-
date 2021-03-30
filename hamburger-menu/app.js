new Vue({
  el: '#app',
  data: {
    nav: {
      isShow: false,
    },
  },
  methods: {
    showNav() {
      this.nav.isShow = true;
    },
    hiddenNav() {
      this.nav.isShow = false;
    },
  },
});
