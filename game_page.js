p1name=localStorage.getItem("player1");
p2name=localStorage.getItem("player2");
p1score=0;
p2score=0;
document.getElementById("p1name").innerHTML=p1name+ ":";
document.getElementById("p2name").innerHTML=p2name+ ":";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="Question turn - "+p1name;
document.getElementById("player_answer").innerHTML="Answer turn - "+p2name;

function send()
{
    number1 = document.getElementById("number1").value;
     number2 = document.getElementById("number2").value;
     actual_answer = parseInt(number1) * parseInt(number2);
      console.log(actual_answer);
       Q = "<h4>" + number1 + " X "+ number2 +"</h4>";
    I="<br>answer:<input type='text' id='ans'>";
    b="<br><br><button class='btn-success' onclick='check()'>Check</button>";
    Row=Q+I+b;
    document.getElementById("output").innerHTML=Row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
anst="player2";
    quet="player1";
function check()
{
    get_answer=document.getElementById("ans").value;
    if(get_answer==actual_answer)
    {
        if(anst=="player1")
        {
         p1score=p1score+1;
         document.getElementById("p1score").innerHTML=p1score;         
        }
        else
        {
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score;
        }
    }
    if(quet=="player1")
    {
        player_question="player2"
        document.getElementById("player_question").innerHTML="Question Turn-"+p2name;
    }
    else
    {
        quet="player1"
        document.getElementById("player_question").innerHTML="Question Turn-"+p1name;
    }
    if(anst=="player1")
    {
        anst="player2"
        document.getElementById("player_answer").innerHTML="Answer Turn-"+p2name;
    }
    else
    {
        anst="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn-"+p1name;
    }
    document.getElementById("output").innerHTML="";
}