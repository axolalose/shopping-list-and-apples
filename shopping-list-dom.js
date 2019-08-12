var shopBtnElem = document.querySelector(".shop");
var resetBtnElem = document.querySelector(".reset");
var textItem = document.querySelector(".item");
var textElem = document.querySelector(".text");
//var showText = document.querySelector(".display");
var show = document.querySelector(".display")
var totalBtnElem = document.querySelector(".total")


if (localStorage.getItem("Items")) {
    var itemStored = JSON.parse(localStorage.getItem(["Items"]));
  } else {
    itemStored = "";
  }
var loc = Shoplist(itemStored);
var itemNum = Shoplist(itemStored);

function addCart(){
    var type = textElem.value;
  if (type == "" || type== undefined) {

    return show.innerHTML = "please add item";
  }
  else{
    var btn = document.createElement("li");
    btn.innerHTML = type;
    show.insertBefore(btn, show.childNodes[0]);
    localStorage.setItem("Items", JSON.stringify(loc.getItems()));
  }
}
function upDate(){
    window.location.reload();``
    localStorage.clear();
    resetBtnElem.innerHTML = "";
}

function addTotal(){

}


shopBtnElem.addEventListener("click", addCart);