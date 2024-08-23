///elements 

//                           header                     //
let header = document.createElement("header");
let container = document.createElement("div");
let contentHeader = document.createElement("div");
let logo = document.createElement("h2");
let textLogo = document.createTextNode("Mohamed");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li1Text = document.createTextNode("home");
let li2Text = document.createTextNode("about");
let li3Text = document.createTextNode("services");
let li4Text = document.createTextNode("contact");
let container2 = container.cloneNode(false);
//                           landing page                    //
let content = document.createElement("div");

// attributes 
container.className = "container";
container2.className = "container2";
contentHeader.className = "contentHeader";
content.className = "landing";
//css style 
container.style.cssText = "margin: 0px auto ; width: 97%;";
container2.style.cssText = "margin: 0px auto ; width: 97%; height:100% ; display : grid ; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));";
logo.style.cssText = "color: rgb(35 , 169 , 110); font-size : 15px; font-family: cursive; font-weight: 800; flex-basis : 50%"
contentHeader.style.cssText = "display : flex;"
ul.style.cssText = "display : flex ; flex-basis: 50%; padding : 0; @media (max-width(768px)) {flex-basis : 60%}";
li2.style.cssText ="list-style-type: none; flex-basis: 25%; color:#777;";
li3.style.cssText ="list-style-type: none; flex-basis: 25%;  color:#777;";
li4.style.cssText ="list-style-type: none; flex-basis: 25%;  color:#777;";
li1.style.cssText ="list-style-type: none; flex-basis: 25%;  color:#777;";
content.style.cssText =" background-color: #e8e8e8;";
//js appending

//
let footer = document.createElement("footer");
let textt = document.createElement("p");
textt.innerHTML = "Copyright 2024 ";
footer.appendChild(textt);
footer.style.cssText = "background-color: rgb(35, 169, 110); text-align: center; margin: 0; padding : 10px"
textt.style.cssText = "margin : 0;  color : white ;font-family: Arial, Helvetica, sans-serif; "
//
document.body.prepend(footer);
document.body.prepend(content);
content.appendChild(container2);

logo.prepend(textLogo);
document.body.prepend(header);
header.prepend(container);
container.prepend(contentHeader);
contentHeader.prepend(logo);
contentHeader.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
li1.appendChild(li1Text);
li2.appendChild(li2Text);
li3.appendChild(li3Text);
li4.appendChild(li4Text);


for(let i=1;i<=15;i++)
{
    //elements 
    let box = document.createElement("div");
    let number = document.createElement("h3");
    let num = document.createTextNode(i);
    let caption =  document.createElement("p");
    let text1 = document.createTextNode("product");

    // appending
    number.appendChild(num);
    caption.appendChild(text1);
    box.appendChild(number);
    box.appendChild(caption); 
    container2.appendChild(box);

 // style 
    number.style.cssText = " text-align : center;font-family: Arial, Helvetica, sans-serif; margin:2px 0 0 0; ";
    caption.style.cssText = " text-align : center;font-family: Arial, Helvetica, sans-serif; margin:10px 0 0 0; ";
    box.style.cssText = "height : 65px ; background-color : white; margin: 10px 10px 10px 10px;";
}

