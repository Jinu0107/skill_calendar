<template>
  <div class="item">
    <div class="info">
      <img src="/imgs/user.png" alt />
      <div class="text">
        <div class="name text_over" :title="prop__data.user_name">{{prop__data.user_name}}</div>
        <p class="id text_over" :title="prop__data.user_id">{{prop__data.user_id}}</p>
      </div>
    </div>
    <div class="btns">
      <div class="return" @click="userReturn">거절</div>
      <div class="success" @click="userSuccess">승인</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async userSuccess() {
      let model = { user_id: this.prop__data.user_id };
      const { data } = await this.$api.auth.usetSuccess(model);
      alert(data.msg);
    },
    async userReturn() {
      let model = { user_id: this.prop__data.user_id };
      const { data } = await this.$api.auth.userReturn(model);
      alert(data.msg);
    }
  },
  props: {
    prop__data: { type: Object, default: {} }
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

.info {
  height: 100%;
  display: flex;
  align-items: center;
}

.info > img {
  width: 35px;
  height: 35px;
  object-fit: cover;
}

.text {
  margin-left: 10px;
}

.name {
  font-weight: 500;
  font-size: 0.95rem;
  width: 100px;
}

.id {
  font-size: 0.75rem;
  color: #ccc;
  width: 100px;
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