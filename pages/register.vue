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
        :prop__type="'text'"
        :prop__placeholder="'이름'"
      />
      <sign-input-component
        :prop__type="'text'"
        :prop__placeholder="'아이디'"
      />
      <sign-input-component
        :prop__type="'password'"
        :prop__placeholder="'비밀번호'"
      />
      <sign-input-component
        :prop__type="'password'"
        :prop__placeholder="'비밀번호 확인'"
      />
      <div class="sign_link_group">
        <nuxt-link to="/login" class="sign_link"> 로그인 </nuxt-link>
        <nuxt-link to="/" class="sign_link"> 메인으로 </nuxt-link>
      </div>
      <sign-button-component :prop__button_value="'회원가입'"/>
    </div>
  </div>
</template>

<script>
import SignInputComponent from "@/components/SignInputComponent";
import SignButtonComponent from "@/components/SignButtonComponent";

export default {
  components: {
    SignInputComponent,
    SignButtonComponent,
  },
};
</script>

<style>
</style>