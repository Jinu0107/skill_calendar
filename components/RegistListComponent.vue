<template>
  <div>
    <admin-title-component
      :prop__title="'유저 승인'"
      :prop__icon="'fas fa-user'"
    />
    <div class="user_list">
      <regist-item-component
        v-for="(item, index) in regist_list"
        :key="index"
        :prop__data="item"
      />
    </div>
  </div>
</template>

<script>
import AdminTitleComponent from "@/components/AdminTitleComponent";
import RegistItemComponent from "@/components/RegistItemComponent";

export default {
  mounted() {
    this.loadRegistList();
     this.$bus.$on("admin-init", () => {
      this.loadRegistList();
    });
  },
  data() {
    return {
      regist_list: [],
    };
  },
  methods: {
    async loadRegistList() {
      const { data } = await this.$api.auth.getRegistList();
      this.regist_list = data;
    },
  },
  components: {
    AdminTitleComponent,
    RegistItemComponent,
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