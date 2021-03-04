<template>
  <td :class="{active : today}">{{ date }}</td>
</template>

<script>
export default {
  props : {
      date : { type : String , default : "" },
      today : { type : Boolean , default : false}
  }
};
</script>

<style>

.calendar_table > tbody > tr > td {
  position: relative;
  table-layout: fixed;
  height: 60px;
  cursor: pointer;
}

.calendar_table > tbody > tr > td.active {
  color: #fff;
  z-index: 5;
}


.calendar_table > tbody > tr > td.active::before {
  content: "";
  width: 35px;
  height: 35px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ff7f66;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  z-index: -1;
}

</style>