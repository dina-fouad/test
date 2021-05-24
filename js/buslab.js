'use strict';

let arrayImgs = [

    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'
];

let clickNumber = 0 ;
let leftImgIndex = 0;
let rightImgIndex = 0;

function Images (name){
this.name = name
this.img = `./img-Amman/${name}.jpg`;
this.shown=0 ;
this.click =0 ;
Images.all.push(this);
}

Images.all=[];

const imageSection = document.getElementById('imageSection')
const leftImage = document.getElementById('leftImage')
const rightImage = document.getElementById('rightImage')

const result= document.getElementById('result')

const listResult= document.getElementById('listResult')


for (let i = 0 ; i < arrayImgs.length ; i++){
let newImgs = new Images(arrayImgs[i])
}


function renderImg (){
  let rightIndex= getRandomIntInclusive(0, arrayImgs.length-1)
  let leftIndex= getRandomIntInclusive(0, arrayImgs.length-1)

  if (leftIndex === rightIndex){
    leftIndex= getRandomIntInclusive(0, arrayImgs.length-1)
  }

  leftImage.src = Images.all[leftIndex].img
  rightImage.src = Images.all[rightIndex].img

  let leftImgIndex = leftIndex
  let rightImgIndex = rightIndex

  Images.all[leftIndex].shown++
  Images.all[rightIndex].shown++
    
}

renderImg()

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


  imageSection.addEventListener("click" , clicker)

  function clicker (event){
 if ((event.target.id== "leftImage" || event.target.id== "rightImage"  ) && clickNumber < 15) {
     clickNumber++


     if(event.target.id== "leftImage"){
         Images.all[leftImgIndex].click++
     }


     
     if(event.target.id== "rightImage"){
        Images.all[rightImgIndex].click++
    }


    renderImg()
 } else
 console.log(Images.all)

  }
  function list (event){
    let ulElement = document.createElement('ul')
    listResult.appendChild(ulElement)


    for(let i  = 0 ; i < arrayImgs.length ; i++){
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent = `${all.Images.name} had ${all.Images.shown}`
    }
    result.removeEventListener('click' , list)

}
result.addEventListener('click' , list)