<template>   
      <div class="user">
        <div class="user-img">
          <img :src="user.avatar" alt="User Name">
        </div>

        <div class="user-details">
          <router-link :to="userLink"><p>{{ user.first_name }} {{ user.last_name }}</p></router-link>
        </div>
      </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    user: { type: Object, required: true }
  },
  computed: {
      userLink() {
        return `/user-detail/${this.user.id}`
      }
  }
};
</script>

