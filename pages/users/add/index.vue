<template>
  <div><UpSert :user="user" /></div>
</template>

<script setup>
import { ref } from "vue";
import UpSert from "@/components/Upsert.vue";
let user = ref({
  id: 0,
  email: "",
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  city: "",
  street: "",
  number: 0,
  zipcode: "",
  phone: "",
});
</script>

<style></style>
