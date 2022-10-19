<template>
    <div>
        <section class="hero is-large is-info">
            <div class="hero-body">
                <p class="title">
                    Index Landing page
                </p>
                <p class="subtitle">
                    This is a landing page to set user object from null to some string string.
                    if i dont use this, the rouiting for the first page messes up and errors out.
                </p>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
// need this stuff for rotues to work
import session, { login, logout } from '../stores/session'
login('Guest', 'User', 'src/assets/images.jpg')
</script>

<style scoped>

</style>