<template>
    <div class="bg-gray-100 h-full">
        <Header/>
        <main>
            <router-view />
        </main>
  </div>
</template>

<script setup>
    import Header from './Header.vue';
</script>