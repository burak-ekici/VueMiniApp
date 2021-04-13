<template>
  <AppHeader />
  <div><router-view></router-view></div>
  <teleport to="body">
    <Login />
  </teleport>
</template>

<script>
import AppHeader from "./components/appheader";
import Login from "./components/Login";
import firebase from "./utilities/firebase";

export default {
  components: {
    AppHeader,
    Login,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setUsername", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setUsername", {});
      }
    });
  },
};
</script>

<style scoped>
</style>
