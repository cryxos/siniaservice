 
$(document).ready(function(){
    $('.sidenav').sidenav();   
    $('#publicaciones').toggleClass("mostrar");
    $('#normas').toggleClass("mostrar");
    $('#indicadores').toggleClass("mostrar");
    $('#series').toggleClass("mostrar");
    $('#datos').toggleClass("mostrar");
    $('#ui_indicadores').toggleClass("mostrar");   
    $('#ui_regional').toggleClass("mostrar");
    $('#selectDepartamento').on('change', function() {
        cambiarRegion(this.value);
      });
      uiIndicadoresRegional();
});
 

function publicaciones(){ 
    $('#publicaciones').toggleClass("mostrar");
    $('#normas').addClass("mostrar");
    $('#indicadores').addClass("mostrar");
    $('#series').addClass("mostrar");
    $('#datos').addClass("mostrar");
    $('#ui_indicadores').addClass("mostrar"); 
    $('#ui_regional').addClass("mostrar");   
} 
 
function normas(){
    $('#normas').toggleClass("mostrar");

    $('#publicaciones').addClass("mostrar");
    $('#indicadores').addClass("mostrar");
    $('#series').addClass("mostrar");
    $('#datos').addClass("mostrar");
    $('#ui_indicadores').addClass("mostrar");   
    $('#ui_regional').addClass("mostrar"); 
}

function indicadores(){
    $('#indicadores').toggleClass("mostrar");

    $('#publicaciones').addClass("mostrar");
    $('#normas').addClass("mostrar"); 
    $('#series').addClass("mostrar");
    $('#datos').addClass("mostrar");
    $('#ui_indicadores').addClass("mostrar");  
    $('#ui_regional').addClass("mostrar");  
}   

function series(){
    $('#series').toggleClass("mostrar");

    $('#publicaciones').addClass("mostrar");
    $('#normas').addClass("mostrar");  
    $('#indicadores').addClass("mostrar");
    $('#datos').addClass("mostrar");
    $('#ui_indicadores').addClass("mostrar");   
    $('#ui_regional').addClass("mostrar"); 
}

function datos(){
    $('#datos').toggleClass("mostrar");

    $('#publicaciones').addClass("mostrar");
    $('#normas').addClass("mostrar");  
    $('#indicadores').addClass("mostrar");
    $('#series').addClass("mostrar"); 
    $('#ui_indicadores').addClass("mostrar");
    $('#ui_regional').addClass("mostrar");       
}

function capas(){
    $('#datos').toggleClass("mostrar");
    $('#publicaciones').addClass("mostrar");
    $('#normas').addClass("mostrar");  
    $('#indicadores').addClass("mostrar");
    $('#series').addClass("mostrar"); 
    $('#ui_indicadores').addClass("mostrar");  
    $('#ui_regional').addClass("mostrar"); 
}

function uiIndicadores(){
    $('#ui_indicadores').toggleClass("mostrar");
    $('#publicaciones').addClass("mostrar");
    $('#normas').addClass("mostrar");  
    $('#indicadores').addClass("mostrar");
    $('#series').addClass("mostrar");
    $('#ui_regional').addClass("mostrar"); 
}

function uiIndicadoresRegional(){
    $('#ui_regional').toggleClass("mostrar");
    $('#publicaciones').addClass("mostrar");
    $('#normas').addClass("mostrar");  
    $('#indicadores').addClass("mostrar");
    $('#series').addClass("mostrar"); 
    $('#ui_indicadores').addClass("mostrar");    
}

function cambiarRegion(value){
    console.log("value  :",value);
    $('#block_region').attr('src', "https://sinia-regional.netlify.app/?region="+value);
    $('#url_region').html("https://sinia-regional.netlify.app/?region="+value);
}