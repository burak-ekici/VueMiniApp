<template>
  <div v-if="isLoginOpen">
    <section
      @click.self="close"
      class="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <form
        class="bg-white w-1/3 flex flex-col justify-center p-10 rounded"
        @submit.prevent="submit"
      >
        <h1 class="text-3xl font-bold mb-6 border-b-2 border-yellow-400">
          Connexion :
        </h1>
        <Google @close-modal-from-google="close" />
        <p class="w-4/6 block mb-4 m-auto text-center font-semibold">Ou</p>
        <label for="name" class="mb-1 font-bold">E-mail: </label>
        <input
          ref="loginRef"
          v-model="email"
          class="focus:bg-gray-100 border-2 rounded focus:outline-none p-1 mb-2"
          type="text"
          id="name"
        />
        <label for="password" class="mb-1 font-bold">Password : </label>
        <input
          v-model="password"
          class="focus:bg-gray-100 mb-6 border-2 rounded focus:outline-none p-1"
          type="password"
          id="password"
        />
        <div class="mt-5 w-full">
          <button
            @click.self="close"
            class="float-left bg-red-500 text-white py-1 w-2/6 px-3 rounded"
          >
            Cancel
          </button>
          <button
            class="float-right bg-green-500 text-white w-2/6 py-1 px-3 rounded"
          >
            <span v-if="!loading">Login</span>
            <span v-if="loading">Loading ...</span>
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import Google from "../components/Login/Google";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  components: { Google },
  methods: {
    submit() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.loading = false;
          this.email = "";
          this.password = "";
          this.close();
        })
        .catch((e) => {
          console.log(e);
          this.loading = false;
        });
    },
    close() {
      this.$store.commit("setLoginModal", false);
    },
  },
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    },
  },
};
</script>

<style>
</style>