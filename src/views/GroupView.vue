<template>
    <div>
      <h2>Group Overview</h2>
      <PlanningDashboard />
    </div>
  </template>
  
  <script>
  import PlanningDashboard from '../components/PlanningDashboard.vue';
  
  export default {
    name: 'GroupView',
    components: {
      PlanningDashboard
    }
  };
  </script>