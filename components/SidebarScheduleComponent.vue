<template>
    <div class="sidebar_schedule">
        <div class="status_box">
            <div class="stick"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.sidebar_schedule {
    margin-top: 20px;
    position: relative;
    width: 100%;
    height: 90px;
}


.status_box > .stick {
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 3px;
    background-color:  var(--main-border-color);
}

.status_box > .circle {
    position: absolute;
    top: -4px;
    left: 25px;
    width: 11px;
    height: 11px;
    background-color: var(--main-blue-color);
    border-radius: 100px;
}


</style>

