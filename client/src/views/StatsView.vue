<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Stats</p>
            </div>
            <div class="message-body">

                <h1>THIS IS A PAGE TO VIEW WORKOUT STATS (Im just listing raw workout list)</h1>
            </div>
        </article>

        <table class="table is-bordered">
                <tr>
                    <th>id</th>
                    <th>user</th>
                    <th>title</th>
                    <th>picture link</th>
                    <th>location</th>
                    <th>type</th>
                    <th>duration</th>
                    <th>date</th>
                </tr>
                <tr v-for="(workout, i) in statWorkouts" :key="i">
                    <th>{{ workout._id }}}</th>
                    <th>{{ workout.user }}</th>
                    <th>{{ workout.title }}</th>
                    <th>{{ workout.picture }}</th>
                    <th>{{ workout.location }}</th>
                    <th>{{ workout.type }}</th>
                    <th>{{ workout.duration }}</th>
                    <th>{{ workout.date }}</th>

                </tr>
        </table>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import workouts, { deleteWorkout, getWorkout } from '../stores/workout'

const statWorkouts = reactive([] as any[]);
getWorkout().then((data) => {
    statWorkouts.push(...data);
    console.log(statWorkouts);
});

</script>

<style scoped>

</style>