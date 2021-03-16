<template>
  <div class="item">
    <div class="info">
      <img src="/imgs/user.png" alt />
      <div class="text">
        <div class="name text_over">{{prop__item.user_name}}</div>
        <p class="id text_over">{{prop__item.user_id}}</p>
      </div>
    </div>
    <div class="group" :class="{normal : is_normal}" @change="changeClass">
      <select class="class" ref="class">
        <option value="2" :selected="prop__item.user_level == 2">정규반</option>
        <option value="1" :selected="prop__item.user_level == 1">일반반</option>
      </select>
      <div class="count">남은휴가 : 4개</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_normal: false
    };
  },
  methods: {
    changeClass() {
      this.is_normal = this.$refs.class.value == 1;
    }
  },
  mounted() {
    this.is_normal = this.$refs.class.value == 1;
  },
  props: {
    prop__item: { type: Object, default: {} }
  }
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

.info {
  height: 100%;
  display: flex;
  align-items: center;
}

.info > img {
  width: 35px;
  height: 35px;
  object-fit: cover;
}

.text {
  margin-left: 10px;
  width: 100%;
}

.name {
  font-weight: 500;
  font-size: 0.95rem;
}

.id {
  font-size: 0.75rem;
  color: #ccc;
}

.group {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid var(--main-blue-color);
  transition: 0.2s;
}

.group.normal {
  border: 2px solid #42c3ba;
}

.group.normal > .class {
  background-color: #42c3ba;
}

.class {
  color: #fff;
  background-color: var(--main-blue-color);
  padding: 3px 8px;
  font-size: 0.8rem;
  font-weight: 500;
  border: none;
  transition: 0.2s;
}

.class > option {
  background-color: #fff;
  color: #000;
}

.count {
  background-color: #fff;
  padding: 3px 8px;
  font-size: 0.8rem;
  letter-spacing: -1px;
}

.btns {
  display: flex;
}

.btns > div {
  color: #fff;
  border-radius: 20px;
  padding: 3px 12px;
  font-size: 0.8rem;
  margin: 0 2px;
  cursor: pointer;
}

.btns > div:hover {
  filter: brightness(110%);
}

.save {
  background-color: var(--main-blue-color);
}
</style>