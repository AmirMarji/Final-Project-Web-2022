<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Stats</p>
            </div>
            <div class="message-body">

                <h1>THIS IS A PAGE TO VIEW WORKOUT STATS (Im just listing raw workout list with no special CSS, just to show something on the stats page)</h1>
            </div>
        </article>

        <div v-for="(workout, i) in workouts" :key="i">
                    {{ workout.user }}
                    {{ workout.title }}
                    {{ workout.picture }}
                    {{ workout.location }}
                    {{ workout.type }}
                    {{ workout.duration }}
                    {{ workout.date }}
                </div>
    </div>
</template>

<script setup lang="ts">
import workouts, { deleteWorkout } from '../stores/workout'

</script>

<style scoped>

</style>