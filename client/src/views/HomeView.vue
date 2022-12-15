<script setup lang="ts">
import WelcomeCard from '../components/WelcomeCard.vue';
// import { createDescriptionOfUser } from "@/features/gpt/gpt";
import session, { login, logout } from '../stores/session'
import { myFetch } from '@/services/myFetch';
import { ref } from 'vue';

// this is the variable that will hold the description of the user
const Description = ref('');


// this is the function that will call the gpt function to get the description of the user
async function getGptDescription() {
  myFetch('/api/v1/chatGPTFetch', {
    method: 'POST',
    body: JSON.stringify({
      prompt: 'who is `session.user.firstName` `session.user.lastName`' + '? ',
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      Description.value = data.description;
    });

}




</script>
<template>



  <article class="message is-info">
    <div class="message-header">
      <p>Home</p>
    </div>
    <div class="message-body">

      <h1>Welcome to the temperary home page.</h1>

    </div>
  </article>


  <!-- <div class="columns">
    <div class="column is-half"> <WelcomeCard></WelcomeCard></div>
    <div class="column">Auto</div>
  <div class="column">Auto</div> -->
  <!-- </div> -->
  <WelcomeCard></WelcomeCard>
  <!-- this is the button that will call the function to get the description of the user -->
  <button @click="getGptDescription">Description of user is: {{ Description }}</button>


</template>