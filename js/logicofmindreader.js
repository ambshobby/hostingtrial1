//basics ^
// computerprediction^
//userinp^
//compare^
//result^
//advanced 
// attempts
// restart/reset
////compscore^
//userscore^

//return a random number either 0 or  1 
var pred;
var userip;
var cs=0;
var us=0;



function checkluck()
{   
    let winnerscore=1;
    while(true)
    {
        if(winnerscore!=5)
        {
            reset();
            pred=prediction();
            console.log(pred+" pred")
            userip=document.getElementById("uip").value;
            
            userip=Number(userip);
            while(userip>1 && userip<0)
            {
                userip=document.getElementById("uip").value;
            
                userip=Number(userip);
            }
            console.log(userip+"user")
            updatescores();
        
        }
    }

}







function reset()
{
    cs=0
    u0

}


function updatescores()
{
    if(pred===userip)
    {
        document.getElementById("result").innerHTML="Bot is Smart";
        cs++
        document.getElementById("csresult").innerHTML=cs;
    }
    else
    {
        document.getElementById("result").innerHTML="Bot had a bad choice ";
        us++
        document.getElementById("usresult").innerHTML=us;
    }

}
function prediction()
{   //local variable and also using predefined functions 
    let rand=Math.round(Math.random())
    return(rand);
    
}
