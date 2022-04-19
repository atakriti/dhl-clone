function shipping() {
    let element = document.getElementById("shipping-container");
    let elementDelivery = document.getElementById("delivery-container");

    if (element.style.visibility == "hidden") {
        element.style.visibility = "visible";
        element.style.transform = "translate(0)";
        elementDelivery.style.visibility = "hidden"

    } else {
        element.style.visibility = "hidden";
         
    }
}
// ============ Delivery =============
function delivery() {
    let element = document.getElementById("delivery-container");
    let elementShipping = document.getElementById("shipping-container");
    if (element.style.visibility == "hidden") {
        element.style.visibility = "visible";
        element.style.transform = "translate(0)";
        elementShipping.style.visibility = "hidden"
    } else {
        element.style.visibility = "hidden";     
    }
}




















// shipping - container.style.visibility = "hidden";
// let shipping = () => {
//   if (shipping-container.style.visibility == "hidden") {
//     shipping-container.style.visibility = "visible";
  
//   } else {
//     setTimeout(() => (shipping-container.style.visibility = "hidden"), 300);
//   }
// };


// shippingContainer.style.visibility = "hidden";
// //  will be called any time you click on the btn
// const shipping = () => {
//   if (shippingContainer.style.visibility == "hidden") {
//     shippingContainer.style.animationName = "slide";
//     shippingContainer.style.visibility = "visible";
//   } else {
//     // shippingContainer.style.animationName = "slide";
//     setTimeout(() => (shippingContainer.style.visibility = "hidden"), 100);
//   }
// };