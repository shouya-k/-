new Vue({
  el: '#app',
  data: {
    modal: {
      isShow: false,
    },
  },
  methods: {
    showModal() {
      this.modal.isShow = true;
    },
    hiddenModal() {
      this.modal.isShow = false;
    },
  },
});
