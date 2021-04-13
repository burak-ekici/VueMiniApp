<template>
  <nav
    class="bg-gradient-to-r from-blue-700 to-blue-500 text-white w-full px-4 h-14 flex items-center text-2xl text-bold"
  >
    <router-link
      v-for="el in list"
      :to="el.to"
      :key="el.to"
      class="font-semibold mx-2 hover:text-blue-100"
      >{{ el.title }}</router-link
    >
    <div class="absolute right-0">
      <button
        v-if="isLoggedIn === false"
        @click="openLogin"
        class="font-bold mx-2"
      >
        login
      </button>
      <button v-else class="font-bold mx-2" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      list: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "DC Heroe",
          to: "/dc-heroe",
        },
        {
          title: "Calendar",
          to: "/calendar",
        },
        {
          title: "Markdown",
          to: "/markdown",
        },
        {
          title: "Slider",
          to: "/slider",
        },
        {
          title: "Calculator",
          to: "/calculator",
        },
        {
          title: "Modal",
          to: "/reusablemodal",
        },
        {
          title: "Chat",
          to: "/chats",
        },
        {
          title: "User_Crud",
          to: "/usercrud",
        },
      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
    openLogin() {
      this.$store.commit("setLoginModal", true);
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
};
</script>

<style>
</style>