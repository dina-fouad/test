'use strict';

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattle = {
  location : 'seattle',
  minCust : 23 ,
  maxCust : 65 ,
  avgCookie : 6.3 ,
  customersPerHour : [],
  total: 0 ,
  getAvg: function(){
     for (let i = 0 ; i < hour.length ; i++){
      let cookie = Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookie);
   this.customersPerHour.push(cookie);
   this.total=this.total+cookie;
  console.log(`${hour[i]} : ${this.customersPerHour[i]}`);
     }
  },

  render: function(){
    const parentEelement = document.getElementById('cookies')
    const sectionElement = document.createElement('section')
    parentEelement.appendChild(sectionElement)

    let h2Element = document.createElement('h2')
    sectionElement.appendChild(h2Element)
    h2Element.textContent= this.location
     
    let ulElement = document.createElement('ul')
    sectionElement.appendChild(ulElement)
    
    for(let i = 0 ; i < hour.length ; i++){
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent= `${hour[i]} : ${this.customersPerHour[i]}`
   
    }

    let totalElement = document.createElement('li')
    ulElement.appendChild(totalElement)
    totalElement.textContent= `total : ${this.total}`
  }
}



let dubai = {
  location : 'dubai',
  minCust : 15 ,
  maxCust : 75 ,
  avgCookie : 8.3 ,
  customersPerHour : [],
  total: 0 ,
  getAvg: function(){
     for (let i = 0 ; i < hour.length ; i++){
      let cookie = Math.floor(getRandomIntInclusive(this.minCust, this.maxCust)*this.avgCookie);
   this.customersPerHour.push(cookie);
   this.total=this.total+cookie;
  console.log(`${hour[i]} : ${this.customersPerHour[i]}`);
     }
  },

  render: function(){
    const parentEelement = document.getElementById('cookies')
    const sectionElement = document.createElement('section')
    parentEelement.appendChild(sectionElement)

    let h2Element = document.createElement('h2')
    sectionElement.appendChild(h2Element)
    h2Element.textContent= this.location
     
    let ulElement = document.createElement('ul')
    sectionElement.appendChild(ulElement)
    
    for(let i = 0 ; i < hour.length ; i++){
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent= `${hour[i]} : ${this.customersPerHour[i]}`
   
    }

    let totalElement = document.createElement('li')
    ulElement.appendChild(totalElement)
    totalElement.textContent= `total : ${this.total}`
  }
}




function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

seattle.getAvg()
seattle.render()


dubai.getAvg()
dubai.render()