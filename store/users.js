import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    user: {},
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    async fetchUsers() {
      try {
        const data = await axios.get(`http://localhost:5000/users`);
        this.users = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchUser(id) {
      try {
        const data = await axios.get(`http://localhost:5000/users/${id}`);
        this.user = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async postUser(user) {
      try {
        await axios.post(`http://localhost:5000/users`, user);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async updateUser(id, user) {
      try {
        await axios.put(`http://localhost:5000/users/${id}`, user);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async deleteUser(id) {
      try {
        await axios.delete(`http://localhost:5000/users/${id}`);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});