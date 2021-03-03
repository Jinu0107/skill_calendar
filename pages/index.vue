<template>
  <div>
    <div class="main_side_bar">
      
    </div>
    <calendar />
  </div>
</template>

<script>

import Calendar from '@/components/Calendar';

export default {

components : {
  Calendar
}


}
</script>

<style>

.main_side_bar {
  position: fixed;
  left: 0%;
  top: 0;
  background-color: #3e454c;
  width: 50px;
  height: 100vh;
}

</style>
