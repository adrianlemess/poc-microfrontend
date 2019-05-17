<template>
  <div id="app">
    <h2>App Vue</h2>
    <Button @reset="reset" @counter="counter"/>
  </div>
</template>

<script>
import Button from "./components/Button.vue";
export default {
  name: "counter",
  components: {
    Button
  },
  
  methods: {
    counter() {
      const detail = 1;
      const event = new CustomEvent("increaseCounter", { detail });
      window.dispatchEvent(event);
    },
    reset() {
      const detail = true;
      const event = new CustomEvent("reset", { detail });
      window.dispatchEvent(event);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 100px;
  background: rgba(32, 128, 32, 0.5);
  margin-top: 100px;
  width: 500px;
  color: white;
  border: 1px solid rgba(95, 237, 255, 0.5);
}
</style>
