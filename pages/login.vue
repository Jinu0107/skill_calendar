<template>
  <div class="full_container">
    <div class="center_box">
      <h1 class="sign_title">
        소프트웨어 웹디자인 기능반
        <br />일정관리 시스템
      </h1>
      <div class="sign_text">기능반 학생이시라면 로그인을 통하여 서비스를 이용해보세요</div>
      <sign-input-component ref="id_input" :prop__type="'text'" :prop__placeholder="'아이디'" />
      <sign-input-component
        ref="password_input"
        :prop__type="'password'"
        :prop__placeholder="'비밀번호'"
      />
      <div class="sign_link_group">
        <nuxt-link to="/register" class="sign_link">회원가입</nuxt-link>
        <nuxt-link to="/" class="sign_link">메인으로</nuxt-link>
      </div>
      <sign-button-component :prop__button_value="'로그인'" :prop__clickFunction="loginProcess" />
    </div>
  </div>
</template>

<script>
import SignInputComponent from "@/components/SignInputComponent";
import SignButtonComponent from "@/components/SignButtonComponent";

export default {
  methods: {
    async loginProcess() {
      let id = this.$refs.id_input.$el.value;
      let password = this.$refs.password_input.$el.value;

      if ([id, password].map(x => x.trim() === "").includes(true)) {
        alert("빈 값이 있습니다.");
        return;
      }

      let model = { id, password, name };

      let { data } = await this.$api.auth.login(model);
      alert(data.msg);
      if (data.success) {
        this.$router.push("/");
      }
    }
  },
  components: {
    SignInputComponent,
    SignButtonComponent
  }
};
</script>

<style>
</style>