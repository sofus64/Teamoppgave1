//andre

let div1 = document.getElementById("inventory");
let divHeader = document.getElementById('inventoryHeader')
let inventorystatus = 0;


function toggleinventory() {
  if (inventorystatus == 0) {
    inventorystatus = 1;
    div1.innerHTML = /*HTML*/ `        
        <div onclick="movetochest()" id="inventoryItem1" class="gameItems" style="grid-area: chestItem1;" 
        > </div>
        <div onclick="movetochest()" id="inventoryItem2" class="gameItems" style="grid-area: chestItem2;"></div>
        <div onclick="movetochest()" id="inventoryItem3" class="gameItems" style="grid-area: chestItem3;"></div>
        `;
    divHeader.innerHTML = /*HTML*/`
    <div>Inventory open</div>
    `;
  } else if (inventorystatus == 1) {
    div1.innerHTML = /*HTML*/ `
        <div>Inventory open</div>`;
    inventorystatus = 0;
    divHeader.innerHTML = /*HTML*/`
    <div>Inventory closed</div>
    `;
  }
}
