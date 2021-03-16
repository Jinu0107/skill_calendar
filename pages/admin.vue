<template>
  <div class="admin_container">
    <!-- 
        1. 알림
        2. 회원가입 승인
        3. 휴가취소 승인
        4. 일정 등록 
        5. 유저목록
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
};
</script>

<style scoped>
.admin_container {
    display: flex;
}
</style>