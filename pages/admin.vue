<template>
  <div class="admin_container">
    <!-- 
        1. 알림 
        2. 회원가입 승인 -- OK
        3. 휴가취소, 승인
        4. 일정 등록 
        5. 유저목록 -- OK
        6. 일정
        -->
    <admin-sidebar-component />
    <admin-dashboard-component />
  </div>
</template>

<script>
import AdminSidebarComponent from "@/components/AdminSidebarComponent";
import AdminDashboardComponent from "@/components/AdminDashboardComponent";

export default {
  components: {
    AdminSidebarComponent,
    AdminDashboardComponent,
  },
  mounted() {
    this.$bus.$on("admin-init", () => {
      console.log("init");
    });
  },
};
</script>

<style scoped>
.admin_container {
  display: flex;
}
</style>