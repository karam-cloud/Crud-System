

var productNameInput = document.getElementById("Prouduct_Name");
var prouductPriceInput = document.getElementById("Prouduct_Price");
var prouductCatugaryInput = document.getElementById("Prouduct_Catugary");
var prouductDescriptionInput = document.getElementById("Prouduct_Description");
var prouductImageInput = document.getElementById("Prouduct_Image");
var productSearchInput = document.getElementById("searchInput");
var addProductBtn = document.getElementById("addProduct");
var updateproductBtn = document.getElementById("updateProduct");


// imgs/canon-


var productsContainer= [];
if (localStorage.getItem("products") !== null) {
    productsContainer = JSON.parse(localStorage.getItem("products"));
    display();
}
function addProduct() {
    // console.log(prouductImageInput.files[0].name);
    // console.log(prouductImageInput.value);
    var product = {
        code : productNameInput.value ,
        "price" :prouductPriceInput.value ,
        "catg" : prouductCatugaryInput.value ,
        "desc" : prouductDescriptionInput.value ,
        "image" : `imgs/${prouductImageInput.files[0]?.name}`,
    }
    productsContainer.push(product);
    localStorage.setItem("products" ,JSON.stringify(productsContainer) );
    display();
    clearInputValue() ;
}

function clearInputValue() {
    productNameInput.value = null ;
    prouductPriceInput.value = null;
    prouductCatugaryInput.value =null ;
    prouductDescriptionInput.value = null;
    prouductImageInput.value = null ;
}
function display() {
    var cartona = ``;
    for (let i = 0; i < productsContainer.length; i++) {
        cartona +=` 
        <div class="col-md-2 my-2  p-2 rounded-4">
            <div class=" display  ">
                <img src="${productsContainer[i].image}" class="w-100" alt="photo to camera">
                <h2 class =' text-center h4'> ${productsContainer[i].code} </h2>
                <h3 class="h6" > <span > Price : </span>  ${productsContainer[i].price}</h3>
                <h4  class="h6" > <span class =" class="h4"> catg : </span>   ${productsContainer[i].catg}</h4>
                <h5 class ='h6' ><span > Des :  </span>  ${productsContainer[i].desc}</h5>
                
                <button onclick = "deleteProduct(${i})" class="btn btn-outline-danger w-100 ">delete</button>
                <button onclick="setFormForUpdate(${i})" class="btn btn-outline-info w-100 ">update</button>
            </div>
        </div>`
        
    }
    document.getElementById("displayhere").innerHTML= cartona;
}
function deleteProduct(indexDeleted) {
    productsContainer.splice(indexDeleted,1);
    display();
    localStorage.setItem("products" ,JSON.stringify(productsContainer) );
}
// console.log(productsContainer[0].code.toLowerCase().includes(nems.toLowerCase()));
function searchInput() {
    var term = productSearchInput.value;
    var cartona = ``;
    for (let i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].code.toLowerCase().includes(term.toLowerCase())) {
                console.log(i);
                console.log(productsContainer[i]);
            cartona +=` 
                <div class="col-md-2  p-2 rounded-4">
                    <div  class="display ">
                        <img src="${productsContainer[i].image}" class="w-100" alt="photo to camera">
                        <h3 class =' text-center'>${productsContainer[i].code}</h3>
                        <h3 class= "h6"> <span c"> Price : </span>  ${productsContainer[i].price}</h3>
                        <h4 class= "h6"<span > catg : </span>   ${productsContainer[i].catg}</p>
                        <h5 class= "h6"><span "> Des :  </span>  ${productsContainer[i].desc}</h5>
                        <button onclick = "deleteProduct(${i})" class="btn btn-outline-danger w-100 ">delete</button>
                        <button onclick="setFormForUpdate(${i})" class="btn btn-outline-info w-100 ">update</button>
                    </div>
                </div>`
        
    }
    document.getElementById("displayhere").innerHTML= cartona;
}  
        }

let valuetoneeduse;
function setFormForUpdate(indexInput) {
    valuetoneeduse = indexInput;
    addProductBtn.classList.add('d-none');
    updateproductBtn.classList.remove('d-none');
    productNameInput.value = productsContainer[indexInput].code ;
    prouductPriceInput.value=  productsContainer[indexInput].price;
    prouductCatugaryInput.value = productsContainer[indexInput].catg ;
    prouductDescriptionInput.value = productsContainer[indexInput].desc ;

}

function updateProduct() {
    productsContainer[valuetoneeduse].code = productNameInput.value;
    productsContainer[valuetoneeduse].price =prouductPriceInput.value;
    productsContainer[valuetoneeduse].catg = prouductCatugaryInput.value 
    productsContainer[valuetoneeduse].desc= prouductDescriptionInput.value
    display();
    localStorage.setItem("products" ,JSON.stringify(productsContainer) );
    clearInputValue();
    addProductBtn.classList.remove('d-none');
    updateproductBtn.classList.add('d-none');
    console.log("hello iam working");

    
}

function validateInputs(element) {
    // let myStr = Rejex.test(productNameInput.value) ;
    let Rejex = {
        Prouduct_Name:/^[A-Z][a-z]{2,8}$/,
        Prouduct_Price: /^[1-9][0-9][0-9]$/,
        Prouduct_Catugary : /^(Mobile|Laptop|Tshirt|Lenovo|Nokia|Samsung|Camera| Iphone|T-shirt)$/,
        Prouduct_Description: /^.{4}$/,
    }
    if (Rejex[element.id].test(element.value) == true)
    {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        // element.nextElementSibling.classList.remove("d-block");
        // element.nextElementSibling.classList.add("d-none");
        element.nextElementSibling.classList.replace("d-block", "d-none");

        
    }else{
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        // element.nextElementSibling.classList.add("d-block");
        // element.nextElementSibling.classList.remove("d-none");
        element.nextElementSibling.classList.replace("d-none","d-block");

                    // console.log(element.nextElementSibling);

    }
}

























