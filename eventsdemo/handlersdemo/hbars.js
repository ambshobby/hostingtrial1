
const thehtmldoc = this.document.getElementById("name-demo").innerHTML;
//console.log(thehtmldoc)
const bt1=this.document.getElementById('btn1')
bt1.addEventListener('click',submitafter);

function submitafter()
{
    const template = Handlebars.compile(thehtmldoc);
    var n1=document.getElementById('fname').value

    
    const replacement = {};
    replacement.name=n1;
    
    const compiledHtml = template(replacement);
    
    const divnew = document.getElementById('divnew');
    divnew.innerHTML = compiledHtml;
}