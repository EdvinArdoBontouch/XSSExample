<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function setSessionToken() {
  localStorage.setItem("sessionToken", "secret");
}

function redirect() {
  router.push("home?html=<div>My v-html div</div>");
}

function onClick() {
  setSessionToken();
  redirect();
}
</script>

<template>
  <button @click="onClick">Login</button>
</template>
