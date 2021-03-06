<template>
  <div class="main_container">
    <div class="main_side_bar">
      <nuxt-link to="/login">dasdsadsdd</nuxt-link>
    </div>
    <calendar-component> </calendar-component>
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent";

export default {
  components: {
    CalendarComponent,
  },
};
</script>

<style>
.main_container {
  display: flex;
}

.main_side_bar {
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 8px rgb(33 38 46 / 30%);
  width: 20%;
  min-width: 280px;
  height: 100vh;
}
</style>
