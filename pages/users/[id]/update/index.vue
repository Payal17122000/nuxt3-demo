<template>
  <div><UpSert :user="getUser" /></div>
</template>

<script setup>
import UpSert from "@/components/Upsert.vue";
import { onBeforeMount, computed } from "vue";
import { useUserStore } from "@/store/users";
import { useRoute } from "vue-router";

const id = useRoute().params.id;

const store = useUserStore();

const getUser = computed(() => {
  return store.getUser;
});

onBeforeMount(() => {
  store.fetchUser(id);
});
</script>

<style></style>