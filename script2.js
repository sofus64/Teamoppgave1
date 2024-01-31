//frank

let chestDiv = document.getElementById('chestInventory');

let chestOpen = false;

function openChest(){

if(!chestOpen){

    chestDiv.innerHTML = /*HTML*/`
    
    <div id="chestItem1" class="gameItems" onclick="toggleItemState(inventory, equipment)">Item 1</div>
    <div id="chestItem2" class="gameItems" onclick="toggleItemState(inventory, equipment)">Item 2</div>
    <div id="chestItem3" class="gameItems" onclick="toggleItemState(inventory, equipment)">Item 3</div>
    `;
    chestOpen = true;
}
else if(chestOpen){

    chestDiv.innerHTML = /*HTML*/`
    `;
    chestOpen = false;
}

}