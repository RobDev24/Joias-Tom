<template>
<section>
    <h2>Entre em contato</h2>

<form action="https://api.staticforms.xyz/submit" method="post">
    
    <label>Nome</label>
    <input type="text" name="nome" placeholder="Nome Completo aqui" autocomplete="off" required>
    <label>Email</label>
    <input type="mail" name="email" placeholder="Digite seu e-mail" autocomplete="off" required>
    <label>Telefone</label>
    <input type="phone" name="teledone" placeholder="Digite seu telefone" autocomplete="off">
    <label>mensagem</label>
    <textarea name="message" id="men" cols="60" rows="5" placeholder="Digite sua mensagem"></textarea>
    <button type="submit" name="enviar">Enviar</button>
    
    <input type="hidden" name="accessKey" value="9f6cfa85-f93e-4f70-9ade-4f94740f9a92"> 
    <input type="hidden" name="redirectTo" value="">
</form>
</section>
</template>


<style scoped>





section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 45px;
    background: #1d1d2c;
    width: 500px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
    section h2{
        color: #f5f5ff;
        font-size: 2.5rem;
        margin: 2rem;

    }
    section form{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    form label{
        color: #f5f5ff;
        font-size: 17px;
        margin-bottom: 4px;
    }
    form input{
        padding: 5px;
        outline: none;
        border: o;
        font-size: 10px;
        transition: all 0.5s;
    }
    form input:focus{
        border-radius: 15px;
    }
    form textarea{
        padding: 10px;
        border: 0;
        outline: none;
        font-size: 10px;
        margin-bottom: 15px;
        transition: all 0.5s;
    }
    form textarea:focus{
        border-radius: 15px;
    }

    form button{
        padding: 10px;
        cursor: pointer;
        font-size: 10px;
        background: transparent;
        border: 2px solid #f5f5f5;
        color: #f5f5f5;
        transition: all 1s;
        margin-bottom: 15px;
          }
    form button:hover{
        background: #f5f5f5;
        color: #101026;
        border-radius: 15px;

    }      
</style>