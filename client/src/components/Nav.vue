<script setup lang="ts">
import { getPeople, type peopleData, type person } from '@/stores/people';
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import session, { login, logout } from '../stores/session'
import LoginBadge from './LoginBadge.vue';

// for user sign in
let isActive = ref(false);
// for navbar
let isOpen = ref(false);



// closeDropdownMenu = function(){
// isActive = !isActive
// };
</script>

<template>
  <nav class="navbar is-info
" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen" class="navbar-burger"
        aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isOpen }">
      <div class="navbar-start">
        <router-link to="/home" class="navbar-item">
          Home
        </router-link>

        <router-link to="/workout" class="navbar-item">
          Workout
        </router-link>
        <router-link to="/stats" class="navbar-item">
          Stats
        </router-link>


        <!-- NOT IMIDIATLY NEEDED BUT IF I DO DECIDE TO DO DROPDOW ITS THERE -->

        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- start of user login dropdown -->
            <div class="dropdown is-active">
              <div class="dropdown-trigger">
                <button v-if="session.user == null || session.user.firstName == 'Guest'" @click="isActive = !isActive"
                  class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>User Log in</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div v-if="session.user == null || session.user.firstName == 'Guest'" class="dropdown-menu"
                id="dropdown-menu3" role="menu" v-show="isActive">
                <div class="dropdown-content">


                  <!-- Dont Know why this is not working       -->
                  <!-- <a  v-for="people in listOfUsers" :key="people.firstName" href="#" class="dropdown-item" @click="login(people.id, people.firstName, people.lastName, people.profilePic)">
                      <figure class="image is-48x48">
                        {{session?.user?.firstName}} {{session?.user?.lastName}}
                    </figure>

                    </a> -->





                  <a href="#" class="dropdown-item"
                    @click="login('jimmy', 'McGill', '/assets/BCS_S6_Portrait_Jimmy.734fdd13.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Jimmy.webp">
                      Jimmy McGill
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item"
                    @click="login('Kim', 'Wexler', '/assets/BCS_S6_Portrait_Kim.94ab7700.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Kim.webp">
                      Kim Wexler
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item"
                    @click="login('Mike', 'Ehrmantraut', '/assets/BCS_S6_Portrait_Mike.c8d64781.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Mike.webp">
                      Mike Ehrmantraut
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item"
                    @click="login('Howard', 'Hamlin', '/assets/BCS_S6_Portrait_Howard.e32b5d99.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Howard.webp">
                      Howard Hamlin
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Nacho', 'Varga', '/assets/BCS_S3_Nacho.da89731f.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S3_Nacho.webp">
                      Nacho Varga
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Gus', 'Fring', '/assets/BCS_S3_GusFringe.d50e5ac8.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S3_GusFringe.webp">
                      Gus Fring
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item"
                    @click="login('Chuck', 'McGill', '/assets/BCS_S3_ChuckMcGill.38a8fe55.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S3_ChuckMcGill.webp">
                      Chuck McGill
                    </figure>
                  </a>
                  <a href="#" class="dropdown-item"
                    @click="login('Lalo', 'Salamanca', '/assets/BCS_S6_Portrait_Lalo.5445c77f.webp')">
                    <figure class="image is-48x48">
                      <img src="../assets/BCS_S6_Portrait_Lalo.webp">
                      Lalo Salamanca
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <router-link to="/admin" class="button is-dark">
              Admin
            </router-link>
            <LoginBadge></LoginBadge>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>



<style lang="scss" scoped>

</style>