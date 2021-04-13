<template>
  <h1 class="my-4 text-center text-4xl font-bold">Vue Calendar</h1>
  <section class="my-4 text-4xl font-bold w-1/2 mx-auto pl-6 flex justify-between">
    <h2 >
      {{ currentMonthName }}
    </h2>
    <h2 >
      {{ currentYear }}
    </h2>
  </section>
  <section class="w-1/2 my-9 mx-auto flex justify-center">
    <p class="text-center font-extrabold" v-for="day in days" :key="day">
      {{ day }}
    </p>
  </section>
  <section id="sec2" class="w-1/2 flex flex-wrap mx-auto">
    <p class="my-2 text-center font-semibold" v-for='blank in startDay()' :key="blank"></p>
    <p :class="currentDateClass(num)" class="my-2 text-center font-semibold" v-for="num in daysInMonth()" :key="num">
      {{ num }}
    </p>
  </section>
  <section class="w-1/2 my-9 mx-auto flex justify-between ">
    <button @click="prev" class="btn-red" >Prev</button>
    <button @click="next" class="btn-green">Next</button>
  </section>
  
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear()
    };
  },
  methods:{
    currentDateClass(num){
      const calendarFullDate = new Date(this.currentYear, this.currentMonth , num).toDateString();
      const currentFullDate = new Date().toDateString();
      return  calendarFullDate === currentFullDate  ? 'bg-blue-300' : '' ;
    },
    daysInMonth(){
      return new Date( this.currentYear , this.currentMonth +1 , 0).getDate()
    },
    startDay(){
      return new Date(this.currentYear , this.currentMonth  , 1 ).getDay()
    },
    next(){
      if(this.currentMonth === 11){
        this.currentMonth = 0;
        this.currentYear++
      }else{
        this.currentMonth += 1;
      }

    },
    prev(){
      if(this.currentMonth === 0){
        this.currentMonth = 11;
        this.currentYear--
      }else{
        this.currentMonth -= 1;
      }
    }
  },
  computed:{
    currentMonthName(){
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month:'long'})
    }
  }
};
</script>

<style>
p {
  width: 14.28%;
}
</style>