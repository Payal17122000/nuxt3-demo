<template>
    <button @click="showList" class="btn btn-success">UsersList</button>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const showList =  () => {
    router.push("/users");
};
</script>