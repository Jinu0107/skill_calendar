<template>
  <div class="item">
    <div class="info">
      <img src="/imgs/user.png" alt="" />
      <div class="text">
        <div class="name">안진우</div>
        <p class="id">wlsdn030107</p>
      </div>
    </div>
    <div class="btns">
      <div class="return">거절</div>
      <div class="success">승인</div>
    </div>
  </div>
</template>

<script>
export default {};
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
}

.name {
  font-weight: 500;
  font-size: 0.95rem;
}

.id {
  font-size: 0.75rem;
  color: #ccc;
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

.success {
    background-color: var(--main-blue-color);
}

.return {
    background-color: #c2131f;
}
</style>