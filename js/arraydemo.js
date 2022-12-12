// Array dec and print
var arr1=[100,200,300];

function a1()
{
    console.log("welcome ")
    printarr();
    
}

function printarr()
{
    //to print using loop 
    for(var i=0;i<arr1.length;i++)
    {
        console.log("The element at the index"+i+ " is "+ arr1[i])
    }
}

function pushdemo()
{   console.log("before adding")
    printarr();
    var x=document.getElementById("newme").value 
    arr1.push(x)
    console.log("after adding ")

    printarr();

}

function popdemo()
{
    console.log("before poping");
    printarr();
    arr1.pop()
    if(arr1.length==0)
    {
        console.log("I am KHali")
    }
    console.log("after poping");
    printarr();
    
    
}