
//console.log(document.widgetConfig.price)
var originalPriceElArray = document.querySelectorAll('*[class*="price-"]')
 // console.log(originalPriceElArray)
 var newPrice = ' '
 
 originalPriceElArray.forEach((priceEl)=>{

//console.log(priceEl)
   var price = priceEl.textContent.split(' ')[0]
   //console.log(price)
   document.widgetConfig.config.forEach((configPrice)=> {
    //console.log(configPrice)
       if (configPrice.endPrice != null) {
        if(price >= configPrice.startPrice && price <= configPrice.endPrice){
            //console.log('inside first if condition:price >= configPrice.startPrice && price <= configPrice.endPrice')
            priceEl.style.color = 'black';
            newPrice = price - (price * (configPrice.discount/100))
            console.log(newPrice)
            priceEl.innerHTML = price.strike() + " $  <br/> <p style='color:red;'> After Discount <br/>" + newPrice + " $ </p>"
        }
    }
       else  {

           if(price >= configPrice.startPrice){
            //console.log('inside else if price >= configPrice.startPrice')
            priceEl.style.color = 'black';
            newPrice = price - (price * (configPrice.discount/100))
            priceEl.innerHTML = price.strike() + " $ <br/>  <p style='color:red;'> After Discount <br/>" + newPrice + " $ </p>"
           } 
    }
   })
   console.log('end of firt price element ')
 }) 
     
  

  