let sections = document.getElementsByTagName('section');
let nav = document.getElementsByTagName("nav")[0];
function capFirst(element){
    element.split("_").map(function(e){ console.log(element + " splitted");})
    return (element+'').charAt(0).toUpperCase()+element.substr(1);
}
for (let i=0; i<sections.length;i++){
    nav.innerHTML+= `<li><a href="#`+sections[i].id+`">`+capFirst(sections[i].id)+`</a></li>`;
}