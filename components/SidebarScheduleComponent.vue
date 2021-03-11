<template>
  <div class="sidebar_schedule">
    <div class="status_box">
      <div class="stick"></div>
      <div class="circle" :class="{yellow : prop__schedule_item.level == 0}"></div>
    </div>
    <div class="schedule_text">
      <div class="title">{{ prop__schedule_item.user_name }}</div>
      <div class="sub">{{ prop__schedule_item.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prop__schedule_item: { type: Object, default: {} }
  }
};
</script>

<style scoped>
.sidebar_schedule {
  /* display: flex; */
  /* align-items: center; */
  margin-top: 20px;
  position: relative;
  width: 100%;
  height: 90px;
  padding-left: 55px;
}

.status_box > .stick {
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 3px;
  background-color: var(--main-border-color);
}

.status_box > .circle {
  position: absolute;
  top: -4px;
  left: 25px;
  width: 11px;
  height: 11px;
  background-color: var(--main-blue-color);
  border-radius: 100px;
}

.status_box > .circle.yellow {
  background-color: var(--main-yellow-color);
}

.schedule_text {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.schedule_text > .title {
  font-size: 1.1rem;
  font-weight: 500;
}

.sub {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.85rem;
  color: #6a7783;
  font-weight: 500;
}
</style>

