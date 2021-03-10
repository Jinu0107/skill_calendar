<template>
  <div class="sidebar_item">
    <div class="sidebar_date">
      <div class="circle"></div>
      <div class="title">
        {{ prop__reservation_item[0].date }}
        <br />
        <span class="sub"
          >{{ prop__reservation_item[0].user_name }} 외{{
            prop__reservation_item.length-1
          }}명</span
        >
      </div>
      <div class="icon" :class="{ on: is_show }" @click="showSchedule">
        <i class="fas fa-angle-down"></i>
      </div>
    </div>
    <transition name @enter="slideEnter" @leave="slideLeave">
      <div class="schedule_list_box" v-show="is_show" ref="items">
        <sidebar-schedule-component
          v-for="(item, index) in prop__reservation_item"
          :key="index"
          :prop__schedule_item="item"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import SidebarScheduleComponent from "@/components/SidebarScheduleComponent";

export default {
  data() {
    return {
      is_show: false,
      date_arr: null,
      first_name: null,
    };
  },
  props: {
    prop__reservation_item: { type: Array, default: () => [] },
  },
  methods: {
    showSchedule() {
      this.is_show = !this.is_show;
    },
    slideEnter() {
      this.$refs.items.style.height = "auto";
      let { height } = this.$refs.items.getBoundingClientRect();
      this.$refs.items.style.height = 0;
      // setTimeout(() => { this.$refs.items.style.height = 65 * (this.direction.length+2) + "px" }, 10);
      setTimeout(() => {
        this.$refs.items.style.height = height + "px";
      }, 10);
    },
    slideLeave() {
      this.$refs.items.style.height = 0;
    },
  },
  mounted() {
    // this.date_arr = prop__reservation_item[0].date.split("-");
    // this.first_name = prop__reservation_item[0].user_name;
  },
  components: [SidebarScheduleComponent],
};
</script>

<style scoped>
.sidebar_item {
  border-left: 3px solid var(--main-border-color);
}

.sidebar_date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;
  position: relative;
  width: 100%;
  height: 90px;
  cursor: pointer;
  background: #fff;
  padding: 0px 20px;
}
.sidebar_date:hover {
  filter: brightness(98%);
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

.schedule_list_box {
  overflow: hidden;
  width: 100%;
  transition: 0.4s;
}
</style>
