<template>
  <div class="homepage">
    <div v-if="!resError" class="user-list">
      
      <div class="user">
        <div class="user-img">
          <img :src="userDetails.avatar" alt="User Name">
        </div>

        <div class="user-details">
          <p>{{ userDetails.first_name }} {{ userDetails.last_name }}</p>
        </div>
      </div>

      <router-link to="/">Geri</router-link>
    </div>

    <div v-if="resError" class="error-message">
      <h1>User not found</h1>
      <router-link to="/">Geri</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  data() {
    return {
      userDetails: [],
      usersId: this.$route.params.id,
      resError: false
    };
  },
  created() {
    this.axios
      .get("https://reqres.in/api/users/" + this.usersId)
      .then(response => {
        this.userDetails = response.data.data;
      })
      .catch(error => {
        this.resError = true
      });
  }
};
</script>

<style scoped>
.user-list {
  flex-direction: column;
  align-items: center;
}
.error-message {
  text-align: center;
}
</style>
