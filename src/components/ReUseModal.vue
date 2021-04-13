<template>
  <section
    @click.self="close"
    class="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div class="w-1/2">
      <div class="flex w-full h-full">
        <div class="z-30 w-full m-auto bg-white p-2 rounded shadow">
          <div class="p-2 border w-full">
            <h1 class="text-3xl w-full"><slot name="title"></slot></h1>
            <main class="w-full"><slot name="body"></slot></main>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup(_, { emit }) {
    const close = () => {
      emit("close-modal");
    };
    return { close };
  },
};
</script>

<style>
</style>