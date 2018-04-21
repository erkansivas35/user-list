<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.homepage {
  width: 1140px;
  margin-left: auto;
  margin-right: auto;
}
.user-list {
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
}

.user {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

.user-details {
  padding: 5px 5px 10px 5px;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 14px;
}
</style>
