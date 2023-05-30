const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');


document.getElementById('eight-memory').addEventListener('click' , function(){
    memoryCost.innerText = 0;
    getTheAllValue();
})
document.getElementById('sixteen-memory').addEventListener('click' , function(){
    memoryCost.innerText = 180;
    getTheAllValue();
})
document.getElementById('single-storage').addEventListener('click', function(){
    storageCost.innerText = 0;
    getTheAllValue();
})
document.getElementById('double-storage').addEventListener('click',function(){
    storageCost.innerText = 100;
    getTheAllValue();
})
document.getElementById('tripple-storage').addEventListener('click' , function(){
    storageCost.innerText = 180;
    getTheAllValue();
})
document.getElementById('free-delivery').addEventListener('click' ,function(){
    deliveryCost.innerText = 0;
    getTheAllValue();
})
document.getElementById('paid-delivery').addEventListener('click' , function(){
    deliveryCost.innerText = 30;
    getTheAllValue();
})

function getTheAllValue(){
    const memoryValue = parseInt (memoryCost.innerText);
    const storageValue = parseInt(storageCost.innerText);
    const deliveryValue = parseInt(deliveryCost.innerText);
    const total = memoryValue + storageValue + deliveryValue + 1219;
    document.getElementById('total-cost').innerText = total;
    document.getElementById('total-price').innerText = total;
}

document.getElementById('button-tag').addEventListener('click' , function(){
    const promoCode = document.getElementById('input-tag');
    const promoValue = promoCode.value;
   const updatePrice = document.getElementById('total-price');
   const finalPrice = parseInt (updatePrice.innerText);


   if(promoValue == 'pranta dev'){
    let promoApply = finalPrice - ((finalPrice/100)*30);
    updatePrice.innerText = promoApply;  
   }
   else{
    return 0;
   }
   promoCode.value = ' ';
})