var menuClicado = false;
var menu = document.querySelector(".cabecalho__menu");
var container_icones = document.querySelector(".cabecalho__navbar__lista"); 
var icone_produto = document.querySelector(".item_produto");
var icone_horario = document.querySelector(".item_horario");
var icone_labels = document.querySelectorAll(".cabecalho__navbar__lista__itens__label")

function interagirMenu()
{
    menu.classList.toggle("cabecalho__menu--ativo");

    if(menuClicado)
    {
        

        icone_produto.classList.toggle("item_produto--recolhido");
        icone_horario.classList.toggle("item_horario--recolhido");
        
        icone_labels[0].classList.toggle("itens_label--recolhido");
        icone_labels[1].classList.toggle("itens_label--recolhido");
        icone_labels[2].classList.toggle("itens_label--recolhido");

        setTimeout(function(){
            container_icones.classList.toggle("cabecalho__navbar__lista--transparente");
        }, 200);

        setTimeout(function(){
            container_icones.classList.toggle("cabecalho__navbar__lista--escondido");
        }, 450);
    }
    else
    {
        container_icones.classList.toggle("cabecalho__navbar__lista--escondido");

        setTimeout(function(){
            container_icones.classList.toggle("cabecalho__navbar__lista--transparente");

            icone_produto.classList.toggle("item_produto--recolhido");
            icone_horario.classList.toggle("item_horario--recolhido");

            icone_labels[0].classList.toggle("itens_label--recolhido");
            icone_labels[1].classList.toggle("itens_label--recolhido");
            icone_labels[2].classList.toggle("itens_label--recolhido");
        }, 10);
    }

    menuClicado = !menuClicado;
}

menu.onclick = interagirMenu;