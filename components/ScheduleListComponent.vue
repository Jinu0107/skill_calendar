<template>
  <div>
    <admin-title-component
      :prop__title="'일정 목록'"
      :prop__icon="'fas fa-clipboard-list'"
    />
    <div class="menu_title">
      <p class="name">유형</p>
      <p class="text">이름</p>
      <p class="date">사유</p>
      <p class="btns">날짜</p>
    </div>
    <div class="item_list">
      <schedule-item-component
        v-for="(item, index) in schedule_list"
        :key="index"
        :prop__item="item"
      />
    </div>
  </div>
</template>

<script>
import AdminTitleComponent from "@/components/AdminTitleComponent";
import ScheduleItemComponent from "@/components/ScheduleItemComponent";

export default {
  data() {
    return {
      schedule_list: [],
    };
  },
  methods: {
    async getScheduleList() {
      const { data } = await this.$api.auth.getScheduleList();
      this.schedule_list = data;
    },
  },
  mounted() {
    this.getScheduleList();
    this.$bus.$on("admin-init", this.getScheduleList);
  },
  components: {
    AdminTitleComponent,
    ScheduleItemComponent,
  },
};
</script>

<style scoped>
.menu_title {
  display: flex;
  font-size: 0.8rem;
  font-weight: 500;
  color: #9ca4b1;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 0px 15px;
}

.menu_title > p:nth-child(1) {
  width: 60px;
}
.menu_title > p:nth-child(2) {
  width: 20%;
}
.menu_title > p:nth-child(3) {
  width: 30%;
}
.menu_title > p:nth-child(4) {
  width: 20%;
}

.item_list {
  width: 100%;
  height: 68%;
  padding: 0px 15px;
  overflow-y: scroll;
}

.item_list::-webkit-scrollbar {
  width: 4px;
}
.item_list::-webkit-scrollbar-thumb {
  background-color: #c4cdd7;
  border-radius: 5px;
}
.item_list::-webkit-scrollbar-track {
  background-color: #fff;
}
</style>