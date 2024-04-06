window.onload = function(){
    clickPefil();
    clickSair();
    clickMenu();
    perfilValue();

    function clickPefil(){
        var modal = document.getElementById('modal');
        var perfilClick = document.getElementById('perfil');
        perfilClick.addEventListener('click',function(){
            if(modal.style.display == 'block'){
                modal.style.display = 'none';
            }else{
                modal.style.display = 'block';           
            }
            
        })
    }

    function clickSair(){
        var sair = document.getElementById('clickSair');
        sair.addEventListener('click',function(){
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500);
        })
    }

    function clickMenu(){
        var filmes = document.getElementById('filmes');
        var series = document.getElementById('series');
        var home = document.getElementById('home');
        var meuPerfil = document.getElementById('meuPerfil');
        var configuracao = document.getElementById('configuracao');
        var fundo = document.getElementById('fundo');
        var fundo2 = document.getElementById('fundo2');
        var homeF = document.getElementById('home-fundo');
        var serieF = document.getElementById('serie-fundo');
        var filmeF = document.getElementById('filme-fundo');

        filmes.addEventListener('click', function(){
            setInterval(() => {
                window.location.href = 'filmes.html';
            }, 500);
            
        })
        series.addEventListener('click', function(){
            setInterval(() => {
                window.location.href = 'series.html';
            }, 500);
        })
        home.addEventListener('click', function(){
            setInterval(() => {
                window.location.href = 'home.html';
            }, 500);
        })
        meuPerfil.addEventListener('click', function(){
            setTimeout(() => {
                fundo.style.display = 'block'; 
            }, 500);
        })
        configuracao.addEventListener('click', function(){
            setTimeout(() => {
                fundo2.style.display = 'block';
                
            }, 500);
        })
    }
    
    function perfilValue(){
        var userCad = document.getElementById('cadastro-user');
    var cadUser = document.getElementById('user-cadastrado');
    
    var valor = document.getElementById('valor');
    var add = document.getElementById('add');
    var escopo = document.getElementById('escopo');
    var entrar = document.getElementById('entrar');
    var text = document.getElementById('text');
    var fundo = document.getElementById('fundo');
    var meuPerfil = document.getElementById('meuPerfil');
    var homeF = document.getElementById('home-fundo');
    var serieF = document.getElementById('serie-fundo');
    var filmeF = document.getElementById('filme-fundo');
    var modal = document.getElementById('modal');

    add.addEventListener('click',function(){
        if(valor.value.length <= 4){
            alert('seu nome de usuario esta muito curto');
            valor.value = '';
        }else if(valor.value.length > 15){
            alert('seu nome de usuario esta muito longo');
            valor.value = '';

        }else{
            userCad.style.display = 'none';
            cadUser.style.display = 'block';
            text.innerHTML  = 'Ola '+valor.value+', Seja Bem Vindo!';
            escopo.innerHTML = valor.value;
            
            
                entrar.addEventListener('click',function(){
                    fundo.style.display = 'none';
                    modal.style.display = 'none';
                    
                    meuPerfil.addEventListener('click',function(){
                        userCad.style.display = 'none';
                        cadUser.style.display = 'block';
                        text.innerHTML  = 'Ola '+valor.value+', Seja Bem Vindo!';
                        escopo.innerHTML = valor.value;
                    })
                        
                })
        }
    })
    }

    
    
   
   
}