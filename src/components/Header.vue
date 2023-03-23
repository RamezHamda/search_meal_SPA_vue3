<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name:'home'}" class="px-5 hover:bg-purple-200 h-full flex items-center">Home</router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name:'mealByName'}" class="inline-flex items-center px-3 transition-colors hover:bg-purple-100 h-full">Search By Name</router-link>
        <router-link :to="{name:'mealByLetter'}" class="inline-flex items-center px-3 transition-colors hover:bg-purple-100 h-full">Search By Letter</router-link>
        <router-link :to="{name:'ingredients'}" class="inline-flex items-center px-3 transition-colors hover:bg-purple-100 h-full">Search By Ingredient</router-link>
      </div>  
    </header>
</template>

<script setup>
  
</script>