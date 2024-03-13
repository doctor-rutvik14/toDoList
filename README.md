# To Do-List jQuery Project:
## Vist: 

## jQuery Explaination:
- $(function () { ... });: This is a shorthand for $(document).ready(function () { ... });. It waits for the DOM (Document Object Model) to be fully loaded before executing the enclosed code. This ensures that the code inside the function is executed only after the DOM is ready.

- $("#add").on("click", function () { ... });: This line selects an element with the ID "add" and attaches a click event handler to it. When this element is clicked, the function inside the on() method is executed.

- var value = $("input").val();: This line selects an input element and retrieves its current value using the val() method. The value is then stored in the value variable.

- if (value !== "") { ... }: This checks if the value variable is not an empty string.

- var element = $("<li></li>").text(value);: This creates a new list item (<li>) element using jQuery and sets its text content to the value stored in the value variable.

- $(element).append("<button class='remove'><b>X</b></button>");: This appends a button element with class "remove" and the text "X" inside the list item (<li>). The button is appended as a child element of the list item.

- $("#mylist").append(element);: This appends the newly created list item (with its associated button) to an element with the ID "mylist".

- $("input").val("");: This clears the value of the input element.

- $(".remove").on("click", function () { ... });: This line selects all elements with the class "remove" and attaches a click event handler to each of them. When any of these elements are clicked, the function inside the on() method is executed.

- $(this).parent().remove();: This line removes the parent element of the clicked button. In this case, it removes the list item (<li>) when its associated remove button is clicked.
