<template>
  <div class="item">
    <user-info-component :prop__item="prop__data" />
    <div class="btns">
      <div class="return" @click="userReturn">거절</div>
      <div class="success" @click="userSuccess">승인</div>
    </div>
  </div>
</template>

<script>
import UserInfoComponent from "@/components/UserInfoComponent";

export default {
  methods: {
    async userSuccess() {
      let model = { user_id: this.prop__data.user_id };
      const { data } = await this.$api.auth.userSuccess(model);
      alert(data.msg);
      this.$bus.$emit("admin-init");
    },
    async userReturn() {
      let model = { user_id: this.prop__data.user_id };
      const { data } = await this.$api.auth.userReturn(model);
      alert(data.msg);
      this.$bus.$emit("admin-init");
    }
  },
  props: {
    prop__data: { type: Object, default: {} }
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
</style>