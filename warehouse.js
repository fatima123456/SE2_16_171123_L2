//list of the items' names
var itemNames = [];

//list of the items' quantities
var itemQuantities = [];
// the i-th item has itemNames[i] name and itemQuanties[i] quantity

//maximum storage value
var maxStorageValue;

//a variable to handle the information about the items: the first row contains the names and the second the quantities
var tableHandle = document.getElementById("itemsNamesQuantities");

/**
 * @brief It sets the visibility property of the html element to visible.
 * @param in string id Id of the element to show.
 */
function showElement(id)
{
	document.getElementById(id).style.visibility = "visible";
}

/**
 * @brief It sets the visibility property of the html element to hidden.
 * @param in string id Id of the element to show.
 */
function hideElement(id)
{
	document.getElementById(id).style.visibility = "hidden";
}