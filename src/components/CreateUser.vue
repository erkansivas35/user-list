<template>
    <div class="create-user">
        <h4>Create User</h4>
        <input type="text" name="name" v-model="formName" placeholder="Name">
        <input type="text" name="job" v-model="formJob" placeholder="Job">
        <button @click="formPost()" type="submit">SEND</button>

        <div class="created-user" v-if="formRes === 201">
          <p>Oluşturma Başarılı</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formName: "",
      formJob: "",
      formData: [],
      error: [],
      formRes: '',
    };
  },
  methods: {
    formPost() {
      this.formData.push(this.formName, this.formJob);
      this.axios
        .post(`https://reqres.in/api/users`, {
          body: this.formData
        })
        .then(response => {
          this.formRes = response.status;
        })
        .catch(e => {
          this.errors.push(e)
        });
    }
  }
};
</script>

<style>

</style>
