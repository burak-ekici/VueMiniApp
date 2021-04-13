<template>
  <section class="w-full">
    <button
      @click="loginWithGoogle"
      class="w-4/6 block m-auto text-center my-6 mb-4 font-semibold border"
    >
      Se connecter avec Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-modal-from-google");
        });
    },
  },
};
</script>

<style>
</style>