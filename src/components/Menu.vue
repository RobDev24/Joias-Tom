<template>
    <div class="menu">
      
  <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <a class="navbar-brand" href="#">Tom Joias</a>
   <router-link to="/">Home</router-link> 
   <router-link to="/Eventos">Eventos</router-link>
   <router-link to="/Colecoes">Coleções</router-link>
   <router-link to="/Store">Store</router-link>
   <router-link to="/Sobre">Sobre</router-link>
   <router-link to="/Contato">Contato</router-link>

   <form class="d-flex" role="search">
        <input class="form-control me-4" type="pesquisar" placeholder="Pesquisar" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Pesquisar</button>
      </form>
</nav>
</div>
</template>

<script setup>

</script>

<style scoped>
.menu{
   display: flex;
    width: 1338px;
    height: 80px;
    margin-top: 3px;
    margin-bottom: 400px;
    margin-left: -60px;
    
    
}

.menu nav{
    width: 100%;
    background-image: url('../assets/imagens/diamente3.PNG');
    background-size: 90px;
    background-repeat: no-repeat;
    background-position: 10px;
    margin-left: 0;
    padding: 8px 120px;
   }
nav a{
    margin-left: 10px;
    margin-right: -1em;
}

form{
    margin-right: -100px;
}


</style>