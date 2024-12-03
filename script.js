const names = ["Blackacre", "John Doe", "Jane", "Doe", "Doea"]

// function genName(names){

//     const UserName = Math.random() 
// }

const start = document.getElementById("start")

start.addEventListener("click", () => {
    const enteredName = document.getElementById('userName')
    const userName = enteredName.value
    console.log(userName.length)
    const noName = userName.length

    if(noName > 0){
        document.getElementById('registration').style.display = 'none'
        document.getElementById('questions').style.display = 'block'
        questions()

        var count=60;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }
  document.getElementById('timer').innerHTML = count
}
    }
    else{
        alert('Please enter a name before Starting Quiz')         
    }
});





function questions(){
    const question1 = "Correct Spelling of Apple"
    const question2 = "Correct Spelling of Recipe"

    const questionElement = document.getElementById('question');

    questionElement.innerHTML = question1

    const options = document.querySelectorAll('options');

}

nextBtn.addEventListener('click', () => {


});

