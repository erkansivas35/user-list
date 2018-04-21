<template>
  <div class="homepage">
    <div class="users">
      <div class="user-list">
        <users v-for="(user, index) in userList"
               :key="index"
               :user=user></users>
      </div>
    </div>
  </div>
</template>

<script>
import Users from './Users';

export default {
  name: "HomePage",
  data() {
    return {
      userList: []
    };
  },
  created() {
    this.axios
      .get("https://reqres.in/api/users?page=1&per_page=20")
      .then(response => {
        console.log(response.data);
        this.userList = response.data.data;
      });
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