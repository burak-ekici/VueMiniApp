<template>
  <h1 class="text-xl font-bold text-center block w-full mt-8">
    Projet effectué sur CRUD CRUD et donc la database n'était accesible que le
    temp du test
  </h1>
  <section class="flex w-full">
    <div class="m-auto mt-20">
      <div>
        <div class="flex justify-between">
          <Create @new-user-added="addUser" />
        </div>

        <table>
          <thead>
            <tr>
              <th class="border px-4 py-2">ID</th>
              <th class="border px-4 py-2">Avatar</th>

              <th class="border px-4 py-2">Name</th>
              <th class="border px-4 py-2">Email</th>
              <th class="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user.id">
              <td class="border px-4 py-2">
                {{ user._id }}
              </td>
              <td class="border px-4 py-2">
                <img class="rounded-full" width="50" :src="user.avatar" />
              </td>

              <td class="border px-4 py-2">{{ user.name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                <button
                  @click="destroy(user._id)"
                  class="px-2 py-1 bg-red-400 text-white"
                >
                  Delete
                </button>
                <div class="flex justify-between">
                  <Edit :user="user" @user-editted="editUser" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between mt-6">
          <button
            class="rounded text-white px-4 py-2"
            @click="previous"
            :disabled="state.users.page === 1"
            :class="
              state.users.page === 1
                ? 'bg-gray-300'
                : 'bg-green-400 hover:shadow-xl'
            "
          >
            Prev
          </button>
          <button
            class="rounded text-white px-4 py-2"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages
                ? 'bg-gray-300'
                : 'bg-green-400 hover:shadow-xl'
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
import Create from "../components/UserCrud/Create";
import Edit from "../components/UserCrud/Edit";

export default {
  components: {
    Create,
    Edit,
  },
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get("/users");
      state.users = data;
    });

    async function next() {
      //   const { data } = await axios.get(`/users?page=2`);
      //   state.users = data;
      console.log("next");
    }
    async function previous() {
      //   const { data } = await axios.get(`/users?page=1`);
      //   state.users = data;
      console.log("prev");
    }

    async function destroy(id) {
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter((user) => user._id !== id);
    }

    function addUser(data) {
      state.users.push(data);
    }

    async function editUser(data) {
      console.log(data);
    }

    return { state, next, previous, destroy, addUser, editUser };
  },
};
</script>

<style>
</style>