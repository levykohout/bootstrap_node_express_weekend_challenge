#Basic Calculator

This is a calculator application build using jQuery, Node, and Express and styled using Bootstrap.


##Features

- The logic for the calculator is housed on the Server.

- The Client will take in the values and the type of mathematical operation selected using a button on the DOM. The user will be able to:

1. click on a numerical button
2. click on a mathematical operator
3. click on a numerical button
4. click on an equal button that sends all of the information to the server

- Each numerical value and the mathematical operator type will be bundled up in an object. The Client determine which mathematical operation is run and change the URL or the POST AJAX request to pair with a Server route that handles that type of mathematical operation.

- When the Server received the request, it compute the numbers in 1 of 4 different ways:

 1. addition
 2. subtraction
 3. multiplication
 4. division

- Once the result of the mathematical operation is determined, it should be sent back down to the Client where it will be displayed on the DOM.

- A clear button is available that resets the whole experience.

- Bootstrap is used to style the buttons.


## Running the server

Requires Node, NPM, Express and Bootstrap

##Author

Levy Kohout
