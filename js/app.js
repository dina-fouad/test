'use strict';

const form = document.getElementById('form');
const table = document.getElementById('table');

function Cars (fname , lname , email , birthday , img ){
     this.fname = fname
     this.lname = lname
     this.email = email
     this.birthday = birthday
     this.img = `img/${img}.jpg`
     Cars.all.push(this)
     
}

Cars.all=[]

form.addEventListener('submit' , getCar)
function getCar (event){
    event.preventDefault();
    let fname = event.target.fname.value;
    let lname = event.target.lname.value;
    let email = event.target.email.value;
    let birthday = event.target.birthday.value;
    let img = event.target.img.value;
    new Cars(fname , lname , email , birthday , img)
    // console.log(fname , lname , email , birthday , img)
    
   
           render();
           saveData();

}


function render (){
    table.innerHTML=""
    let head = document.createElement('tr')
    table.appendChild(head)

    let th1 = document.createElement('th')
    head.appendChild(th1)
    th1.textContent = "First name"

    let th2 = document.createElement('th')
    head.appendChild(th2)
    th2.textContent = "last name"

    let th3 = document.createElement('th')
    head.appendChild(th3)
    th3.textContent = "Email"

    let th4 = document.createElement('th')
    head.appendChild(th4)
    th4.textContent = "Date of Birth"  
    
    let th5= document.createElement('th')
    head.appendChild(th5)
    th5.textContent = "Image"


    for(let i = 0 ; i<Cars.all.length ; i++){
    let trE =document.createElement('tr')
    table.appendChild(trE)

     let td1 = document.createElement('td')
     trE.appendChild(td1)
     td1.textContent=`${Cars.all[i].fname}`
      
     
     let td2 = document.createElement('td')
     trE.appendChild(td2)
     td2.textContent=`${Cars.all[i].lname}`

     let td3 = document.createElement('td')
     trE.appendChild(td3)
     td3.textContent=`${Cars.all[i].email}`

     let td4 = document.createElement('td')
     trE.appendChild(td4)
     td4.textContent=`${Cars.all[i].birthday}`

     let td5 = document.createElement('img')
     trE.appendChild(td5)
     td5.src=`${Cars.all[i].img}`

    }
}


function clearTable(){
    // table.innerHTML="";
    Cars.all=[];
    render();
}



function saveData() {

    let data=JSON.stringify(Cars.all);
    localStorage.setItem('cars',data);
  }
  
  
  function getDate() {
    JSON.parse(localStorage.getItem('cars'));
  
  
  }
  
  getDate();