<template>
  <div class="item">
    <user-info-component :prop__item="prop__item" />
    <div class="text text_over">{{prop__item.info}}</div>
    <div class="date text_over">{{prop__item.date}}</div>
    <div class="btns">
      <div class="return" @click="returnReservation">거절</div>
      <div class="success" @click="successReservation">승인</div>
    </div>
  </div>
</template>

<script>
import UserInfoComponent from "@/components/UserInfoComponent";

export default {
  methods: {
    async successReservation() {
      let model = { idx: this.prop__item.idx };
      const { data } = await this.$api.auth.reservationSuccess(model);
      this.$bus.$emit("admin-init");
    },
    async returnReservation() {
      let model = { idx: this.prop__item.idx };
      const { data } = await this.$api.auth.reservationReturn(model);
      this.$bus.$emit("admin-init");
    }
  },
  props: {
    prop__item: {
      type: Object,
      default: { user_name: "안진우", user_id: "wlsdn030107" }
    }
  },
  components: {
    UserInfoComponent
  }
};
</script>

<style scoped>
.item {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #f4f5f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btns {
  display: flex;
}

.btns > div {
  color: #fff;
  border-radius: 20px;
  padding: 3px 12px;
  font-size: 0.8rem;
  margin: 0 2px;
  cursor: pointer;
}

.btns > div:hover {
  filter: brightness(110%);
}

.success {
  background-color: var(--main-blue-color);
}

.return {
  background-color: #c2131f;
}

.text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #aaa;
  width: 30%;
}

.date {
  font-size: 1rem;
  font-weight: 500;
  width: 20%;
}
</style>