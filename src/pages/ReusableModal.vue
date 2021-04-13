<template>
  <section class="flex flex-wrap w-full">
    <h1 class="text-2xl text-center block w-full my-5 font-bold">
      Re-usable Modal
    </h1>
    <div class="m-auto">
      <Modal @close-modal="closeit" v-if="isModal1Open">
        <template #title>
          <h1 class="text-red-500">Modal 1</h1>
        </template>
        <template #body>
          <p class="w-full text-red-500">this is body from modal 1</p>
        </template>
      </Modal>
      <button
        class="bg-green-400 p-4 rounded mr-20"
        @click="isModal1Open = true"
      >
        Modal 1
      </button>

      <Modal @close-modal="closeit" v-if="isModal2Open">
        <template #title>
          <h1 class="text-blue-500">Modal 2</h1>
        </template>
        <template #body>
          <p class="w-full text-blue-500">this is body from modal 2</p>
        </template>
      </Modal>
      <button class="bg-green-400 p-4 rounded" @click="isModal2Open = true">
        modal 2
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/ReUseModal";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);

    function closeit() {
      isModal1Open.value = false;
      isModal2Open.value = false;
    }
    return { isModal1Open, closeit, isModal2Open };
  },
};
</script>

<style>
</style>