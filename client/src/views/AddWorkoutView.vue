
<script  lang="ts">
import workouts, { addWorkout } from '../stores/workout'
import session, { login, logout } from '../stores/session'

export default {
  data() {
    return {
        Title: ''
    }
  }
}

</script>

<template>
    <div>

        <article class="message is-info">
            <div class="message-header">
                <p>Add Workout</p>

            </div>
            <div class="message-body">

                <h1>THIS IS A PAGE TO ADD A BRAND NEW WORKOUT ONTO THIS LIST</h1>
            </div>
        </article>

        <div class="field">
            <label class="label is-large">Add New Workout</label>
            <label class="label">Title</label>
            <div class="control has-icons-left has-icons-right">
                <input v-model="Title" class="input is-large" type="email" placeholder="Enter Title" />
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope fa-xs"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check fa-xs"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Picture</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-large" type="email" placeholder="Enter Picture Link">
                <span class="icon is-left">
                    <i class="fas fa-envelope fa-sm"></i>
                </span>
                <span class="icon is-right">
                    <i class="fas fa-check fa-sm"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Location</label>

            <div class="control has-icons-left has-icons-right">
                <input class="input is-large" type="email" placeholder="Enter Location">
                <span class="icon is-large is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-large is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Type</label>

            <div class="control has-icons-left has-icons-right">
                <input class="input is-large" type="email" placeholder="Enter Type of Workout">
                <span class="icon is-medium is-left">
                    <i class="fas fa-envelope fa-lg"></i>
                </span>
                <span class="icon is-medium is-right">
                    <i class="fas fa-check fa-lg"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Duration</label>

            <div class="control has-icons-left has-icons-right">
                <input class="input is-large" type="email" placeholder="Enter Duration">
                <span class="icon is-large is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-large is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div class="field">
            <label class="label">Date</label>

            <div class="control has-icons-left has-icons-right">
                <input class="input is-large" type="email" placeholder="Enter Date">
                <span class="icon is-large is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-large is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
        </div>
        <div class="control">
            <button @click="addWorkout(`${session?.user?.firstName} ${session?.user?.lastName}`,'jimmy','jimmy','jimmy','jimmy','jimmy','jimmy')" class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button @click="$router.push('/home')
            " class="button is-link is-light">Cancel</button>
        </div>
    </div>
</template>

<style scoped>

</style>