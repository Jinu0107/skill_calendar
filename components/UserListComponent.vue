<template>
  <div>
    <admin-title-component
      :prop__title="'유저 목록'"
      :prop__icon="'fas fa-users'"
    />
    <div class="user_list">
      <user-item-component
        v-for="(item, index) in user_list"
        :key="index"
        :prop__item="item"
      />
    </div>
  </div>
</template>

<script>
import AdminTitleComponent from "@/components/AdminTitleComponent";
import UserItemComponent from "@/components/UserItemComponent";

export default {
  data() {
    return {
      user_list: [],
    };
  },
  mounted() {
    this.loadUserList();
    this.$bus.$on("admin-init", () => {
      this.loadUserList();
    });
  },
  methods: {
    async loadUserList() {
      const { data } = await this.$api.auth.getUserList();
      this.user_list = data;
    },
  },
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

.info {
  display: flex;
  margin: 5px 0px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #a1a8b4;
}

.name {
  width: 140px;
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