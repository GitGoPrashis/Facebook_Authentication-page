let creatacc = document.querySelector("#create-account");
let formbox = document.querySelector(".form-box");
let main = document.querySelector(".main");
let cancle = document.querySelector("#cancle");
let login = document.querySelector("#login-btn");
let inviled = document.querySelector("#inviled");
let formlogin = document.querySelector(".form-login");

formlogin.addEventListener("click",function(){
    formlogin.style.backgroundColor = red;
})

login.addEventListener("click",function(){
        inviled.style. opacity= 1;
        main.style. opacity= 0;
    })
    


creatacc.addEventListener("click",function(){
    formbox.style. opacity= 1;
    main.style. opacity= 0.2;
})



creatacc.addEventListener("click",function(){
    formbox.style. opacity= 1;
    main.style. opacity= 0.2;
})
cancle.addEventListener("click",function(){
    main.style. opacity= 1;
    formbox.style. opacity= 0;
})
    


