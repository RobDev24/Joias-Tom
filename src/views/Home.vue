<template>
    <div class="home">

        <div class="galeria">
        <span style="--i:1">><img src="../assets/imagens/anel2.PNG" width="150px" height="200"></span>
        <span style="--i:2"><img src="../assets/imagens/brincocolarping.PNG" width="150px" height="200"></span>
        <span style="--i:3"><img src="../assets/imagens/colar.PNG" width="150px" height="200"></span>
        <span style="--i:4"><img src="../assets/imagens/Tom.jpg" width="150px" height="200"></span>
        <span style="--i:5"><img src="../assets/imagens/colarverde.PNG" width="150px" height="200"></span>
        <span style="--i:6"><img src=".." width="150px" height="100"></span>
        <span style="--i:7"><img src="." width="150px" height="100"></span>
        <span style="--i:8"><img src="." width="150px" height="100"></span>
              
    </div> 
    </div>

</template>

<script>


</script>

<style>
.home{
    display: flex;
    margin-top: 22em;
    margin-left: -60px;
    height: 28em;
    width: 88.85em;
    background-image: url('../assets/imagens/tom.jpg');
    background-repeat: no-repeat;
    background-size: 360px;
    border: 2px solid green;
   
}
 
 .home .galeria span img:hover{
        transform: translateY(5px) scale(1.5);
        cursor: pointer;
       }
       .home .galeria:hover{
        animation-play-state: paused;
       }
        .home .galeria{
            position:relative;
            top: 90px;
            left:600px;
            width:100px;
            height:100px;
            transform-style:preserve-3d;
            animation:rotate 20s linear infinite}
            @keyframes rotate{
                0%{transform:perspective(1000px) rotateY(0deg)}
                100%{transform:perspective(1000px) rotateY(360deg)}}
                .home .galeria span{position:absolute;width:100%;height:100%;top:0;left:0;transform-origin:center;transform-style:preserve-3d;transform:rotateY(calc(var(--i) * 45deg)) translateZ(400px);}
                .home .galeria nav img{position:absolute;top:0;left:0;width:100%;height:100%; 

                }



</style>