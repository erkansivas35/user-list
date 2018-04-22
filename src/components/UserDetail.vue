<template>
  <div class="homepage">
     <p v-if="loading" class="text-center m-set">Loading...</p>

    <div v-if="!resError" class="user-list">
      
      <div v-if="!loading" class="user">
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
      resError: false,
      loading: true
    };
  },
  created() {
    this.axios
      .get("https://reqres.in/api/users/" + this.usersId)
      .then(response => {
        this.userDetails = response.data.data;
        this.loading = false
      })
      .catch(error => {
        this.resError = true,
        this.loading = false
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
