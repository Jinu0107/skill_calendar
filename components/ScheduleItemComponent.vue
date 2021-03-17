<template>
  <div class="item">
    <status-label-component
      :prop__text="prop__item.level == 1 ? '휴가' : '휴일'"
      :prop__type="prop__item.level == 1 ? 'reservation' : 'holiday'"
    />
    <user-info-component :prop__item="prop__item" />
    <div class="text text_over">{{ prop__item.info }}</div>
    <div class="date text_over">{{ prop__item.date }}</div>
  </div>
</template>

<script>
import UserInfoComponent from "@/components/UserInfoComponent";
import StatusLabelComponent from "@/components/StatusLabelComponent";

export default {
  props: {
    prop__item: {
      type: Object,
      default: {},
    },
  },
  components: {
    UserInfoComponent,
    StatusLabelComponent,
  },
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