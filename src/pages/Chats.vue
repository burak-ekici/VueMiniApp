<template>
  <section class="w-1/2 m-auto">
    <h1 class="font-bold text-3xl block w-full text-center my-10">
      Real Time Chat
    </h1>
    <div class="border-4 border-black rounded-lg chat p-4 bg-gray-100 h-96">
      <div
        class="font-bold text-xl px-8"
        v-for="chat in state.chats"
        :key="chat.message"
        :class="
          chat.userId == userId ? 'text-left text-green-600' : 'text-right'
        "
      >
        {{ chat.message }}
      </div>
    </div>
    <input
      placeholder="Write your message"
      ref="chatsInput"
      class="m-auto bg-gray-100 w-full p-4 rounded-lg block border-black border-4 my-6 h-24 text-cxl leading-6"
      v-model="state.message"
      type="text"
      @keydown.enter="addMessage"
    />
  </section>
</template>

<script>
import { onMounted, reactive, ref, computed } from "vue";
import { chatsRef } from "../utilities/firebase";
import { useStore } from "vuex";
export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
    });
    const chatsInput = ref("");
    const store = useStore();
    const userId = computed(() => store.state.username.uid);
    function addMessage() {
      const newChat = chatsRef.push();

      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }

    onMounted(() => {
      chatsRef.on("child_added", (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
      chatsInput.value.focus();
    });

    return { state, chatsInput, addMessage, userId };
  },
};
</script>

<style scoped>
</style>