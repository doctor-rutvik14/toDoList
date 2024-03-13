# To Do-List jQuery Project:
## Vist: 
https://to-do-list14.vercel.app/


## jQuery Explaination:

### Event Handling
- $("#add").on("click", function () {...}): This attaches a click event handler to the element with the ID "add". When this element is clicked, the function inside the .on() method is executed.

### Retrieving Input Value
- var value = $("input").val(): This retrieves the value entered in the input field. It selects the input element and uses the .val() method to get its current value.

### Conditional Statement
- if (value !== "") {...}: This checks if the value retrieved from the input field is not empty.

### Creating DOM Elements
- var element = $(...):
- This creates a new 'list item element' and sets its text content to the value retrieved from the input field.

### Appending Child Elements
- $(element).append("<button>...</button>"): This appends a button element with the class "remove" and the text "X" inside bold tags as a child of the newly created list item element.

### Appending to Parent Element
- $("#mylist").append(element): This appends the newly created list item element (with the button inside it) to the ordered list (<ol>) element with the ID "mylist".

### Clearing Input Field
- $("input").val(""): This clears the input field by setting its value to an empty string.

### Selecting Elements
- $(".remove"): This jQuery selector selects all elements with the class "remove".

### Event Handling
- .on("click", function() {...}): This attaches a click event handler to all elements with the class "remove". When this element is clicked, the function inside the .on() method is executed.

### Handling Click Events
- function() {...}: This is a function that executes when a click event occurs on an element with the class "remove".

### Removing Parent Elements
- $(this): This refers to the specific element that triggered the click event (i.e., the element with the class "remove" that was clicked).
- .parent(): This selects the immediate parent of the clicked element.
- .remove(): This removes the selected parent element and its contents from the DOM (Document Object Model), effectively deleting it from the webpage.




