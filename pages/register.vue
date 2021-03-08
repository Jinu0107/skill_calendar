<template>
  <div class="full_container">
    <div class="center_box">
      <h1 class="sign_title">
        소프트웨어 웹디자인 기능반 <br />
        일정관리 시스템
      </h1>
      <div class="sign_text">
        기능반 학생이시라면 회원가입 후 관리자에게 승인을 받으세요
      </div>
      <sign-input-component
        ref="name_input"
        :prop__type="'text'"
        :prop__placeholder="'이름'"
      />
      <sign-input-component
        ref="id_input"
        :prop__type="'text'"
        :prop__placeholder="'아이디'"
      />
      <sign-input-component
        ref="password_input"
        :prop__type="'password'"
        :prop__placeholder="'비밀번호'"
      />
      <sign-input-component
        ref="passwordc_input"
        :prop__type="'password'"
        :prop__placeholder="'비밀번호 확인'"
      />
      <div class="sign_link_group">
        <nuxt-link to="/login" class="sign_link"> 로그인 </nuxt-link>
        <nuxt-link to="/" class="sign_link"> 메인으로 </nuxt-link>
      </div>
      <sign-button-component
        :prop__button_value="'회원가입'"
        :prop__clickFunction="registerProcess"
      />
    </div>
  </div>
</template>

<script>
import SignInputComponent from "@/components/SignInputComponent";
import SignButtonComponent from "@/components/SignButtonComponent";

export default {
  methods: {
    async registerProcess() {
      let name = this.$refs.name_input.$el.value;
      let id = this.$refs.id_input.$el.value;
      let password = this.$refs.password_input.$el.value;
      let passwordc = this.$refs.passwordc_input.$el.value;

      if (
        [name, id, password, passwordc]
          .map((x) => x.trim() === "")
          .includes(true)
      ) {
        alert("빈 값이 있습니다.");
        return;
      }

      if (password !== passwordc) {
        alert("비밀번호와 비밀번호 확인이 서로 다릅니다.");
        return;
      }

      let model = { id, password, name };

      // let { data } = await this.$axios.post("/api/user/register", model);
      let data = await this.$api.auth.register(model);
      console.log(data);
      // alert(data.msg);
    },
  },
  components: {
    SignInputComponent,
    SignButtonComponent,
  },
};
</script>

<style>
</style>