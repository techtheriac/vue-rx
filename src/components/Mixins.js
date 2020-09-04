import Vue from "vue";

var myMixin = {
  created: function() {
    this.hello();
  },
  methods: {
    hello() {
      console.log("You're using a fucking mixin");
    },
  },
};

var ComponentMixin = Vue.extend({
  mixins: [myMixin],
  name: "component-mixin",
  render: (h) => h("div", "Hello"),
});

export default ComponentMixin;
