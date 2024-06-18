const product =[
{

    image: 'img/794bb96cf6.jpg.webp',
    title: 'Poltrona Preta Amadeirada',
    price: 1300
},

{
    image: 'img/poltrona_cuti_tecido_palha_-_corda_fita.jpeg',
   title: 'Air Pods Pro',
    price: 150
},
{
    image: 'img/cadeira_estofada_com_braco_nord_cinza_pes_madeira_escandinava_499_1_20200518154656.jpg.webp',
    /*title: '250 DSLR Camera',*/
    price: 230
},
{
    image: 'img/mesa-de-jantar-julia-1.webp',
    title: 'Headphones',
    price: 100
},

]

const categories =[...new Set(product.map((item)=>
    {return item}))];


    function deElement(a){
     categories.splice(a, 1);
     displaycart();
    }

    function promo(){
        let promocode=document.getElementById('promocode').value;
        if(promocode==1234){
            displaycart(50);
        }
        else(
            prompt("Insira o código promocional correto")
        )
    }

 function displaycart(c){
    let j=0, total=0;
    document.getElementById("itemA").innerHTML = categories.length + " Items";
    document.getElementById("itemB").innerHTML = categories.length + " Items"; 
    if(categories.length==0){
        document.getElementById("root").innerHTML ="Your cart is empty";

        document.getElementById("totalA").innerHTML = "$ 00.00";
        document.getElementById("totalB").innerHTML = "$ 00.00";
    }
    else{
        document.getElementById("root").innerHTML = categories.map((items)=>{
            let {image, title, price} = items;
            total = total+price;
            document.getElementById("totalA").innerHTML = "$" + total + ".00";

            if(c==50){
                document.getElementById("totalB").innerHTML="$" +(total-c)+".00";
            
            }else{
                document.getElementById("totalB").innerHTML ="$" +total+ ".00";
            }

            return(
                `<tr>

                <td width="150"><div class= "img-box"><img class="img" src=${image}></div></td>
                <td width="360"><p style= 'font-size:15px;'><${title}</p></td>
                <td width= "150><h2 style= 'font-size:15px; color:red; '>$ ${price}.00</h2></td>
                <td width="70">`+"<i class='fa-solid fa-trash' onclick= 'deElement("+ (j++) +")'></i></td>"+
                `</tr>`
            );
        }).join('');
    }
 }
 displaycart();