<template>
    <div>
      <h3>Tasks</h3>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { id: 1, name: 'Define project scope' },
          { id: 2, name: 'Assign team roles' },
          { id: 3, name: 'Set deadlines' }
        ]
      };
    }
  };
  </script>