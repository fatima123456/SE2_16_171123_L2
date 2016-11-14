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

/**
 * @brief Reads items and quantities from the table, and then put them into itemNames and itemQuantities.
 * @param out [] names Storing item names as an array of strings.
   @param out [] quantities Storing item quantities as an array of ints.
 */
function readTableItems(names,quantities)  
{
	// saving the rows of the tables in the firstRow and secondRow variables
	var firstRow = tableHandle.rows[0];
	var secondRow = tableHandle.rows[1];
	// loop to save the information in the table in the two lists expressed as parameters. Note that for the quantities we have to transform them into integers
	for(var i=0;i<tableHandle.rows[0].cells.length;i++)
	{
		names.push(firstRow.cells[i].innerText);
		quantities.push(parseInt(secondRow.cells[i].innerHTML));
	}
}