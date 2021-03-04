<template>
  <div class="main_container">
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
.main_container {
  display: flex;
}

.main_side_bar {
  background-color: #3e454c;
  width: 25%;
  height: 100vh;
}

</style>
