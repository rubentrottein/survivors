let sections = document.getElementsByTagName('section');
function capFirst(el){
    el.split("_").map(function(e){ console.log(el + " splitted");})
    return (el+'').charAt(0).toUpperCase()+el.substr(1);
}
for (let i=0; i<sections.length;i++){
    document.getElementsByTagName("nav")[0].innerHTML+=
    `
        <li><a href="#`+sections[i].id+`">`+capFirst(sections[i].id)+`</a></li>
    `
}