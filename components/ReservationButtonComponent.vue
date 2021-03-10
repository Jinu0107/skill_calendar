<template>
  <div class="reservation_button" :class="{show : prop__is_show}" @click="reservationProcess">
    <div class="text">예약 하기</div>
    <div class="icon">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    prop__is_show: { type: Boolean, default: false },
    prop__focus_date: { type: Object, default: {} }
  },
  methods: {
    //예약 진행하는 메소드
    async reservationProcess() {
      if (!this.prop__is_show) return;

      if (this.$store.state.auth.token == null) {
        alert("로그인한 유저만 이용할 수 있습니다.");
        return;
      }
      let model = {
        date: `${this.prop__focus_date.year}-${this.prop__focus_date.month}-${this.prop__focus_date.date}`
      };
      let { data } = await this.$api.auth.reservation(model);
      alert(data.message);
    }
  }
};
</script>

<style scoped>
.reservation_button {
  position: absolute;
  bottom: 60px;
  right: -200px;
  width: 130px;
  height: 40px;
  background-color: var(--main-blue-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  cursor: pointer;
  transition: 0.5s;
}

.reservation_button.show {
  right: 50px;
}

.icon {
  border-radius: 1000px;
  color: #fff;
}
.text {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
}
</style>