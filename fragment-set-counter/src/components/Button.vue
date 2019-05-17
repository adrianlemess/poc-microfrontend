<template>
  <div class="container-buttons">
    <button class="btn" type="button" @click="$emit('counter')">Counter + 1</button>
    <button class="btn btn-secondary" type="button" @click="$emit('reset')">Reset</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  color: #0099cc;
  background: transparent;
  border: 2px solid #0099cc;
  border-radius: 6px;
  padding: 16px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}
.btn:hover {
  background-color: #008cba;
  color: white;
}

.container-buttons {
  display: flex;
  flex-direction: column;
}
</style>
