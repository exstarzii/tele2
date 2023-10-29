<template>
  <div :class="{modal:!isDekstop&&isMenuOpen}">
    <header>
      <img src="src/assets/logo.svg" />
      <div v-if="isDekstop" class="flex">
        <div class="location">
          <img src="src/assets/location.svg" />
          <span>Москва и область</span>
        </div>
        <Bell class="bell" />
      </div>
      <div v-else class="flex">
        <Bell v-show="!isMenuOpen" class="bell" />
        <img :src="burgerSrc" @click="ToggleMenu" />
      </div>
    </header>
    <div v-show="isMenuOpen||isDekstop" class="nav-container">
      <nav>
        <router-link class="active" to="/Advantages"><span>Преимущества Tele2</span></router-link>
        <router-link to="/Rates"><span>Тарифы</span></router-link>
        <router-link to="/Stocks"><span>Акции и спецпредложения</span></router-link>
        <router-link to="/Promotariff"><span>Промотариф Tele2</span></router-link>
        <router-link to="/eSIM"><span>Технология eSIM</span></router-link>
        <router-link to="/Connection"><span>Подключение нового абонента</span></router-link>
      </nav>
    </div>
    <div v-show="!isDekstop&&isMenuOpen" class="location">
      <img src="src/assets/location.svg" />
      <span>Москва и область</span>
    </div>
  </div>
    <main :class="{overflow:!isDekstop&&isMenuOpen}">
      <router-view></router-view>
    </main>
</template>

<script setup>
import Bell from '../components/Bell.vue';
import { ref, onMounted, onBeforeUnmount,computed,watch} from 'vue';

const isMenuOpen = ref(false);
const burgerSrc = computed(() => isMenuOpen.value ? 'src/assets/close.svg':'src/assets/burger.svg');
const isDekstop = ref(window.innerWidth >= 885);

const handleResize = () => {
  isDekstop.value = window.innerWidth >= 885;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const ToggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

watch([ isMenuOpen, isDekstop ],(arr) => {
  if(arr[0]&&!arr[1])
  document.body.classList.add("no-overflow")
else
  document.body.classList.remove("no-overflow")
});
</script>

<style>
.no-overflow{
  overflow-y: hidden;
}
</style>

<style scoped>
body{
  display: grid;
  grid-template-columns: 200px auto 100px;
}

header {
  display: flex;
  background-color: #1F2229;
  color: #7C8792;
  height: 40px;
  padding: 6px 165px 7px 165px;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  align-items: stretch;
  color: #7C8792;
  gap: 18px;
  border-bottom: 1px solid #D3D9DF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

.nav-container {
  padding: 0 165px;
  background-color: white;
}

nav a {
  display: flex;
  align-items: center;
  color: #7C8792;
  text-decoration: none;
  height: 47px;
}

nav a.router-link-active {
  border-bottom: 2px solid #1F2229;
  color: #1F2229;
}

.location {
  color: #7C8792;
  display: flex;
  align-items: center;
  gap: 9px;
}

.flex {
  display: flex;
  gap: 32px;
}
.modal{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 45px 1fr 56px;
}
.overflow{
  overflow-y: hidden;
}

@media (max-width: 885px) {
  header {
    box-sizing: border-box;
    height: 45px;
    padding: 9px 18px;
  }
  .nav-container {
    padding: 24px 15px;
  }
  nav {
    display: flex;
    flex-flow: column;
    gap: 16px;
    border: none;
    position: relative;
  }
  nav a{
    padding-bottom: 8px;
    border-bottom: 1px solid #EDEDED;;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
  }

  .flex {
  gap: 18px;
  }
  .location{
    height: 56px;
    box-sizing: border-box;
    padding: 16px;
    background-color: #F3F5F6;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
}
</style>
