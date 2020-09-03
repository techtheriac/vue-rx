import Vue from "vue";

export default Vue.component("counter", {
  name: "counter",
  props: { count: Number },
  functional: true,
  render: (h, context) => h("div", context.props.count),
});
