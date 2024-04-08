window.onload = function(){
    scrollFilmes();
    abrirMenuResponsive();
    mudarForm();
    clickA();
    cadastroFeito();
    clickMenu();
    
    function scrollFilmes(){
        var scrollFilmes = document.getElementById('clickFilmes');
        var scrollFilmes1 = document.getElementById('clickFilmes1');
        var scrollFilmes2 = document.getElementsByClassName('scroll-filmes');
        var filmes = document.getElementById('filmes');

        $(scrollFilmes).click(()=>{
            $('html, body').animate({
                scrollTop: 950
            }, 1000)
        })
        $(scrollFilmes1).click(()=>{
            $('html, body').animate({
                scrollTop: 950
            }, 1000)
            $('.menu-mobile ul').fadeOut();
        })
        $(scrollFilmes2).click(()=>{
            $('html, body').animate({
                scrollTop: 950
            }, 1000);
        })
    }
    function abrirMenuResponsive(){
        var menuMob = $('.menu-mobile i');
        var menuFadeIn = $('.menu-mobile ul');
        $(menuMob).click(()=>{
            if($(menuFadeIn).is(':visible')){
                $(menuFadeIn).fadeOut();
                $(menuFadeIn).css('width','0%');
                $(menuFadeIn).css('overflow','hidden');
                $(menuFadeIn).css('transition','2s');
            }else{
                $(menuFadeIn).fadeIn();
                $(menuFadeIn).css('width','50%');
                $(menuFadeIn).css('overflow','hidden');
                $(menuFadeIn).css('transition','2s');
            }
        })
    }

    function mudarForm(){
        var bolinha = $('.bolinha');
        var bolinha2 = $('.bolinha');
        var cadastro = $('.cadastro');
        var login = $('.login');
        var span = $('#span');
        var icon = $('.bolinha > i');

        if (cadastro.is(':visible')) {
            bolinha.click(() => {
                bolinha.css('left', '60%');
                bolinha.css('transition', '1s');
                $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
                
                
                cadastro.fadeOut();
                span.fadeIn();
            });
        }

        $(span).click(()=>{
            $('input[name=user]').val("");
            $('input[name=email]').val("");
            $('input[name=senha]').val("");
            cadastro.fadeIn();
            bolinha.css('left', '0%');
            bolinha.css('transition', '1s');
            $(icon).removeClass('fa-sign-in').addClass('fa-user-plus');
        })
    }

    function clickA(){
        var cadastre = $('#clickA');
        var cadastro = $('.cadastro');
        var bolinha = $('.bolinha');
        var span = $('#span');
        var icon = $('.bolinha > i');

        $(cadastre).click(()=>{
            $('input[name=user]').val("");
            $('input[name=email]').val("");
            $('input[name=senha]').val("");
            cadastro.fadeIn();
            bolinha.css('left', '0%');
                bolinha.css('transition', '1s');
                $(icon).removeClass('fa-sign-in').addClass('fa-user-plus');
        })
    }

    function cadastroFeito(){
        var sucess = $('.cadastroSucess');
        var cadastrar = $('#cadastrar');
        var entrar = $('#entrar');
        var cadastro = $('.cadastro');
        var bolinha = $('.bolinha');
        var span = $('#span');
        var user = $('#user');
        var email = $('input[name=email]');
        var senha = $('input[name=senha]');
        var icon = $('.bolinha > i');

        $(cadastrar).click((e)=>{
            e.preventDefault();
                var valor1 = $(user).val();
                var valor2 = $(email).val();
                var padrao = /^@\.gmail\.com$/;
                var valor3 = $(senha).val();
                var email1 = $('#login1');
                var senha1 = $('#login2');
                if(valor1.length >= 4){
                    if(valor2.length > 4){
                        if(valor2.includes('@gmail.com')){
                            if(valor3.length > 6){
                                bolinha.css('left', '60%');
                                bolinha.css('transition', '1s');
                                $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
                                cadastro.fadeOut();
                                span.fadeIn();
                                $('input[name=email-login]').val($('input[name=email]').val());
                                $('input[name=senha-login]').val($('input[name=senha]').val());
                                console.log($('input[name=user]').val())
                                $(entrar).click((e)=>{
                                    e.preventDefault();
                                        if(email1.val() == valor2 || email1.val() == valor1){
                                            if(senha1.val() == valor3){
                                                
                                                setTimeout(() => {
                                                    window.location.href = 'home.html';
                                                    
                                                }, 2000);
                                                
                                            }else{
                                                senha1.css('border','1px solid red');
                                                setTimeout(() => {
                                                senha1.css('border','1px solid rgba(3, 3, 3, 0.048)');
                                                }, 1000);
                                            }
                                        }else{
                                            email1.css('border','1px solid red');
                                            setTimeout(() => {
                                            email1.css('border','1px solid rgba(3, 3, 3, 0.048)');
                                            }, 1000);
                                        }
                                })    
                            }else{
                                senha.css('border','1px solid red');
                            setTimeout(() => {
                            senha.css('border','1px solid rgb(50, 3, 219)');
                            }, 1000);
                            }
                        }else{
                            email.css('border','1px solid red');
                            setTimeout(() => {
                            email.css('border','1px solid rgb(50, 3, 219)');
                            }, 1000);
                        }
                    }else{
                            email.css('border','1px solid red');
                            setTimeout(() => {
                            email.css('border','1px solid rgb(50, 3, 219)');
                            }, 1000);
                    }
                }else{
                    user.css('border','1px solid red');
                    setTimeout(() => {
                        user.css('border','1px solid rgb(50, 3, 219)');
                    }, 1000);
                }    
        })
        
    }

    function clickMenu(){
        var formulario = $('.formularios');
        var cadastro = $('.cadastro');
        var login = $('.login');
        var entrar = $('#clickEntrar');
        var cadastreSe = $('#clickCadastro');
        var entrar1 = $('#clickEntrar1');
        var cadastreSe1 = $('#clickCadastro1');
        var bolinha = $('.bolinha');
        var assinarAgora = $('#assinar')
        var icon = $('.bolinha > i');
        $(assinarAgora).click(function(){
            
            $('.menu-mobile ul').fadeOut()
            $('input[name=user]').val("");
            $('input[name=email]').val("");
            $('input[name=senha]').val("");
            formulario.fadeIn();
            cadastro.fadeIn();
            bolinha.css('left', '0%');
            bolinha.css('transition', '1s');
            $(icon).removeClass('fa-sign-in').addClass('fa-user-plus');
            bolinha.click(() => {
                bolinha.css('left', '60%');
                bolinha.css('transition', '1s');
                $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
                cadastro.fadeOut();
                
                
            }); 
        })
        $(entrar).click(function(){
                formulario.fadeIn();
                $('.menu-mobile ul').fadeOut()
                bolinha.css('left', '60%');
                bolinha.css('transition', '1s');
                $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
                cadastro.fadeOut();
                bolinha.click(() => {
                    bolinha.css('left', '60%');
                    bolinha.css('transition', '1s');
                    $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
                    cadastro.fadeOut();
                });
                $('#entrar').click(()=>{
                    return false;
                }) 
        })

        $(cadastreSe).click(function(){
            $('.menu-mobile ul').fadeOut()
            formulario.fadeIn();
            $('input[name=user]').val("");
            $('input[name=email]').val("");
            $('input[name=senha]').val("");
            cadastro.fadeIn();
            bolinha.css('left', '0%');
            bolinha.css('transition', '1s');
            $(icon).removeClass('fa-sign-in').addClass('fa-user-plus');
            bolinha.click(() => {
                bolinha.css('left', '60%');
                bolinha.css('transition', '1s');
                $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
                cadastro.fadeOut();
            }); 
    })
    // mobile
        $(entrar1).click(function(){
            formulario.fadeIn();
            $('.menu-mobile ul').fadeOut()
            bolinha.css('left', '60%');
            bolinha.css('transition', '1s');
            $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
            cadastro.fadeOut();
            bolinha.click(() => {
                bolinha.css('left', '60%');
                bolinha.css('transition', '1s');
                $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
                cadastro.fadeOut();
            });
            $('#entrar').click(()=>{
                return false;
            }) 
    })

        $(cadastreSe1).click(function(){
            $('.menu-mobile ul').fadeOut()
            formulario.fadeIn();
            cadastro.fadeIn();
            bolinha.css('left', '0%');
            bolinha.css('transition', '1s');
            $(icon).removeClass('fa-sign-in').addClass('fa-user-plus');
            bolinha.click(() => {
                bolinha.css('left', '60%');
                bolinha.css('transition', '1s');
                $(icon).removeClass('fa-user-plus').addClass('fa-sign-in');
                cadastro.fadeOut();
            }); 
        })

        
    }
};
