
<script setup lang="ts">
import session, { login, logout } from '../stores/session' 
import WelcomeCard from '../components/WelcomeCard.vue';



</script>

<template>
  <article class="message is-info">
    <div class="message-header">
      <p>Landing Page</p>
    </div>
    <div class="message-body">

      <h1>Welcome</h1>
      <p>this is the temporary landing page for my exersize application</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error nihil inventore voluptatibus quam porro
        sequi! Tempora repudiandae rem dignissimos eaque, cupiditate facere autem voluptatibus earum cumque, minima sed
        odit.</p>
    </div>
  </article>

  
  <!-- <div class="columns">
    <div class="column is-half"> <WelcomeCard></WelcomeCard></div>
    <div class="column">Auto</div>
  <div class="column">Auto</div> -->
<!-- </div> -->
  <WelcomeCard></WelcomeCard> 





</template>
