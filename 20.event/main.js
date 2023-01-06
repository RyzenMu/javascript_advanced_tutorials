//event

//200 type of event in the java script

//click


// declare function

function display(){
    document.querySelector('.para1').innerHTML = "hahahaha";
}



// using addEventListener()
document.querySelector('.btn').addEventListener("click", function(){
    document.querySelector('.para2').innerHTML = "Event listerner";
    document.querySelector('.para2').style.color = "tomato";
    document.querySelector('.para2').style.fontSize = "3em";

});