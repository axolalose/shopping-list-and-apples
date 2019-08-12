function Shoplist(){
    var itemsListed = {}  
    var counter = 0;
    var storedItems = "";
  
    //return itemsListed;

    function addItems(Items){
        var showItems = []
        return showItems; 
    }

    function count(){
        return counter++
    }
    
    function listShop(list) {
        storedItems = list;
      }
    
      function getItems() {
        return storedItems;
      }
      
      return {
          listShop,
          addItems,
          count,
          getItems


      }

}
















 


















