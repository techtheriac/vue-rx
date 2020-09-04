import Vue from "vue";
import addThree from "../utils/helpers";

//Mixins - Vue's strategy for code reuse and data inheritance
var myMixin = {
  created: function() {
    this.hello();
  },
  methods: {
    hello() {
      console.log("This is a fucking mixin " + addThree(2));
    },
  },
};

var ComponentMixin = Vue.extend({
  mixins: [myMixin],
  name: "component-mixin",
  render: (h) => h("div", "Hello"),
});

export default ComponentMixin;
