<template>
  <div class="register_item">
    <admin-title-component
      :prop__title="'일정 등록'"
      :prop__icon="'fas fa-calendar-plus'"
    />
    <div class="form">
      <div class="menu_title">일정을 등록할 날짜와 사유를 입력해주세요</div>
      <input type="date" class="input_date" />
      <textarea class="input_info"></textarea>
    </div>
    <div class="register"
    :click="scheduleRegister"
    >등록 하기</div>
  </div>
</template>

<script>
export default {
  methods : {
    scheduleRegister() {
      
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

.input_date {
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

.input_info {
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