<template>
  <div v-if="user">
    <h1>Job Details Page</h1>
    <p>User id is {{ user.id }} </p>
    <p>User email is {{ user.email }} </p>
    <p>User company is {{ user.company.name }} </p>
  </div>
  <div v-else> loading.... </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      user: null,
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users/' + this.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.user = data;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
