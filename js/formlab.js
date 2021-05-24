'use strict' ;

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Locations(city , minCust , maxCust , avgCookie) {
    
this.city=city
this.minCust= minCust
this.maxCust=maxCust
this.avgCookie=avgCookie
this.customersPerHour = []
this.total = 0


}



Locations.prototype.getAvg = function (){
    for(let i = 0 ; i < hour.length ; i++){
    let cookie = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookie)
    this.customersPerHour.push(cookie)
    this.total = this.total + cookie
    
    }
}

const data1 = document.getElementById('datatable')


Locations.prototype.render = function(){
   


   let tr1Element = document.createElement('tr')
   data1.appendChild(tr1Element)


  
   let tdBody = document.createElement('td')
   tr1Element.appendChild(tdBody)
   tdBody.textContent= this.city

  for(let i = 0 ; i<hour.length ; i++){
    let tdBody = document.createElement('td');
    tr1Element.appendChild(tdBody);
    tdBody.textContent = this.customersPerHour[i];
 
  }
   
  let td1Body = document.createElement('td')
   tr1Element.appendChild(td1Body)
   td1Body.textContent= this.total
  
 
}

function heading (){
    let head = document.createElement('tr')
    data1.appendChild(head)

    let thElement = document.createElement('th')
    head.appendChild(thElement)
    thElement.textContent= 'location'
    

    for(let i = 0 ; i<hour.length ; i++){
    let thElement = document.createElement('th')
    head.appendChild(thElement)
    thElement.textContent= hour[i]
    }

    let th1Element = document.createElement('th')
    head.appendChild(th1Element)
    th1Element.textContent= 'Daily Location Total'
}




heading();





let seattle = new Locations('seattle', 23 , 65 , 6.5)
let dubai = new Locations('dubai', 15 , 24 , 8.5)
let paris = new Locations('paris', 34 , 55 , 5.5)
let tokyo = new Locations ('tokyo' , 44 , 55 , 3.5)



seattle.getAvg()
dubai.getAvg()
paris.getAvg()
tokyo.getAvg()


seattle.render()
 dubai.render()
paris.render()
tokyo.render() 


    
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }



function totalCitiesHours(){
    let allCities = [];
    for(let i = 0 ; i< hour.length ; i++){

let allCitiesHour = seattle.customersPerHour[i] + dubai.customersPerHour [i]+ paris.customersPerHour[i] + tokyo.customersPerHour[i]
allCities.push(allCitiesHour);

}
return allCities
}
let totalOftotal = seattle.total + dubai.total + paris.total + tokyo.total


function footerRender() {

    let tfoot = document.createElement('tr');
   data1.appendChild(tfoot);

    let tdEle = document.createElement('td');
    tdEle.textContent = 'Total';
    tfoot.appendChild(tdEle);

    for (let i = 0; i < hour.length; i++) {
        let tdEle = document.createElement('td');
        tdEle.textContent = totalCitiesHours()[i];
        tfoot.appendChild(tdEle);
    }
    let td3Ele= document.createElement('td');
    td3Ele.textContent = totalOftotal;
   tfoot.appendChild(td3Ele);
}

footerRender();




const locForm = document.getElementById('locationForm')

locForm.addEventListener("submit", eButton);

function eButton (event){
event.preventDefault()
let city = event.target.name.value
let minCust = event.target.mix.value
let maxCust = event.target.max.value
let avgCookie = event.target.avg.value

let newLocation = new Locations (city , minCust , maxCust , avgCookie)

let rowCount = data1.rows.length;
data1.deleteRow(rowCount - 1)
newLocation.getAvg()
newLocation.render()
locForm.reset()
footerRender()
}
