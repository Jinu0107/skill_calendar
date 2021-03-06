<template>
  <td :class="{ active: prop__today }" @click="changeFocus">{{ prop__date }}</td>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    prop__date: { type: String, default: "" },
    prop__today: { type: Boolean, default: false },
  },
  methods: {
    changeFocus() {
      if (this.prop__date == "") return;
      this.$emit("tdClickEvent");
    },
  },
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
  background-color: #0051cb;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  z-index: -1;
}
</style>