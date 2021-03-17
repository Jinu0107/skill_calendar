<template>
  <div class="label" :class="prop__type">{{ prop__text }}</div>
</template>

<script>
export default {
  props: {
    prop__text: { type: String, default: "" },
    prop__type: { type: String, default: "" },
  },
};
</script>

<style scoped>
.label {
  color: #fff;
  border-radius: 20px;
  padding: 4px 17px;
  font-size: 0.85rem;
}

.label.reservation {
  background-color: #319b93;
}

.label.holiday {
  background-color: #d15474;
}
</style>