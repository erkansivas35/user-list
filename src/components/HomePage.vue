<template>
  <div class="homepage">
    <div class="users text-center">
      <h1 class="m-set">User List</h1>
      <p v-if="loading" class="m-set">Loading...</p>
      <div v-if="!loading" class="user-list">
        <users v-for="(user, index) in userList"
               :key="index"
               :user=user></users>
      </div>
    </div>

    <CreateUser></CreateUser>
  </div>
</template>

<script>
import Users from './Users';
import CreateUser from './CreateUser';

export default {
  name: "HomePage",
  data() {
    return {
      userList: [],
      loading: true
    };
  },
  created() {
    this.axios
      .get("https://reqres.in/api/users?page=1&per_page=20")
      .then(response => {
        this.userList = response.data.data;
        this.loading = false;
      });
  },
  components: { Users, CreateUser }
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