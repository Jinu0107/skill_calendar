<template>
  <div class="main_container">
    <sidebar-component />
    <calendar-component :prop__reservation_list="reservation_list" />
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default {
  data() {
    return {
      reservation_list: []
    };
  },
  methods: {
    async getReservationList() {
      let { data } = await this.$api.auth.getReservationList();
      console.log(data);
      this.reservation_list = data;
    }
  },
  mounted() {
    this.getReservationList();
  },
  components: {
    CalendarComponent,
    SidebarComponent
  }
};
</script>

<style>
/* main-color : #0051cb;
blue-border-color : #dde3ea */

.main_container {
  display: flex;
}
</style>
