<template>
    <div>
      <h3>Role Assignments</h3>
      <ul>
        <li v-for="role in roles" :key="role.id">{{ role.member }} - {{ role.role }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        roles: [
          { id: 1, member: 'Alice', role: 'Project Manager' },
          { id: 2, member: 'Bob', role: 'Frontend Developer' },
          { id: 3, member: 'Charlie', role: 'AI Engineer' }
        ]
      };
    }
  };
  </script>