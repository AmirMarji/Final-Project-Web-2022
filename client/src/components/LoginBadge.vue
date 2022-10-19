<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
    

</script>

<template>
    <div  v-if="session.user != null">
        <img src="{{session.user.image}} " width="100px" height="120px">
        Welcome {{session.user.firstName}} {{session.user.lastName}} {{session.user.image}} 
        (<a @click="logout()">
            Log out
        </a>)
    </div>

</template>


<style scoped>
</style>