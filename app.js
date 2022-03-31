function updateProductNumber(product, isIncreasing, price){
    const productInput = document.getElementById(product + "-number");
    let productNumber = parseInt(productInput.value);
    if(isIncreasing == true){
        productNumber = productNumber + 1;
    }
    else if(productNumber > 0) {
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;
    //Update Product Total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;

}
//Handle Phone increase & decrease events
document.getElementById("phone-plus").addEventListener("click", function(){
    updateProductNumber('phone', true, 1219);
});
document.getElementById("phone-minus").addEventListener("click", function(){
    updateProductNumber('phone', false, 1219);
});


//Handle Case increase & decrease events
document.getElementById("case-plus").addEventListener("click", function(){
    updateProductNumber('case', true, 59);
});
document.getElementById("case-minus").addEventListener("click", function(){
    updateProductNumber('case', false, 59);
})