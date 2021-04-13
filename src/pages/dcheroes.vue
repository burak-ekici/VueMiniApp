<template>
  <h1 class="pt-4 mt-0 h-20 my-6 text-center font-extrabold text-4xl">
    DC HEROES
  </h1>
  <p class="relative mx-auto text-center font-bold mb-6">
    Total heroe{{ sin }}: {{ totalheroes }}
  </p>
  <div
    class="w-full top-0 left-0 flex flex-justify items-center justify-center flex-wrap flex-col"
  >
    <table class="table-auto">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th
            class="rounded-tl-md w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm"
          >
            Name of Heroe
          </th>
          <th
            class="rounded-tr-md text-right w-1/3 py-3 px-4 uppercase font-semibold text-sm"
          >
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hero, index) in heroes" :key="hero">
          <td class="px-5 font-bold">{{ hero }}</td>
          <td>
            <button
              @click="deleteheroe(index)"
              class="float-right border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              X
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <input
      ref="newHeroeRef"
      @keyup.enter="addheroes"
      class="outline-none my-3 mx-3 uppercase px-4 py-2 rounded bg-white text-blue-900 text-center border border-black w-1/6 shadow-sm hover:shadow-lg"
      v-model.trim="newheroe"
      type="text"
      placeholder="Hero name"
    />
    <button
      class="outline-none focus:outline-none active:bg-blue-900 uppercase px-8 py-2 rounded bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg"
      @click="addheroes"
    >
      Add
    </button>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
export default {
  setup() {
    const newHeroeRef = ref("");
    let heroes = ref(["aquaman", "superman", "batman"]);
    let newheroe = ref("");
    const totalheroes = computed({ get: () => heroes.value.length });
    const sin = computed({
      get: () => {
        if (heroes.value.length > 1) {
          return "s";
        } else {
          return "";
        }
      },
    });

    function deleteheroe(index) {
      return (heroes.value = heroes.value.filter((hero, id) => id != index));
    }

    function addheroes() {
      if (newheroe.value != "") {
        heroes.value.push(newheroe.value);
        newheroe.value = "";
      }
    }

    onMounted(() => {
      newHeroeRef.value.focus();
    });

    return {
      heroes,
      newheroe,
      deleteheroe,
      addheroes,
      newHeroeRef,
      totalheroes,
      sin,
    };
  },
  // data() {
  //   return {
  //     heroes: ["aquaman", "superman", "batman"],
  //     newheroe: "",
  //   };
  // },
  // methods: {
  //   addheroes() {
  //     if (this.newheroe != "") {
  //       this.heroes.push(this.newheroe);
  //       this.newheroe = "";
  //     }
  //   },
  //   capitalize(value) {
  //     const a = value.slice(0, 1).toUpperCase();
  //     const b = value.slice(1);
  //     return a + b;
  //   },
  //   deleteheroe(index) {
  //     return (this.heroes = this.heroes.filter((hero, id) => id != index));
  //   },
  // },
  // mounted() {
  //   this.$refs.newHeroeRef.focus();
  // },
  // computed: {
  //   totalheroes() {
  //     return this.heroes.length;
  //   },
  //   sin() {
  //     if (this.heroes.length > 1) {
  //       return "s";
  //     } else {
  //       return "";
  //     }
  //   },
  // },
};
</script>

<style>
</style>