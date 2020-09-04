# Exploration Of Vue's Indepth features.

## Walking through Evan You's Vue Advanced features Course

## Ways to define components in Vue

- Javascript Object with render
```javascript
  const Counter = {
    name: "counter",
    props: {
      // some props
    },
    data() {
      //some state
    },
    render:(h) => h("div", "Hello world")
  }
```
- Vue component without template
```javascript 
import Vue from "vue";

  Vue.component("counter", {
    props: {
      //some props
    },
    data(){
      //some state
    },
    render: (h) => h("div", "Hello world")
  })
```
- Vue component with template
```javascript
import Vue from "vue";

Vue.component("counter", {
  props: {
    //some props
  }, 
  data() {
    //some state
  },
  template: `<h1>{{//\//}}</h1>`
})
