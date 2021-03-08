<template>
  <button @click="prop__clickFunction">{{ prop__button_value }}</button>
</template>

<script>
export default {
  props: {
    prop__button_value: { type: String, default: "button" },
    prop__clickFunction: { type: Function, default: ()=>{} },
  },
};
</script>

<style scoped>
button {
  background-color: #0051cb;
  color: #fff;
  width: 100%;
  /* max-width: 300px; */
  height: 35px;
  border-radius: 0.4rem;
  font-weight: bolder;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}
button:hover {
  filter: brightness(90%);
}
</style>