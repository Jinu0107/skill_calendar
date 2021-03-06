<template>
  <input
    :type="prop__type"
    :placeholder="prop__placeholder"
    @keydown.enter="pressEnter"
  />
</template>

<script>
export default {
  props: {
    prop__type: { type: String, default: "text" },
    prop__placeholder: { type: String, default: "" },
  },
  methods: {
    pressEnter() {
      this.$emit("pressEnter");
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  /* max-width: 300px; */
  height: 30px;
  padding: 0 10px;
  outline: none;
  border-radius: 0.25rem;
  border: 1px solid #0f0e6b;
  transition: border 0.4s;
  color: #0f0e6b;
  margin-top: 20px;
  font-size: 0.7em;
}
input::placeholder {
  color: #999;
}
input:placeholder-shown {
  border: 1px solid #a7a7a7;
}
input:focus {
  border: 1px solid #0f0e6b;
}
</style>