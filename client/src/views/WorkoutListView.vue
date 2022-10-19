<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Workout List</p>
            </div>
            <div class="message-body">

                <h1>THIS IS A PAGE TO VIEW CURRENT WORKOUTS</h1>
                <div v-for="(workout, i) in workouts" :key="i">
                    {{ workout.user }}
                    {{ workout.title }}
                    {{ workout.picture }}
                    {{ workout.location }}
                    {{ workout.type }}
                    {{ workout.duration }}
                    {{ workout.date }}
                    <button @click="deleteWorkout(i)">Delete</button>
                </div>
                <button @click="$router.push('/addworkout')
                    ">Add</button>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import workouts, { deleteWorkout } from '../stores/workout'
</script>

<style scoped>

</style>