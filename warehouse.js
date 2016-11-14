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

/**
 *@brief inserts the new Item inserted in the form, it will first check if the input is valid; if it is valid the function will insert the Data of the new Item, otherwise the user is alerted; in either case the form will be cleared
 *@param in string id Id of the form containing the input, it's expected to contain itemName and itemQuantity as fields.
 */
function submitItem(formId)
{
    var formH = document.getElementById(formId);
    //copies the name and quantity inserted as input in the vat name and quantity
    var name = formH.ItemName.value;
	var quantity = formH.ItemQuantity.value;
    if(controlName(name) && controlQuantity(quantity)){
        hideElement(formId);
        insertItem(name,parseInt(quantity));
    }
    else{
        submitAlert();
    }
    //clears the form
    document.getElementById(formId).reset();
    
}

/**
 *@Checks if the name is valid
 *@param name Name that has to be checked
 *@return True if the input is valid, false otherwise.
 */
function controlName(name){
    //checks if name is valid, that is: 
	//  not( name is empty or lenght is 0 or made of white spaces only)
    return !(!name || 0 === name.length || !name.trim());
}

/**
 *@Checks if the quantity is valid
 *@param quantity Quantity that has to be checked
 *@return True if the input is valid, false otherwise.
 */
function controlQuantity(quantity){
    var parsed= parseInt(quantity);
    return ((quantity == parsed) && parsed > 0);
}

/**
 * @brief Tells the user the input was in an incorrect format.
 */
function submitAlert()
{
	alert("The input falls outside the required format. You have to insert a proper string as name and an integer larger than 0 as quantity.");
}

/**
 * @brief Adds name and quantity data to the arrays storing them.
 * @param in string name Name of the item to add.
 * @param in string quantity Quantity of the item to add.
 */
function insertItem(name,quantity)
{
	
}

