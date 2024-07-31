<template >
 <router-view></router-view>
  <Menu/> 
  <Rodape/>

</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Rodape from '@/components/Rodape.vue'


</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}
</style>