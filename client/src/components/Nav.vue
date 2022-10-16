<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
let isActive = ref(false);
</script>

<template>
  <nav class="navbar is-info
" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
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
            <div class="dropdown">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
      <span>User Log in</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Jimmy McGill
      </a>
      <a href="#" class="dropdown-item">
        Kim Wexler
      </a>
      <a href="#" class="dropdown-item">
        Mike Ehrmantraut
      </a>
      <a href="#" class="dropdown-item">
        Howard Hamlin
      </a>
      <a href="#" class="dropdown-item">
        Nacho Varga
      </a>
      <a href="#" class="dropdown-item">
        Gus Fring
      </a>
      <a href="#" class="dropdown-item">
        Chuck McGill
      </a>
      <a href="#" class="dropdown-item">
        Lalo Salamanca
      </a>
    </div>
  </div>
</div>
            <router-link to="/admin" class="button is-dark">
          Admin
        </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>