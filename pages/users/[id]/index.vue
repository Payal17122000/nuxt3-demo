<template>
  <div>
    id:{{ getUser.id }}<br /><br />
    email:{{ getUser.email }}<br /><br />
    username:{{ getUser.username }}<br /><br />
    password:{{ getUser.password }}<br /><br />
    firstname:{{ getUser.firstname }}<br /><br />
    lastname:{{ getUser.lastname }}<br /><br />
    city:{{ getUser.city }}<br /><br />
    street:{{ getUser.street }}<br /><br />
    number:{{ getUser.number }}<br /><br />
    zipcode:{{ getUser.zipcode }}<br /><br />
    phone number:{{ getUser.phone }}<br /><br />
    <button
      class="btn btn-success"
      @click="$router.push(`/users/${getUser.id}/update`)"
    >
      Edit
    </button>
  </div>

</template>

<script setup>
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