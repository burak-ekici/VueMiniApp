<template>
  <h1 class="pt-4 h-20 mt-6 text-center font-extrabold text-4xl">
    Markdown App
  </h1>
  <section class="flex w-full h-screen py-10 px-20">
    <article class="w-1/2 border">
      <textarea
        ref="markdownRef"
        :value="text"
        @input="update"
        class="w-full h-full"
      ></textarea>
    </article>
    <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
  </section>
</template>

<script>
import marked from "marked";
import useDebounce from "../utilities/composition/useDebounce";
export default {
  data() {
    return {
      text: "",
      debounce: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
  mounted() {
    this.debounce = useDebounce();
    this.$refs.markdownRef.focus();
  },
};
</script>

<style>
</style>