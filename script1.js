//frode

//Skisse


//let brukerItems = []

// function testFunksjon (valgtItem) {
//     brukerItems.push(items.valgtItem)
//     updateInventory()
// }

// function updateInventory() {
// for (let i; i < brukerItems.length; i++)
//   inventorySlot + i .src = brukerItems[i]}



// onclick="moveItem(item1)"


  //skisse 2
//  let items = {
//      sverd: "images/sverd",
//      bue: "images/bue",
//      skjold: "images/skjold"
//  }
// let chest1 = document.getElementById(image1)

// let inventorySlots = [image1, image2, image3]
// let chestSlots = [chest1, chest2, chest3]
// let chestIndex = 3;
// let inventoryIndex = 0;

// function moveItem(currentItem) {
//     if (currentItem == 1) {
//         currentItem = 0;
//         //legge current item i inventory slot
//         inventorySlots[inventoryIndex].innerHTML = /*HTML*/`
//         <img src=${items.currentItem}>
//         `
//         //fjerne current item i chest slot
//         chestSlots[chestInde].innerHTML = /*HTML*/`

//         `
//         chestIndex--;
//         inventoryIndex++;
//     } else if (currentItem == 0) {
//         currentItem = 1;
        

//         chestIndex--;
//         inventoryIndex++;
//     }
// }




        //ferdig bit, nå i script.js
// let sword = 0
// let shield = 0
// let helmet = 0

// function moveItem(currentItem) {
//     if (currentItem == 1) {
//             currentItem = 0;

// } else if (currentItem == 0) {
//             currentItem = 1;
// }
//     updateInventory();
// }

// let chest1 = document.getElementById("chestItem1");
// let chest2 = document.getElementById("chestItem2");
// let chest3 = document.getElementById("chestItem3");
// let inventory1 = document.getElementById("inventoryItem1");
// let inventory2 = document.getElementById("inventoryItem2");
// let inventory3 = document.getElementById("inventoryItem3");


// function updateInventory() {
//     if (sword == 1 && inventorystatus == 1) {
//         inventory1.innerHTML = /*HTML*/ `
//         <img src="sword.webp"> `
//         chest1.innerHTML = /*HTML*/ ``
//     } else if (sword == 0 && chestOpen) {
//         chest1.innerHTML = /*HTML*/ `
//         <img src="sword.webp"> `
//         inventory1.innerHTML = /*HTML*/ ``
//     }

//     if (shield == 1 && inventorystatus == 1) {
//         inventory2.innerHTML = /*HTML*/ `
//         <img src="shield.webp"> `
//         chest2.innerHTML = /*HTML*/ ``
//     } else if (shield == 0 && chestOpen) {
//         chest2.innerHTML = /*HTML*/ `
//         <img src="shield.webp"> `
//         inventory2.innerHTML = /*HTML*/ ``
//     }

//     if (sword == 1 && inventorystatus == 1) {
//         inventory3.innerHTML = /*HTML*/ `
//         <img src="sword.webp"> `
//         chest3.innerHTML = /*HTML*/ ``
//     } else if (sword == 0 && chestOpen) {
//         chest3.innerHTML = /*HTML*/ `
//         <img src="sword.webp"> `
//         inventory3.innerHTML = /*HTML*/ ``
//     }
// }