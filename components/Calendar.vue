<template>
  <div class="calendar_container">
    <div id="calendar">
      <div class="calendar_top">
        <i class="fa fa-chevron-left" data-num="-1"></i>
        <span ref="calendar_year_month"></span>
        <i class="fa fa-chevron-right" data-num="1"></i>
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
        <!-- <tbody ref="calendar_tbody">

        </tbody> -->
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      now_month: new Date().getMonth(),
      date_arr: [],
    };
  },
  methods: {
    drawDate() {
      let date = this.newDate(this.now_month);
      let txt = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
      this.$refs.calendar_year_month.innerHTML = txt;

      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDay();
      let now_date = date.getDate();
      let lastDate = this.list[month];
      let tbody = document.createElement("tbody");
      let dNum = 1;

      this.date_arr = [];

      if (
        ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) &&
        month == 1
      ) {
        lastDate = 29;
        this.list[1] = 29;
      }
      for (let i = 1; i <= 6; i++) {
        let tr = document.createElement("tr");

        for (let j = 1; j <= 7; j++) {
          let td = document.createElement("td");
          if ((i == 1 && j <= day) || dNum > lastDate) {
            td.innerHTML = `<span></span>`;
          } else {
            td.innerHTML = `<span>${dNum}</span>`;
            if (dNum == new Date().getDate()) {
              td.classList.add("calendar_active");
            }
            console.log(td);
            dNum++;
            this.date_arr.push(td);
          }
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }

      this.$refs.calendar_table.appendChild(tbody);
    },
    newDate(month, date = 1) {
      let n = new Date();
      n.setDate(date);
      n.setMonth(month);
      return n;
    },
  },
  mounted() {
    this.drawDate();
  },
};
</script>

<style>
.calendar_container {
  width: calc(100% - 50px);
  height: 100vh;
  margin-left: 50px;
  background-color: #f3f3f3;
}

#calendar {
    width: 70%;
    margin: 0 auto;
}

.calendar_top {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #828282;
}

.calendar_top > i {
  font-size: 0.87em;
}

.calendar_top > span {
  font-size: 1.03em;
}

.calendar_table {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 10px;
  border-spacing: 0;
  text-align: center;
  font-size: 0.77em;
  color: #a6a6a6;
}

.calendar_table > thead > tr {
  height: 30px;
}

.calendar_table > thead > tr > th {
  width: calc(100% / 7);
}

.calendar_table > tbody {
  font-size: 1.2em;
}

.calendar_active {
  color: #fff;
}

.calendar_active::before {
  content: "";
  width: 35px;
  height: 35px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: blue;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

.calendar_table > tbody > tr > td {
  position: relative;
  table-layout: fixed;
  height: 54px;
}

.calendar_table > tbody > tr > td > span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>