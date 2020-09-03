<template>
  <div id="app">
    <Templateless></Templateless>
    <smallButton :color="buttonColor">Ball</smallButton>
    <Example :tags="renderTags"></Example>
    <Conditional :ok="ok"></Conditional>
    <button @click="ok = !ok">Toggle Conditional</button>
    <hr />

    <h1>State Props</h1>
    <counter :count="count"></counter>
    <button @click="count++">Count up</button>
    <hr />

    <h1>Conter Stateful</h1>
    <counter-stateful></counter-stateful>
    <counter-stateful></counter-stateful>
    <counter-stateful></counter-stateful>
    <button @click="inc">Count Up</button>
  </div>
</template>

<script>
import { Observable } from "rxjs";
import Templateless from "./components/Templateless";
import smallButton from "./components/styled/Button";
import Example from "./components/Example";
import Conditional from "./components/ConditionalRendering";
import counter from "./components/PassingProps";

const state = {
  count: 0,
};

//Counter dealing with shared state object,
const CounterStateful = {
  name: "counter-stateful",
  props: {},
  data() {
    return state;
  },
  render(h) {
    return h("div", this.count);
  },
};

export default {
  name: "App",
  components: {
    Templateless,
    smallButton,
    Example,
    Conditional,
    counter,
    CounterStateful,
  },
  data() {
    return {
      buttonColor: "white",
      renderTags: ["h1", "h2", "h3", "h4"],
      ok: true,
      count: 0,
    };
  },
  subscriptions() {
    const interval$ = Observable.interval(1000);
    const timesTwo$ = interval$.map((i) => i * 2);
    const timesThree$ = interval$.map((i) => i * 3);
    return { timesTwo$, timesThree$ };
  },
  methods: {
    inc() {
      state.count++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
