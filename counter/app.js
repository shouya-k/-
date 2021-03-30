new Vue({
  el: '#app',
  data: {
    count: 0,
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
});
