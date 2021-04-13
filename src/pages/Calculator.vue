<template>
  <section class="flex w-full">
    <div class="m-auto mt-20 w-3/12">
      <h1 class="text-5xl font-bold text-center">Calculator</h1>
      <p
        class="text-3xl font-bold w-full h-10 break-all text-green-700 text-right mt-10 mb-4"
      >
        {{ currentNum }}
      </p>
      <div class="w-full h-10 block mb-3 text-green-400 font-bold">
        <small v-if="selectedOperation" class=""
          >{{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>

      <div class="grid grid-cols-4 gap-2">
        <button
          @click="pressed('1')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          *
        </button>
        <button
          @click="pressed('c')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          C
        </button>
        <button
          @click="pressed('0')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-2 py-4 border rounded shadow font-bold"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";
export default {
  setup() {
    const operations = ["+", "-", "*", "/"];
    const currentNum = ref(0);
    const prevNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") {
        calculate();
      } else if (value === "c") {
        clear();
      } else if (operations.includes(value)) {
        applyOperation(value);
      } else if (!isNaN(value)) {
        appendNumber(value);
      }
    }
    function calculate() {
      if (selectedOperation.value === "*") {
        multiply();
      }
      if (selectedOperation.value === "/") {
        divide();
      }
      if (selectedOperation.value === "-") {
        substract();
      }
      if (selectedOperation.value === "+") {
        sum();
      }

      prevNum.value = "";
      selectedOperation.value = "";
    }
    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }
    function substract() {
      currentNum.value = prevNum.value - currentNum.value;
    }
    function sum() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }
    function applyOperation(value) {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }
    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }
    function clear() {
      currentNum.value = "";
      prevNum.value = "";
      selectedOperation.value = "";
    }

    function handleKeydown(e) {
      pressed(e.key);
    }

    useWindowEvent("keydown", handleKeydown);

    return {
      currentNum,
      pressed,
      operations,
      prevNum,
      selectedOperation,
    };
  },
};
</script>

<style scoped>
button {
  user-select: none;
}
button:focus {
  outline: none;
}
</style>