<template>
  <h2> Jobs Page</h2>
  <div v-for="job in jobs" :key="job.area">
    <h2>{{ job.name.common }}</h2>
    <p>{{ job.population }}</p>
    <router-link :to="{ name: 'JobDetails', params: { id: job.area } }">
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
    fetch('https://restcountries.com/v3.1/name/peru')
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
