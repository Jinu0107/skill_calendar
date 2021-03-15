<template>
  <div class="title">
      <i :class="prop__icon"></i>
    <span>{{ prop__title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    prop__title: { type: String, default: "" },
    prop__icon: { type: String, default: "" },
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  display: flex;
  color: var(--main-blue-color);
  padding: 10px 20px;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.title > span {
    font-size: 0.9rem;
    margin-left: 10px;
    font-weight: 600;
    letter-spacing: -1px;
}
</style>