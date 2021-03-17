<template>
  <div class="info">
    <img src="/imgs/user.png" alt />
    <div class="text">
      <div class="name text_over" :title="prop__item.user_name">{{ prop__item.user_name }}</div>
      <p class="id text_over" :title="prop__item.user_id">{{ prop__item.user_id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prop__item: { type: Object, default: {} }
  }
};
</script>

<style scoped>
.info {
  height: 100%;
  display: flex;
  align-items: center;
  width: 20%;
}

.info > img {
  width: 35px;
  height: 35px;
  object-fit: cover;
}

.text {
  margin-left: 10px;
  width: 100%;
}

.name {
  font-weight: 500;
  font-size: 0.95rem;
  width: 100%;
}

.id {
  font-size: 0.75rem;
  color: #ccc;
  width: 100%;
}
</style>