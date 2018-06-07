<template>  
  <div class="user-list"> 
      <p v-if="loading" class="m-set">Loading...</p>
      <div class="user" v-for="(user, index) in userList" :key="index">
        <div class="user-img">
          <img :src="user.avatar" alt="User Name">
        </div>

        <div class="user-details">
          <router-link :to="/user-detail/ + user.id"><p>{{ user.first_name }} {{ user.last_name }}</p></router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      loading: true,
      userList: []
    };
  },
  created() {
    this.axios
      .get("https://reqres.in/api/users?page=1&per_page=20")
      .then(response => {
        this.userList = response.data.data;
        this.loading = false;
      });
  }
};
</script>

