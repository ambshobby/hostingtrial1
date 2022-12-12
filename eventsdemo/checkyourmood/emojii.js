
const bt=this.document.getElementById("bt1");
console.log(bt)
bt.addEventListener('click',moodswing);


function moodswing()
{   let n=emoji();
    console.log(n)
    //n=toString(n);
    var em='&#'+n.toString()
    console.log(em);
    document.getElementById("para1").innerHTML=em
}
function emoji()
{
    return Math.floor(Math.random() * (128518 - 128507 + 1) + 128507);
}