<template>
  <div class="register_item">
    <admin-title-component :prop__title="'일정 등록'" :prop__icon="'fas fa-calendar-plus'" />
    <div class="form">
      <div class="menu_title">일정을 등록할 날짜와 사유를 입력해주세요</div>
      <input ref="date_input" type="date" class="date_input" />
      <textarea ref="info_input" class="info_input"></textarea>
    </div>
    <div class="register" @click="scheduleRegister">등록 하기</div>
  </div>
</template>

<script>
export default {
  methods: {
    async scheduleRegister() {
      let date = this.$refs.date_input.value;
      let info = this.$refs.info_input.value;
      console.log(date, info);
      if ([date, info].map(x => x.trim() === "").includes(true)) {
        alert("빈 값이 있습니다.");
        return;
      }
      let model = { date, info };
      let { data } = await this.$api.auth.scheduleRegister(model);
      alert(data.msg);
      this.$bus.$emit("admin-init");
    }
  }
};
</script>

<style scoped>
.register_item {
  position: relative;
}
.form {
  padding: 0px 15px;
  width: 100%;
  height: 70%;
  display: grid;
  grid-template-rows: 15% 25% 60%;
  gap: 2%;
}

.menu_title {
  font-size: 0.8rem;
  font-weight: 500;
  color: #939aa7;
  margin-bottom: 5px;
}

.date_input {
  width: 100%;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #939aa7;
  padding: 0px 10px;
  background-color: #f4f6f9;
  border-radius: 5px;
  margin-bottom: 5px;
}

.info_input {
  width: 100%;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #939aa7;
  padding: 10px;
  background-color: #f4f6f9;
  border-radius: 5px;
  margin-bottom: 5px;
  resize: none;
}

.register {
  color: #939aa7;
  font-size: 0.85rem;
  font-weight: 600;
  position: absolute;
  top: 11px;
  right: 20px;
  cursor: pointer;
}

.register > span {
  margin-right: 1px;
  font-size: 0.8rem;
}
</style>