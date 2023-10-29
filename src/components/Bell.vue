<template>
    <div class="box" @click="Check">
        <img src="src/assets/bell.svg" :class="{bel:!isChecked}" >
        <img src="src/assets/indicator.svg" class="count" v-show="!isChecked">
    </div>
</template>
<script setup>
import { ref} from 'vue';
const isChecked = ref(false);
const Check = () => {
    isChecked.value = true;
}
</script>

<style scoped>
.box{
    position: relative;
}
.bel {
    animation: bell 1s 1s both infinite;
}
.count {
    position: absolute;
    top: 1px;
    right: 1px;
    animation: zoom 3s 3s both infinite;
}
@keyframes bell {
  0% { transform: rotate(0); }
  10% { transform: rotate(30deg); }
  20% { transform: rotate(0); }
  80% { transform: rotate(0); }
  90% { transform: rotate(-30deg); }
  100% { transform: rotate(0); }
}
@keyframes zoom {
  0% { opacity: 0; transform: scale(0); }
  10% { opacity: 1; transform: scale(1); }
  50% { opacity: 1; }
  51% { opacity: 0; }
  100% { opacity: 0; }
}
</style>