<template>
  <div class="calendar_container">
    <div id="calendar">
      <img
        class="month_controller"
        v-on:click="changeCalendar(-1)"
        src="/imgs/prev.png"
        alt
      />
      <img
        class="month_controller"
        v-on:click="changeCalendar(1)"
        src="/imgs/next.png"
        alt
      />
      <div class="calendar_top">
        <p
          class="prev_year year_controller"
          ref="prev_year"
          v-on:click="changeCalendar(-12)"
        ></p>
        <span ref="calendar_year_month"></span>
        <p
          class="next_year year_controller"
          ref="next_year"
          v-on:click="changeCalendar(12)"
        ></p>
      </div>
      <table class="calendar_table" ref="calendar_table">
        <thead>
          <tr>
            <th>SUN</th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THE</th>
            <th>FRI</th>
            <th>SAT</th>
          </tr>
        </thead>
        <tbody ref="calendar_tbody">
          <tr v-for="(tr, tr_index) in calendar_item_arr" :key="tr_index">
            <calendar-td-component
              v-for="(td, td_index) in tr"
              :key="td_index"
              :prop__date="String(td.date)"
              :prop__today="td.today"
              @tdClickEvent="tdClickEvent(`${tr_index}-${td_index}`)"
            />
          </tr>
        </tbody>
      </table>
    </div>
    <reservation-button-component
      :prop__is_show="is_show"
      :prop__focus_date="focus_date"
      @reservationSucceed="loadReservationData"
    />
  </div>
</template>

<script>
import CalendarTdComponent from "@/components/CalendarTdComponent";
import ReservationButtonComponent from "@/components/ReservationButtonComponent";

export default {
  data() {
    return {
      list: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      now_month: new Date().getMonth(),
      now_prop_month: new Date().getMonth(),
      now_prop_year: new Date().getFullYear(),
      calendar_item_arr: [],
      month_names: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      is_show: false,
      focus_date: null,
    };
  },
  methods: {
    drawCalendar() {
      // draw Calendar function
      let date = this.newDate(this.now_month);
      let txt = `${this.month_names[
        date.getMonth()
      ].toUpperCase()}, ${date.getFullYear()}`;
      this.$refs.calendar_year_month.innerHTML = txt;

      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDay();
      let lastDate = this.list[month];
      let dNum = 1;

      this.calendar_item_arr = [];
      this.$refs.prev_year.innerHTML = year - 1;
      this.$refs.next_year.innerHTML = year + 1;
      this.now_prop_year = year;
      this.now_prop_month = month;

      if (
        ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) &&
        month == 1
      ) {
        lastDate = 29;
        this.list[1] = 29;
      }

      for (let i = 1; i <= 6; i++) {
        let tr_arr = [];
        for (let j = 1; j <= 7; j++) {
          let td_obj = {};

          if ((i == 1 && j <= day) || dNum > lastDate)
            td_obj = { today: false, date: "" };
          else {
            td_obj = { today: false, date: dNum };
            if (
              year == new Date().getFullYear() &&
              month == new Date().getMonth() &&
              dNum == new Date().getDate()
            ) {
              td_obj.today = true;
            }
            dNum++;
          }
          tr_arr.push(td_obj);
        }
        this.calendar_item_arr.push(tr_arr);
      }
      this.loadReservationData();
    },

    newDate(month, date = 1) {
      let n = new Date();
      n.setDate(date);
      n.setMonth(month);
      return n;
    },

    changeCalendar(num) {
      // change Calendar

      this.now_month += num;
      this.drawCalendar();
    },
    tdClickEvent(index) {
      // 포커스 변경 , ReservationButtonComponent의 prop 값 변경

      this.is_show = true;
      const idx_arr = index.split("-");
      const item = this.calendar_item_arr
        .reduce((now, x) => {
          x.forEach((e) => now.push(e));
          return now;
        }, [])
        .find((day) => day.today);

      if (item !== undefined) item.today = false;

      this.focus_date = this.calendar_item_arr[idx_arr[0]][idx_arr[1]];
      this.focus_date.month = this.now_prop_month + 1;
      this.focus_date.year = this.now_prop_year;
      this.calendar_item_arr[idx_arr[0]][idx_arr[1]].today = true;
    },
    loadReservationData() {
      this.$emit(
        "loadReservationData",
        new Date(`${this.now_prop_year}-${this.now_prop_month + 1}`)
      );
    },
  },
  mounted() {
    //start
    this.drawCalendar();
  },
  components: {
    CalendarTdComponent,
    ReservationButtonComponent,
  },
};
</script>

<style scoped>
.calendar_container {
  position: relative;
  width: 80%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#calendar {
  position: relative;
  width: 70%;
  max-width: 900px;
  margin: auto;
}

.calendar_top {
  padding: 0 3.3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #828282;
}

.calendar_top > .year_controller {
  font-weight: 600;
  color: #0051cb;
  font-size: 1.09rem;
  cursor: pointer;
}

.calendar_top > span {
  font-size: 1.85rem;
  color: #6a7783;
  font-weight: 600;
}

.calendar_table {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 10px;
  border-spacing: 0;
  text-align: center;
  color: #3e454c;
  font-weight: 500;
}

.month_controller {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  width: 25x;
  height: 25px;
  cursor: pointer;
}

.month_controller:nth-child(1) {
  left: -2.35rem;
}
.month_controller:nth-child(2) {
  right: -2.35rem;
}

.calendar_table > thead > tr {
  height: 200px;
}

.calendar_table > thead > tr > th {
  width: calc(100% / 7);
  font-size: 1.4rem;
  font-weight: 600;
  color: #3e454c;
}

.calendar_table > tbody {
  font-size: 1.2rem;
}
</style>