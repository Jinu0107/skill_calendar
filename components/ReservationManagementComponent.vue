<template>
  <div>
    <admin-title-component
      :prop__title="'휴가 요청'"
      :prop__icon="'fas fa-calendar'"
    />
    <div class="menu_title">
      <p class="name">이름</p>
      <p class="text">사유</p>
      <p class="date">날짜</p>
      <p class="btns">승인</p>
    </div>
    <div class="item_list">
      <reservation-management-item-component
        v-for="(item, index) in reservation_list"
        :key="index"
        :prop__item="item"
      />
    </div>
  </div>
</template>

<script>
import AdminTitleComponent from "@/components/AdminTitleComponent";
import ReservationManagementItemComponent from "@/components/ReservationManagementItemComponent";

export default {
  data() {
    return {
      reservation_list: [],
    };
  },
  methods: {
    async getReservationRequestList() {
      const { data } = await this.$api.auth.getReservationRequestList();
      this.reservation_list = data;
    },
  },
  mounted() {
    this.getReservationRequestList();
    this.$bus.$on("admin-init", () => {
      this.getReservationRequestList();
    });
  },
  components: {
    AdminTitleComponent,
    ReservationManagementItemComponent,
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
  width: 20%;
}
.menu_title > p:nth-child(2) {
  width: 30%;
}
.menu_title > p:nth-child(3) {
  width: 20%;
}
.menu_title > p:nth-child(4) {
  width: 103px;
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