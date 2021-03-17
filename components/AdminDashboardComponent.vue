<template>
  <div class="dashboard">
    <div class="header">
      <div class="text">
        <i class="fas fa-list-alt"></i>
        <span>대시보드</span>
      </div>
      <div class="refresh" @click="reload">
        <i class="fas fa-redo"></i>
      </div>
    </div>
    <div class="grid">
      <regist-list-component />
      <div>일정</div>
      <user-list-component />
      <div>일정등록</div>
      <reservation-management-component />
      <div>알림</div>
      <div class="ad">
        <div class="title">개발자에게 돈을 주세요!</div>
        <div class="text">302-1246-335431 농협 안진우</div>
      </div>
    </div>
  </div>
</template>

<script>
import RegistListComponent from "@/components/RegistListComponent";
import UserListComponent from "@/components/UserListComponent";
import ReservationManagementComponent from "@/components/ReservationManagementComponent";

export default {
  methods : {
    reload() {
      this.$bus.$emit("admin-init");
    }
  },
  components: {
    RegistListComponent,
    UserListComponent,
    ReservationManagementComponent
  }
};
</script>

<style scoped>
.dashboard {
  width: 85%;
  height: 100vh;
  background-color: #f4f6f9;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid var(--main-border-color);
}

.header > .text {
  display: flex;
  align-items: center;
  color: var(--main-blue-color);
  font-size: 1.8rem;
}

.header > .text > span {
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 8px;
}

.refresh {
  border: 1px solid var(--main-border-color);
  color: #8a94a3;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 8px;
  cursor: pointer;
}

.grid {
  width: 100%;
  padding: 17px;
  gap: 17px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 37vh 27vh 23vh;
}

.grid > div {
  background-color: #fff;
  box-shadow: 1px 2px 2px 1px #aaa1;
  border-radius: 10px;
}

.grid > div:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: 2;
}

.grid > div:nth-child(2) {
  grid-column-start: 2;
  grid-column-end: 4;
}

.grid > div:nth-child(3) {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
}

.grid > div:nth-child(4) {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
}

.grid > div:nth-child(5) {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}

.grid > div:nth-child(7) {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
}

.grid > div.ad {
  padding: 20px;
  background: linear-gradient(#0189e7, var(--main-blue-color));
}

.grid > div.ad > .title {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.grid > div.ad > .text {
  font-size: 0.95rem;
  color: #fff;
}
</style>