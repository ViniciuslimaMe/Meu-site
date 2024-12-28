
let escrita = document.getElementsByClassName("conteudo");
for (let i = 0; i < escrita.length; i++) {
    escrita[i].addEventListener("click", function() {
    alert(escrita[i].innerText) 
})}

// let compras = document.getElementById("grid-conteudo");
// let valor = compras.getElementsByTagName("#")[1];


// for (let i = 0; i < escrita.length; i++) {
//     let lista = escrita[i].getElementsByTagName("a");
//     let link = lista[0];
//     console.log(link);

//     link.addEventListener("click", function(event) {
//         var preco = event.target.dataset.preco || 1;
//         // valor.textContent = (parseFloat(valor.textContent) + parseFloat(preco).toFixed(2));
        
//     });
    
// }

// let button = document.getElementById("btn-compras");
// button.addEventListener("click", function(){
//     alert('Continue o pagamento');
// });

// let cardapio = document.getElementsByTagName("figcaption");
// console.log(cardapio);

// for(let i = 0; i < cardapio.length; i++ ){
//     let nomeProduto = cardapio[i].getElementsByTagName("span")[0];
//     nomeProduto = nomeProduto.innerText;
//     let precoProduto = cardapio[i].getElementsByTagName("span")[1];
//     precoProduto = parseFloat(precoProduto.innerText)  
// console.log(precoProduto)   ;
// }

// let spans = document.getElementsByTagName("span");
// let lateral = document.getElementsByClassName("lateral")

// for (let i = 0; i < spans.length; i++) {
//     spans[i].addEventListener("click", function() {
//        console.log(spans[i].innerText);
//     });
// }





