var nomeMes = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Aug", "Set", "Out", "Nov", "Dez"];
var nomeDia = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado","domingo"];

function showDataAtual(){
    var dataAtual = new Date();
    var nomeMesString = nomeMes[dataAtual.getMonth()];
    var nomeDiaString = nomeDia[dataAtual.getDay() - 1];
    var dia = dataAtual.getDate();
    $('#box-dataAtual').html(nomeDiaString + ","+dia+" "+nomeMesString);
}

function hiddenAndShowDiv(div){
    $('#'+div).toggle("slow");
}


function changeSizeFont(option){
    if(option == 'plus'){
        $('.box-title p').css({"font-size":"16px"});
    }
    if(option == 'minus'){
        $('.box-title p').css({"font-size":"14px"});
    }
}

function changeTipografia(){
    $('.box-title p, .btn, .box-remove a, .text-generic, .box-grafico').css({"font-family": "Arial"});
}

function changeHoverBotoes(){
    $('.btn-primary').css({
        "box-shadow": "inset 0 0 0 0 #C14800",
	    "-webkit-transition": "all ease 0.8s",
	    "-moz-transition": "all ease 0.8s",
	    "transition": "all ease 0.8s"});
    $('.btn:hover').css({"box-shadow": "inset 0 100px 0 0 #C14800"});
}

function changeColorButton(){
    $('.btn-add').css({"background":"#397122"});
    $('.button-removeAll').css({"background":"#b03227"});
}

function restoreSettings(){
    $('.box-title p').css({"font-size":"14px"});
    $('.btn-add').css({"background":"#66a74b"});
    $('.button-removeAll').css({"background":"#d7382a"});
    $('.box-title p, .btn, .box-remove a, .text-generic, .box-grafico').css({"font-family": "LATO-REGULAR"});
    $('.btn').css({"font-family": "LATO-BLACK"});
    
}




