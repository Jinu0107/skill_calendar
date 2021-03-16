<template>
  <div>
    <admin-title-component
      :prop__title="'휴가 요청'"
      :prop__icon="'fas fa-calendar'"
    />
  </div>
</template>

<script>
import AdminTitleComponent from "@/components/AdminTitleComponent";
export default {
  components: {
    AdminTitleComponent,
  },
};
</script>

<style scoped>
</style>