new Vue({
  el: '#app',
  data: {
    displayImage: 0,
    style: '',
    isShow: false,
    images: [
      './img/autumn-219972_1280.jpg',
      './img/clouds-49520_1280.jpg',
      './img/forest-1072828_1280.jpg',
      './img/fire-123784_1920.jpg',
    ],
  },
  methods: {
    next() {
      if (this.displayImage >= this.images.length - 1) {
        this.displayImage = 0;
      } else {
        this.displayImage++;
      }
      this.style = 'slide-right';
    },
    prev() {
      if (this.displayImage === 0) {
        this.displayImage = this.images.length - 1;
      } else {
        this.displayImage--;
      }
      this.style = 'slide-left';
    },
    switchImage(index) {
      this.displayImage = index;
      this.style = 'slide-right';
    },
    showModal(index) {
      this.isShow = true;
      this.displayImage = index;
    },
    hiddenModal() {
      this.isShow = false;
    },
  },
});
