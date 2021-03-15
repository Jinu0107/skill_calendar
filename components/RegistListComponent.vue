<template>
  <div>
    <admin-title-component
      :prop__title="'유저 승인'"
      :prop__icon="'far fa-user'"
    />
    <div class="user_list">
      <user-item-component />
      <user-item-component />
      <user-item-component />
      <user-item-component />
      <user-item-component />
      <user-item-component />
      <user-item-component />
      <user-item-component />
      <user-item-component />
      <user-item-component />
    </div>
  </div>
</template>

<script>
import AdminTitleComponent from "@/components/AdminTitleComponent";
import UserItemComponent from "@/components/UserItemComponent";

export default {
  components: {
    AdminTitleComponent,
    UserItemComponent,
  },
};
</script>

<style scoped>
.user_list {
  width: 100%;
  height: 80%;
  padding: 0px 15px;
  overflow-y: scroll;
}

.user_list::-webkit-scrollbar {
    width: 4px;

}
.user_list::-webkit-scrollbar-thumb {
    background-color: #c4cdd7;
    border-radius: 5px;
}
.user_list::-webkit-scrollbar-track {
    background-color: #fff;
}

</style>