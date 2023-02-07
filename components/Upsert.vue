<template>
  <div>
    <form @submit.prevent="Done">
      id:<input type="textbox" v-model="user.id" disabled /><br /><br />
      email:<input type="textbox" v-model="user.email" /><br /><br />
      username:<input type="textbox" v-model="user.username" /><br /><br />
      password:<input type="textbox" v-model="user.password" /><br /><br />
      firstname:<input type="textbox" v-model="user.firstname" /><br /><br />
      lastname:<input type="textbox" v-model="user.lastname" /><br /><br />
      city:<input type="textbox" v-model="user.city" /><br /><br />
      street:<input type="textbox" v-model="user.street" /><br /><br />
      number:<input type="textbox" v-model="user.number" /><br /><br />
      zipcode:<input type="textbox" v-model="user.zipcode" /><br /><br />
      phone number:<input type="textbox" v-model="user.phone" /><br /><br />
      <button class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from "../store/users";
import { defineProps, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const id = useRoute().params.id;
const router = useRouter();
const store = useUserStore();
const props = defineProps(["user"]);

let user = ref({
  id: props.user.id,
  email: props.user.email,
  username: props.user.username,
  password: props.user.password,
  firstname: props.user.firstname,
  lastname: props.user.lastname,
  city: props.user.city,
  street: props.user.street,
  number: props.user.number,
  zipcode: props.user.zipcode,
  phone: props.user.phone,
});

const Done = async () => {
  if (id == undefined) {
    store.postUser(user.value);
    router.push({ path: "/users", reload: true });
  } else {
    store.updateUser(id, user.value);
    router.push("/users");
  }
};
</script>
