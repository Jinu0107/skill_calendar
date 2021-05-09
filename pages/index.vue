<template>
  <div class="main_container">
    <sidebar-component :prop__schedule_list="schedule_list" />
    <calendar-component
      v-if="schedule_list != null"
      :prop__schedule_list="schedule_list"
      @loadReservationData="getReservationList"
    />
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default {
  data() {
    return {
      schedule_list: null,
      date: new Date(),
    };
  },
  methods: {
    async getReservationList(now_date) {
      if (now_date != undefined) {
        this.date = now_date;
      } else {
        this.schedule_list = null;
      }
      let model = {
        date: `${this.date.getFullYear()}-${this.date.getMonth() + 1}`,
      };
      let { data } = await this.$api.auth.getReservationList(model);
      data = data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      data = data.reduce((arr, x) => {
        let date_arr = x.date.split("-");
        x.str_date = `${date_arr[0]}, ${date_arr[1]}월 ${date_arr[2]}일`;
        x.date_arr = date_arr;
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

      this.schedule_list = data;
    },
  },
  mounted() {
    this.getReservationList();
    console.log(kakao.maps);
    console.log("연결성공")
    // let map_con = document.getElementById("map_con");
    // let mapOption = {
    //   center: new kakao.maps.LatLng(37.3739505396753, 127.14103760668173),
    //   level: 4,
    // };
    // this.map = new kakao.maps.Map(map_con, mapOption);
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
