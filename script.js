const subhanAllahDisplay   =  document.getElementById('subhanAllahDisplay');
const alhamdulillahDisplay =  document.getElementById('alhamdulillahDisplay');
const allahuakberDisplay   =  document.getElementById('allahuakberDisplay');

const subhanAllahIncrementBtn = document.getElementById('subhanAllahIncrementBtn');
const subhanAllahDecrementBtn = document.getElementById('subhanAllahDecrementBtn');

const alhamdulillahIncrementBtn = document.getElementById('alhamdulillahIncrementBtn');
const alhamdulillahDecrementBtn = document.getElementById('alhamdulillahDecrementBtn');

const allahuakberIncrementBtn = document.getElementById('allahuakberIncrementBtn');
const allahuakberDecrementBtn = document.getElementById('allahuakberDecrementBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0 ;
let alhamdulillahInitialValue = 0;
let allahuakberInitialValue = 0;

subhanAllahIncrementBtn.addEventListener('click',function(){
    if(subhanAllahInitialValue == 33){
        return alert("Subhan Allah Complete. Please Fill up another one");
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

subhanAllahDecrementBtn.addEventListener('click',function(){
    if(subhanAllahInitialValue == 0){
        return alert("You can't added negative value");
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

alhamdulillahIncrementBtn.addEventListener('click',function(){
    if(alhamdulillahInitialValue == 33){
        return alert("Subhan Allah Complete. Please Fill up another one");
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

alhamdulillahDecrementBtn.addEventListener('click',function(){
    if(alhamdulillahInitialValue == 0){
        return alert("You can't added negative value");
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

allahuakberIncrementBtn.addEventListener('click',function(){
    if(allahuakberInitialValue == 34){
        return alert("Subhan Allah Complete. Please Fill up another one");
    }
    allahuakberInitialValue += 1;
    allahuakberDisplay.innerText = allahuakberInitialValue;
})

allahuakberDecrementBtn.addEventListener('click',function(){
    if(allahuakberInitialValue == 0){
        return alert("You can't added negative value");
    }
    allahuakberInitialValue -= 1;
    allahuakberDisplay.innerText = allahuakberInitialValue;
})

resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText = 0;   
    alhamdulillahDisplay.innerText = 0;
    allahuakberDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuakberInitialValue = 0;   
})