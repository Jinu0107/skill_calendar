<template>
  <div class="calendar_container">
    <img class="month_controller" v-on:click="changeCalendar(-1)" src="/imgs/prev.png" alt="">
    <img class="month_controller" v-on:click="changeCalendar(1)" src="/imgs/next.png" alt="">
    <div id="calendar">
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
          <tr v-for="(tr, index) in calendar_item_arr" :key="index">
            <calendar-td-component
              v-for="(td, idx) in tr"
              :key="idx"
              :date="String(td.date)"
              :today="td.today"
            />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CalendarTdComponent from "@/components/CalendarTdComponent";

export default {
  data() {
    return {
      list: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      now_month: new Date().getMonth(),
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
    };
  },
  methods: {
    drawDate() {
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
            if (this.newDate(month , dNum).getTime() == this.newDate(new Date().getMonth() , new Date().getDate()).getTime()) td_obj.today = true;
            dNum++;
          }

          tr_arr.push(td_obj);
        }
        this.calendar_item_arr.push(tr_arr);
      }
    },
    newDate(month, date = 1) {
      let n = new Date();
      n.setDate(date);
      n.setMonth(month);
      return n;
    },
    changeCalendar(num) {
      this.now_month += num;
      this.drawDate();
    },
  },
  mounted() {
    this.drawDate();
  },
  components: {
    CalendarTdComponent,
  },
};
</script>

<style>
.calendar_container {
  position: relative;
  width: 75%;
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.month_controller {
  position: absolute;
  width: 25x;
  height: 25px;
  cursor: pointer;
}

.month_controller:nth-child(1) {
  left: 5em;
}
.month_controller:nth-child(2) {
  right: 5em;
}

#calendar {
  width: 70%;
  max-width: 900px;
  margin: auto;
}

.calendar_top {
  padding: 0 3.3em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  color: #828282;
}

.calendar_top > .year_controller {
  font-weight: 600;
  color: #ff7f66;
  font-size: 1.09em;
  cursor: pointer;
}

.calendar_top > span {
  font-size: 1.85em;
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

.calendar_table > thead > tr {
  height: 200px;
}

.calendar_table > thead > tr > th {
  width: calc(100% / 7);
  font-size: 1.4em;
  font-weight: 600;
  color: #3e454c;
}

.calendar_table > tbody {
  font-size: 1.2em;
}
</style>