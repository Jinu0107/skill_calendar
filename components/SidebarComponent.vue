<template>
  <div class="main_sidebar">
    <div class="sidebar_title">
      <i class="fas fa-calendar"></i>
      <span>기능반 일정</span>
    </div>
    <div class="user_box">
      <div class="flex_box center">
        <img src="/imgs/user.png" alt="" />
        <span class="name">안진우</span>
      </div>
      <nuxt-link to="/login">dasdsadsdd</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
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
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dde3ea;
  color: #0051cb;
  font-size: 2rem;
}

.sidebar_title > span {
    margin-left: 15px;
    color: #0051cb;
    font-size: 1rem;
    font-weight: 600;
}
</style>
