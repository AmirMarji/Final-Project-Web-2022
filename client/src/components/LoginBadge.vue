<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
</script>

<template>
    <div  v-if="session.user != null">
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>

</template>


<style scoped>
</style>