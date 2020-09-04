import Vue from "vue";

const store = new Vue({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
});

//Component dealing with state Object defined as an instance
const SharedInstanceComponent = {
  name: "shared-instance-object",
  props: {},
  render: (h) => h("div", store.count),
};

console.log(store);
export { store, SharedInstanceComponent };
