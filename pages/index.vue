<template>
  <div class="main_container">
    <sidebar-component />
    <calendar-component />
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default {
  components: {
    CalendarComponent,
    SidebarComponent,
  },
};
</script>

<style>
/* main-color : #0051cb;
blue-border-color : #dde3ea */


.main_container {
  display: flex;
}
</style>
