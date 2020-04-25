<template>
  <div id="app">
    <may-map />
  </div>
</template>

<script>
import map from "./components/map";
export default {
  name: "app",
  components: {
    mayMap: map
  }
};
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
body {
  background-color: #f8f9fa;
}
</style>
