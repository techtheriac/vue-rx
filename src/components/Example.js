import Vue from "vue";
//Functional (Stateless) component
//Has no concept of `this`

const returnDOMNodes = (nodes, h) => nodes.map((node, index) => h(node, index));

export default Vue.component("Example", {
  functional: true,
  name: "Example",
  props: {
    tags: Array,
  },
  render(h, context) {
    //`context` exposes props to functional components
    return h("div", { class: "dumb" }, returnDOMNodes(context.props.tags, h));
  },
});
