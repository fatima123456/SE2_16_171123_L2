//  MODEL-MODEL-MODEL-MODEL-MODEL-MODEL-MODEL-MODEL-MODEL-MODEL-MODEL-MODEL

//list of the items' names
var itemNames = [];

//list of the items' quantities
var itemQuantities = [];
// the i-th item has itemNames[i] name and itemQuanties[i] quantity

//maximum storage value initialized to 30
var maxStorageValue=30;

//a variable to handle the information about the items: the first row contains the names and the second the quantities
var tableHandle = document.getElementById("itemsNamesQuantities");


//VIEW-VIEW-VIEW-VIEW-VIEW-VIEW-VIEW-VIEW-VIEW-VIEW-VIEW-VIEW-VIEW-VIEW

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
 * @brief Tells the user the input was not in the proper format.
 */
function submitAlert()
{
	alert("The input falls outside the required format. You have to insert a proper string as name and an integer larger than 0 as quantity.");
}

/**
 * @brief Tells the user the input for the maximum storage was not in the proper format.
 */
function wrongStorageAlert()
{
	alert("The input falls outside the required format. You have to insert a proper integer larger than 0 as max storage.");
}

/**
 * @brief Warns the user that the total number of items is greater than the max storage capacity.
 */
function maxStorageAlert()
{
	alert("The number of the items ("+ sum(itemQuantities)
		  + ") is greater than the maximum storage value(" + maxStorageValue + ").");
}


//  CONTROL-CONTROL-CONTROL-CONTROL-CONTROL-CONTROL-CONTROL-CONTROL-CONTROL

/**
 * @brief Reads items and quantities from the table, and then put them into itemNames and itemQuantities.
 * @param out [] names Storing item names as an array of strings.
   @param out [] quantities Storing item quantities as an array of ints.
 */
function readTable()  
{
	// saving the rows of the tables in the firstRow and secondRow variables
	var firstRow = tableHandle.rows[0];
	var secondRow = tableHandle.rows[1];
	// loop to save the information in the table in the two lists expressed as parameters. Note that for the quantities we have to transform them into integers
	for(var i=0;i<tableHandle.rows[0].cells.length;i++)
	{
		itemNames.push(firstRow.cells[i].innerText);
		itemQuantities.push(parseInt(secondRow.cells[i].innerHTML));
	}
}

/**
 *@brief inserts the new Item inserted in the form, it will first check if the input is valid; if it is valid the function will insert the Data of the new Item, otherwise the user is alerted; in either case the form will be cleared
 *@param in string id Id of the form containing the input, it's expected to contain itemName and itemQuantity as fields.
 */
function submitItem(formId)
{
    var formH = document.getElementById(formId);
    //copies the name and quantity inserted as input in the var name and quantity
    var name = formH.ItemName.value;
	var quantity = formH.ItemQuantity.value;
    //controls the validity of the name and the quantity and if they are valid insert the new item in the tabella
    if(controlName(name) && controlQuantity(quantity)){
        hideElement(formId);
        insertItem(name,parseInt(quantity));
    }
    //if the data inserted are not valid the user will be alerted
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
 * @brief Adds name and quantity data to the arrays storing them.
 * @param in string name Name of the item to add.
 * @param in string quantity Quantity of the item to add.
 */
function insertItem(name,quantity)
{
	var index = itemNames.indexOf(name);
    
    //if the item is not already in the table(index==-1) then add another column in the table, otherwise just update its quantity
    if(index==-1)
		{
			itemNames.push(name);
			itemQuantities.push(quantity);
			
            //get the first row of the table, add a new cell and then put the name in it
            var nRow = tableHandle.rows[0];
            var newCell0 = nRow.insertCell(-1);
            newCell0.innerHTML = name;
            
            //get the second row of the table, add a new cell and then put the quantity in it
            var nRow = tableHandle.rows[1];
            var newCell1 = nRow.insertCell(-1);
            newCell1.innerHTML = quantity;
		}
	else
		{
			itemQuantities[index]+=quantity;
            //after computing the value of the item's quantity update the table with the new value
			tableHandle.rows[1].cells[index].innerHTML = itemQuantities[index];
		}
    if(sum(itemQuantities) > maxStorageValue)
			maxStorageAlert();
    showItem();
}


/**
 * @brief Computes the sum of the elements of an array.
 * @param in [] list Array of smth that should be summable.
 * @return The sum of the elements of the array.
 */
function sum(list)
{
	var res = 0;
	for(var i=0,n=list.length;i<n;i++)
		res += list[i];
	return res;
}

/**
 * @brief Reads the maximum storage value inserted by the user in the input html element with id="maxStorage". If the input wasn't an integer >=0 the user is alerted, and the field reset to the current maxStorage value, otherwise maxStorage is updated the limit is checked and, if the number of items in the warehouse is larger than the limit, a warning appears.
 */
function changeMaxStorage()
{
	//reads the value from the input element
	var tmp = document.getElementById("maxStorage").value;
    //checks if it is a valid integer
	var parsed = parseInt(tmp);
	//if it is valid :check if the sum of the items' quantities falls in its value, if not than the user is warned by an alert
	if(tmp == parsed && parsed >= 0)
	{
		maxStorageValue = parsed;
		if(sum(itemQuantities) > maxStorageValue)
			maxStorageAlert();
	}
    //otherwise the user is alerted that the input isn't in the proper format
	else{
        //reset the field to the previous valid value
        document.getElementById("maxStorage").value = maxStorageValue;
        alert("hi1");
		wrongStorageAlert();
    }
}

//function showItem(){
//    for(var i=0; i<itemNames.length;i++)
//        alert(itemNames[i]);
//}