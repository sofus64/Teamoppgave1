let divHeader = document.getElementById("inventoryHeader");
let div1 = document.getElementById("inventory");
let inventorystatus = 0;
let chest1 = ""
let chest2 = ""
let chest3 = ""
let inventory1 = ""
let inventory2 = ""
let inventory3 = ""
let chestData = ""
let inventoryData = ""
let sword = 0;
let shield = 0;
let helmet = 0;

let chestDiv = document.getElementById("chestInventory");

let chestOpen = false;

createChestData();
createInventoryData();
createData();
toggleinventory();
updateInventory();




function createData() {
    chest1 = document.getElementById("chestItem1");
    chest2 = document.getElementById("chestItem2");
    chest3 = document.getElementById("chestItem3");
    inventory1 = document.getElementById("inventoryItem1");
    inventory2 = document.getElementById("inventoryItem2");
    inventory3 = document.getElementById("inventoryItem3");
}

function createChestData() {
    chestData =`
    <div id="chestItem1" class="gameItems" onclick="moveItem('sword')"></div>
    <div id="chestItem2" class="gameItems" onclick="moveItem('shield')"></div>
    <div id="chestItem3" class="gameItems" onclick="moveItem('helmet')"></div>
`
}

function createInventoryData() {
    inventoryData =`
    <div onclick="moveItem('sword')" id="inventoryItem1" class="gameItems" style="grid-area: chestItem1;"></div>
    <div onclick="moveItem('shield')" id="inventoryItem2" class="gameItems" style="grid-area: chestItem2;"></div>
    <div onclick="moveItem('helmet')" id="inventoryItem3" class="gameItems" style="grid-area: chestItem3;"></div>
    `
}

function moveItem(currentItem) {
  if (currentItem == 'sword') {
    if (sword == 1 && chestOpen) {
        sword = 0
    } else if (sword == 0 && inventorystatus == 1) {sword = 1}
  } 

  if (currentItem == 'shield') {
    if (shield == 1 && chestOpen) {
        shield = 0
    } else if (shield == 0 && inventorystatus == 1){shield = 1}
  } 

  if (currentItem == 'helmet') {
    if (helmet == 1 && chestOpen) {
        helmet = 0
    } else if (helmet == 0 && inventorystatus == 1){helmet = 1}
  } 
  updateInventory();
}

function updateInventory() {
    createData()

    
    console.log("run")

  if (sword == 1 && inventorystatus == 1) {
    inventory1.innerHTML = /*HTML*/ ` 
        <img src="img/sword.webp"> `;
    chest1.innerHTML = /*HTML*/ ``;
    console.log("sverd i inventory");
  } else if (sword == 0 && chestOpen) {
    chest1.innerHTML = /*HTML*/ `
        <img src="img/sword.webp"> `;
    inventory1.innerHTML = /*HTML*/ ``;
    console.log("sverd i kiste");
  }

  if (shield == 1 && inventorystatus == 1) {
    inventory2.innerHTML = /*HTML*/ `
        <img src="img/shield.webp"> `;
    chest2.innerHTML = /*HTML*/ ``;
    console.log("skjold i inv")
  } else if (shield == 0 && chestOpen) {
    chest2.innerHTML = /*HTML*/ `
        <img src="img/shield.webp"> `;
    inventory2.innerHTML = /*HTML*/ ``;
    console.log("shield i kiste")
  }

  if (helmet == 1 && inventorystatus == 1) {
    inventory3.innerHTML = /*HTML*/ `
        <img src="img/helmet.webp"> `;
    chest3.innerHTML = /*HTML*/ ``;
    console.log("hjelm i inventory");
  } else if (helmet == 0 && chestOpen) {
    chest3.innerHTML = /*HTML*/ `
        <img src="img/helmet.webp"> `;
    inventory3.innerHTML = /*HTML*/ ``;
    console.log("hjelm i kiste")
  }
  console.log(shield)
  console.log(sword)
  console.log(helmet)
}


function toggleinventory() {
    if (inventorystatus == 0) {
      inventorystatus = 1;
  
      div1.innerHTML = /*HTML*/ `        
          ${inventoryData}
          `;
      
      divHeader.innerHTML = /*HTML*/ `
          <div>Inventory open</div>
          `;
    } else if (inventorystatus == 1) {
      div1.innerHTML = /*HTML*/ `
          `;
      inventorystatus = 0;
      divHeader.innerHTML = /*HTML*/ `
      <div>Inventory closed</div>
      `;
    }
    updateInventory();
  }

function openChest() {
  if (!chestOpen) {
    chestDiv.innerHTML = /*HTML*/ `
    ${chestData}
    `;
    chestOpen = true;
    
  } else if (chestOpen) {
    chestDiv.innerHTML = /*HTML*/ `
    `;
    chestOpen = false;
  }
  updateInventory();
}

// function moveItem(currentItem) {
//   // Use '===' for strict equality check
//   if (currentItem === 1) {
//     return 0;
//   } else if (currentItem === 0) {
//     return 1;
//   }
// }