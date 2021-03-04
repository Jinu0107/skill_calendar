<template>
  <div>
    <div class="main_side_bar">
      
    </div>
    <calendar-component />
  </div>
</template>

<script>

import CalendarComponent from '@/components/CalendarComponent';

export default {

components : {
  CalendarComponent
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
