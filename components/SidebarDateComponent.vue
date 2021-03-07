<template>
  <div class="sidebar_date" @click="showSchedule">
    <div class="circle"></div>
    <div class="title">
      2021, 3월 7일 <br />
      <span class="sub"> 안진우 외2명 </span>
    </div>
    <div class="icon" :class="{ on: is_show }">
      <i class="fas fa-angle-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_show: false,
    };
  },
  methods: {
    showSchedule() {
      this.is_show = !this.is_show;
    },
  },
};
</script>

<style scoped>
.sidebar_date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 3px solid var(--main-border-color);
  z-index: 20;
  position: relative;
  width: 100%;
  height: 90px;
  cursor: pointer;
  background: #fff;
  padding-left: 20px;
  padding-right: 5px;
}
.sidebar_date:hover {
  filter: brightness(95%);
}

.circle {
  position: absolute;
  top: 0;
  left: -7px;
  width: 11px;
  height: 11px;
  background-color: var(--main-blue-color);
  border-radius: 100px;
}

.title {
  font-size: 1.1rem;
  font-weight: 500;
}

.title > .sub {
  font-size: 0.85rem;
  color: #6a7783;
}

.icon {
  transform: rotate(0);
  transition: 0.5s;
}

.icon.on {
  transform: rotate(180deg);
}
</style>
