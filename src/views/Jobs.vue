<template>
  <h2> Jobs Page</h2>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.title }}</h2>
    <p>{{ job.details }}</p>
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      Go to Job
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'Ninja UX Developer', id: 1, details: 'lorem rem sum' },
        { title: 'Ninja Web Developer', id: 2, details: 'lorem rem sum' },
        { title: 'Ninja Vue Developer', id: 3, details: 'lorem rem sum' },
      ],
    };
  },
};
</script>

<style></style>
