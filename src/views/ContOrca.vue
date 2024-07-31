<template>
    
        <div class="formulario">
            <h3>Entre em contato</h3>
            <form action="post">

                <label>Nome</label>
                <input type="text" name="nome" placeholder="Seu nome aqui">

                <label>E-mail</label>
                <input type="e-mail" name="mail" placeholder="Digite seu e-mail">
            
                <label>Mensagem</label>
                <textarea name="mensagem" id="" cols="30" rows="4"></textarea>
               
                <button type="submit">Enviar</button>
            </form>
        
        </div>

    
    
</template>


<style scoped>

.formulario{
    
    background: rgb(182, 242, 231);
    width: 500px;
    height: 350px;
    display: block;
    margin-top: 70px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    margin-left: 300px;
    align-items:center;
    padding: 8px;
    color: #e90303;
    
}
h3{
    color: black;
    text-align: center;
}

.formulario form{
    display: flex;
    flex-direction: column;
    
    

}
button{
    margin-top: 15px;
   border: none;
   width: 80px;
}
input{
    display: block;
    margin-top: -10px;
    
}
textarea{
    display: block;
    margin-top: -10px;
}
button{
    display:grid;
    text-align: center;
    align-items: center;
    padding: 5px;
    background: transparent;
    
}

   


</style>