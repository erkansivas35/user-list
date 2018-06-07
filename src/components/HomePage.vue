<template>
  <div class="homepage">
    <div class="users text-center">
      <h1 class="m-set">User List</h1>      
        <users></users>
    </div>
  </div>
</template>

<script>
import Users from "./Users";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: { Users }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #000;
  text-decoration: none;
}

a:hover {
  color: #333;
}
</style>