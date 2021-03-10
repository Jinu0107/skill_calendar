<template>
  <div class="main_container">
    <sidebar-component :prop__reservation_list="reservation_list" />
    <calendar-component @loadReservationData="getReservationList" />
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default {
  data() {
    return {
      reservation_list: [],
      date: new Date(),
    };
  },
  methods: {
    async getReservationList(now_date) {
      if (now_date != undefined) this.date = now_date;
      let model = {
        date: `${this.date.getFullYear()}-${this.date.getMonth() + 1}`,
      };
      let { data } = await this.$api.auth.getReservationList(model);
      data = data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      data = data.reduce((arr, x) => {
        let date_arr = x.date.split("-");
        x.date = `${date_arr[0]}, ${date_arr[1]}월 ${date_arr[2]}일`;
        let flag = false;
        arr.forEach((e) => {
          e.forEach((i) => {
            if (i.date == x.date) {
              flag = true;
              e.push(x);
            }
          });
        });
        if (!flag) arr.push([x]);
        return arr;
      }, []);

      this.reservation_list = data;
    },
  },
  mounted() {
    this.getReservationList();
  },
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
