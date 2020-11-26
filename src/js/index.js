//variables block
const totalFollowers = document.getElementById("total-followers");
const switchContainer = document.getElementById("switch-container");
const cardNumber = [...document.querySelectorAll(".card__number")];
const title = document.querySelector('.header__title')
//const switchinput = document.getElementById('switch-input')


//switchinput.addEventListener("change", themeDark, false);

//variables color:
let totalFollowersNumber = 0;
//funciones
const getRandonInt = (min, max) => Math.floor(Math.random() * (max + -min)) + min;
  

const formatNumber = (number) => {
  if (number > 1999999) return `${Math.floor(number / 1000000)}M`;
  if (number > 19999) return `${Math.floor(number / 1000)}K`;
  return `${number}`;
};

const addPointsNumber = number=>{
    const result = new Intl.NumberFormat('es-ES').format(number);
    return result;
}
const writerNumbers = (format) => {
  cardNumber.forEach((number) => {
    const random = getRandonInt(0,5000)  
    totalFollowersNumber +=random;  
    number.textContent = random;
});
  totalFollowers.textContent = `Total People Who Loves You : ${format ? 
    formatNumber(totalFollowersNumber) : 
    addPointsNumber(totalFollowersNumber)
} `;

}
writerNumbers(false);


/*
//theme darjk
function themeDark(){
  var checked = switchinput.checked;
  if(checked){
    console.log('checkbox1 esta seleccionado');
  }else{
    console.log('checkbox1 esta deseleccionado');
  }
}*/