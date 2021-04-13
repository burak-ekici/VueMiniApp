<template>
  <h1
    class="z-20 text-center text-white tracking-wider absolute w-full pt-4 h-20 mt-6 font-extrabold text-4xl"
  >
    Slider
  </h1>

  <div class="w-full h-screen overflow-hidden">
    <transition name="slide" mode="out-in">
      <div id="slide1" v-if="currentSlide === 0" class="w-full h-full">
        <img src="../assets/dalle.jpg" alt="" />
      </div>
    </transition>
    <transition name="slide" mode="out-in">
      <div id="slide1" v-if="currentSlide === 1" class="w-full h-full">
        <img src="../assets/bois2.jpg" alt="" />
      </div>
    </transition>
    <transition name="slide" mode="out-in">
      <div id="slide1" v-if="currentSlide === 2" class="w-full h-full">
        <img src="../assets/4.jpg" alt="" />
      </div>
    </transition>
  </div>

  <div class="absolute -mt-48 w-full flex justify-between">
    <button
      @click="prev"
      class="focus:outline-none hover:shadow-lg ml-5 text-white px-5 py-2 rounded bg-red-400"
    >
      Prev
    </button>
    <button
      @click="next"
      class="focus:outline-none hover:shadow-lg mr-5 text-white px-5 py-2 rounded bg-green-400"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      intervalId: "",
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.currentSlide === 2 ? (this.currentSlide = 0) : this.currentSlide++;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    prev() {
      this.currentSlide === 0 ? (this.currentSlide = 2) : this.currentSlide--;
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.currentSlide === 2 ? (this.currentSlide = 0) : this.currentSlide++;
      }, 4000);
    },
    next() {
      this.currentSlide === 2 ? (this.currentSlide = 0) : this.currentSlide++;
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.currentSlide === 2 ? (this.currentSlide = 0) : this.currentSlide++;
      }, 4000);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
h1 {
  text-shadow: 2px 2px 3px black;
}

.slide-enter-to {
  transition: all 0.3s;
}
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>