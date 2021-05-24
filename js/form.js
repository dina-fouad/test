// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

'use strict';
function Cat (name ,breed, likes , img , isGoodWithCats , isGoodWithDogs , isGoodWithKids){
    this.name = name
    this.breed = breed
    this.age =  0 
    this.likes = likes
    this.img = img
    this.isGoodWithCats = isGoodWithCats
    this.isGoodWithDogs = isGoodWithDogs
    this.isGoodWithKids= isGoodWithKids
    

}

Cat.prototype.getAge = function(min , max){
    this.age = getRandomIntInclusive(min, max)
}


Cat.prototype.render = function(){

const parentElement = document.getElementById('cookies')
const sectionElement = document.createElement('section')
parentElement.appendChild(sectionElement)

let h2Element = document.createElement('h2')
sectionElement.appendChild(h2Element)
h2Element.textContent = this.name

let pElement = document.createElement('p')
sectionElement.appendChild(pElement)
pElement.textContent = `its name is ${this.name} and its age is  ${this.age} months old `

let tableElement = document.createElement('table')
sectionElement.appendChild(tableElement)

let tr1Element = document.createElement('tr')
tableElement.appendChild(tr1Element)

let headerArr =['is good with cats' , 'is good with kids' , 'is good with dogs']
for(let i=0 ; i < headerArr.length ; i++){
let thElement = document.createElement('th')
tr1Element.appendChild(thElement)
thElement.textContent = headerArr[i]
}

let tr2Element = document.createElement('tr')
tableElement.appendChild(tr2Element)

let bodyArr = [ this.isGoodWithCats , this.isGoodWithDogs , this.isGoodWithKids]
for (let i = 0 ; i < bodyArr.length ; i++ ){
let tdBody = document.createElement('td')
tr2Element.appendChild(tdBody)
tdBody.textContent = bodyArr[i]
}

let imgElement = document.createElement('img')
sectionElement.appendChild(imgElement)
imgElement.src = this.img

let ulElement = document.createElement('ul')
sectionElement.appendChild(ulElement)

for(let i = 0 ; i< this.likes.length ; i++){
let liElement = document.createElement('li')
ulElement.appendChild(liElement)
liElement.textContent = this.likes[i]
}
}

let franki = new Cat ('franki', 'british', ['napping' , 'chaising'] , '' , false , true , false)
let bors = new Cat ('borse' ,'turkish', ['napping' , 'chasing'],'' , false , true , false )

franki.getAge(3,4)
bors.getAge(6,8)

franki.render()
bors.render()

console.log(franki)
console.log(bors)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  catForm.addEventListener("submit", eventButton);

  function eventButton (event){
    event.preventDefault();
    let name = event.target.name.value
    let breed = event.target.breed.value
    let likes = event.target.likes.value.split(',')
    let kids = event.target.good1.checked
    let dogs = event.target.good2.checked
    let cats = event.target.good3.checked
   
    let newCats = new Cat (name , breed , likes ,'', kids , dogs , cats)
    newCats.render()
    newCats.getAge()
    
  }