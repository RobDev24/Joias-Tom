<template>
    
        <div class="formulario">
            <h3>Entre em contato</h3>
            <form action="https://api.staticforms.xyz/submit" method="post">
               
                <label>Nome</label>
                <input type="text" name="nome" placeholder="Seu nome aqui" minlength="3" maxlength="30" required>

                <label>E-mail</label>
                <input type="email" name="mail" placeholder="Digite seu e-mail" minlength="8" maxlength="40" required>
            
                <label>Mensagem</label>
                <textarea name="mensagem" id="" cols="30" rows="4"></textarea>
                
                <button type="submit">Enviar</button>

                <input type="hidden" name="accessKey" value="9f6cfa85-f93e-4f70-9ade-4f94740f9a92">
                <input type="hidden" name="redirectTo" value="http://localhost:5173/C">
                
            </form>
        
        </div>

    
    
</template>


<style scoped>

.formulario{background:#b6f2e7;width:500px;height:350px;display:block;margin-top:100px;box-shadow:rgba(17,17,26,0.1) 0 4px 16px,rgba(17,17,26,0.1) 0 8px 24px,rgba(17,17,26,0.1) 0 16px 56px;margin-left:300px;align-items:center;padding:8px;color:#0b0000;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif}h3{color:#000;text-align:center}.formulario form{display:flex;flex-direction:column}button{margin-top:15px;border:none;width:80px}input{display:block;margin-top:-10px}textarea{display:block;margin-top:-10px}button{display:grid;text-align:center;align-items:center;padding:5px;background-color:#03c0f0;cursor:pointer;transition:1s;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif}button:hover{background:#1f2628;color:#f3df0c;border-radius:10px;font-family:'Courier New',Courier,monospace}

   </style>