let tabColors = [
    "#ff0000", "#ff4500", "#ffa500", "#ffff00", "#9acd32", "#90ee90",
    "#008000", "#40e0d0", "#40e0d0", "#87cefa", "#1e90ff", "#0000ff",
    "#00008b", "#4b0082", "#4b0082", "#ee82ee", "#ee82ee", "#d3d3d3",
    "#808080", "#000000", "#ffffff"
];

let casechecked = 1239
let currentColor = 'white'

let sourisEnfonce = false;

document.body.onmousedown = function() { sourisEnfonce = true ; } 
document.body.onmouseup = function() { sourisEnfonce = false ; }


// recuperation du button
let boutton = document.getElementsByTagName('button')[0]

let cardOfColorsItem = document.getElementsByClassName('color_card')[0]
let cardOfCheckedItem = document.getElementsByClassName('right_part')[0]

for (const key in tabColors) {
   let colorItem = document.createElement('div')
   colorItem.classList.add('color_item')
   colorItem.setAttribute('style' , `background-color:${tabColors[key]} ; width : 80px ; height:80px ; border-radius:.5px`)
   cardOfColorsItem.appendChild(colorItem)
}

for (let index = 0; index < casechecked; index++) {
    let checkedItem = document.createElement('div')
    checkedItem.classList.add('checked_item')
    checkedItem.setAttribute('style' , `background-color:white ; width : 20px ; height:30px ;`)
    cardOfCheckedItem.appendChild(checkedItem)
}

// recuperation de tout les couleurs 
let allColors = document.querySelectorAll('.color_item')

allColors.forEach((el)=>{
    el.addEventListener('click' , function(event){
        currentColor = event.target.style.backgroundColor
    })
})


// recuperation de toutes les cases à cocher
let allCaseChecked = document.querySelectorAll('.checked_item')
allCaseChecked.forEach((el)=>{
    el.addEventListener('click' , function(event){
        event.target.style.backgroundColor = currentColor
    })




    el.addEventListener("mousedown", function(event){
        event.target.style.backgroundColor = currentColor;
    });

    // au survol de la souris
    el.addEventListener("mouseover", function(event){
        if (sourisEnfonce && currentColor != null) event.target.style.backgroundColor = currentColor;
    });
})

boutton.onclick = () => {
    allCaseChecked.forEach((el)=>{
        el.style.backgroundColor = 'white'
    })
    currentColor = 'white'
}


