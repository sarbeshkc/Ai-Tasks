<template>
    <div>
      <h2>Dashboard</h2>
      <TaskList />
      <RoleAssignment />
    </div>
  </template>
  
  <script>
  import TaskList from './TaskList.vue';
  import RoleAssignment from './RoleAssignment.vue';
  
  export default {
    components: {
      TaskList,
      RoleAssignment
    }
  };
  </script>