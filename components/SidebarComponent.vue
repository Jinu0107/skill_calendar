<template>
  <div class="main_sidebar">
    <div class="sidebar_title">
      <i class="far fa-calendar"></i>
      <span>기능반 일정</span>
    </div>
    <div class="date_list_box">
      <sidebar-date-component
        v-for="(item, index) in prop__schedule_list"
        :key="index"
        :prop__schedule_item="item"
      />
    </div>
    <div class="user_box">
      <div class="flex_box center">
        <img src="/imgs/user.png" alt v-if="is_login !== 0" />
        <span class="name" v-if="is_login !== 0">{{ user_name }}</span>

        <span class="name" v-if="is_login === 0">비 로그인중</span>
      </div>
      <nuxt-link to="/login" class="link" v-if="is_login === 0">
        <i class="fas fa-sign-in-alt"></i>
      </nuxt-link>
      <a href="#" class="link" v-if="is_login !== 0" @click="logOutProcess">
        <i class="fas fa-sign-out-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>
import SidebarDateComponent from "@/components/SidebarDateComponent";

export default {
  data() {
    return {
      is_login: this.$store.state.auth.level,
      user_name: this.$store.state.auth.name,
      user_img: this.$store.state.auth.img,
    };
  },
  props: {
    prop__schedule_list: { type: Array, default: () => [] },
  },
  methods: {
    logOutProcess() {
      console.log(this.$store.state.auth);
      alert("로그아웃 되었습니다.");
      this.$store.commit("auth/logout");
      this.is_login = this.$store.state.auth.level;
    },
  },
  components: [SidebarDateComponent],
};
</script>

<style scoped>
.main_sidebar {
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 8px rgb(33 38 46 / 30%);
  width: 20%;
  min-width: 280px;
  height: 100vh;
  padding: 0px 20px;
  position: relative;
}

.main_sidebar > hr {
  width: 80%;
  height: 1px;
  background-color: #dde3ea;
  margin: 15px auto;
}

.user_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  position: absolute;
  border-top: 1px solid #dde3ea;
  width: 100%;
  height: 80px;
  bottom: 0;
  left: 0;
}

.user_box img {
  width: 40px;
  height: 40px;
  border-radius: 100000px;
  object-fit: cover;
  margin-right: 13px;
}

.user_box .name {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  color: #000;
}

.sidebar_title {
  width: 100%;
  height: 80px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dde3ea;
  color: #0051cb;
  font-size: 1.5rem;
}

.sidebar_title > span {
  /* margin-left: 15px; */
  margin-left: 8px;
  color: #0051cb;
  font-size: 1.1rem;
  font-weight: 600;
}

.sidebar_title > svg {
  font-size: 1.25rem;
}

.date_list_box {
  margin: 90px auto;
  margin-top: 80px;
  width: 90%;
  height: 70%;
  background-color: #fff;
  overflow-y: auto;
  padding-left: 10px;
}
.date_list_box::-webkit-scrollbar {
  display: none;
}
/* .date_list_box::-webkit-scrollbar-thumb {
  background-color: var(--main-blue-color);
  border-radius: 10px;
}
.date_list_box::-webkit-scrollbar-track {
  background-color: #fff;
} */

.link {
  font-size: 1.2rem;
  color: var(--main-blue-color);
}
</style>
