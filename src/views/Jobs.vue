<template>
  <h2> Jobs Page</h2>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.name }}</h2>
    <p>{{ job.email }}</p>
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      Go to Job
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.jobs = data;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
