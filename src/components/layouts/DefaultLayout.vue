<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const items = ref([
    {
        label: 'Beck',
        to: '/',
    },
    {
        label: 'Feed',
        to: '/feed',
    },
])

onBeforeMount(() => {
    if (!localStorage.getItem('authorizated')) {
        window.location.href = '/#/login'
    }
})

onBeforeMount(() => localStorage.removeItem('authorizated'))
</script>

<template>
    <Menubar id="menu" :model="items">
        <template #start>
            <img src="/img/logo.png" alt="Logo" />
        </template>
        <template #item="{ item }">
            <RouterLink :to="item.to">{{ item.label }}</RouterLink>
        </template>
    </Menubar>
    <RouterView />
</template>

<style scoped lang="scss">
img {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.p-menubar {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    margin-bottom: 24px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.09);
}

a {
    text-decoration: none;
    color: var(--primary-color);
    padding: 16px;
}
</style>
