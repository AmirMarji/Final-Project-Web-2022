
<script setup lang="ts">
// import workouts, { deleteWorkout } from '../stores/workout'
import router from '@/router';
import { reactive } from 'vue';
import session, { login, logout } from '../stores/session' 
import { workouData, deleteWorkout, getWorkout} from '../stores/workout';

const workouts = reactive([] as any[]);
getWorkout().then((data) => {
    workouts.push(...data);
    console.log(workouts);
});

async function deleteWorkoutByClient(id:string, index: number) {
    await deleteWorkout(id);
    console.log(workouts); 
    workouts.splice(index, 1);
    console.log(workouts);
    router.push('/workout');
}

</script>

<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Workout List</p>
            </div>
            <div class="message-body">

                <h1>THIS IS A PAGE TO VIEW CURRENT WORKOUTS</h1>

                <button class="button is-primary" @click="$router.push('/addworkout')
                ">Add A New WORKOUT</button>
                <div v-for=" i, index in workouts" :key="i.title">

                    <div class="card">
                        <div class="card-image">
                            <header class="card-header">
                                <p class="card-header-title">
                                    {{ i.title }}
                                </p>
                            </header>
                            <figure class="image is-4by3">
                                <img v-bind:src="i.picture" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="../assets/sportIcon.webp" alt="">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{{ i.user }}</p>
                                    <p class="subtitle is-6">@{{ i.user }}</p>
                                </div>
                            </div>

                            <div class="content">
                                {{ i.type }}
                                {{ i.duration }}
                                {{ i.location }}
                                <br>
                                <p>{{ i.date }}</p>
                            </div>
                        </div>
                    </div>
                    <button  class="button is-light" @click="deleteWorkoutByClient(i._id, index)">Delete</button>
                    
                    <!-- EDIT WILL COME LATER -->
                <!-- <button class="button is-light" @click="$router.push('/editworkout')
                ">Edit</button> -->
                </div>

            </div>
        </article>
    </div>
</template>



<style scoped>

</style>