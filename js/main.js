var elControl = document.querySelector('.js-control')
var elForm = document.querySelector('.js-form')
var elInput = document.querySelector('.js-input')
var elBtn1 = document.querySelector('.btn1')
var elBtn2 = document.querySelector('.btn2')
var elBtn3 = document.querySelector('.btn3')
var elTitle = document.querySelector('.js-title')





elControl.addEventListener('click',function(evt){
    if(evt.target.matches('.btn1')){
        elBtn1.classList.add('h6')
        elBtn2.classList.remove('h6')
        elBtn3.classList.remove('h6')

        elTitle.textContent =  'POSITIVE'
    };
    if(evt.target.matches('.btn2')){
        elBtn2.classList.add('h6')
        elBtn1.classList.remove('h6')
        elBtn3.classList.remove('h6')


        elTitle.textContent =  'NEGATIVE'
    };
    if(evt.target.matches('.btn3')){
        elBtn3.classList.add('h6')
        elBtn1.classList.remove('h6')
        elBtn2.classList.remove('h6')

        elTitle.textContent =  'NETURAL'
    };
})
elForm.addEventListener('submit',function(evt){
    evt.preventDefault();
    if(elInput.value == 1){
        elTitle.textContent =  'POSITIVE'
    }
    if(elInput.value == 2){
        elTitle.textContent =  'NEGATIVE'
    }
    if(elInput.value == 3){
        elTitle.textContent =  'NETURAL'
    }
    if(elInput.value > 3 || elInput.value < 0){
        elTitle.textContent =  'NOT FONT'
    }


    elBtn1.classList.remove('h6')
    elBtn2.classList.remove('h6')
    elBtn3.classList.remove('h6')
    elInput.value = ''

})

