/**
 * Modules
 * Important aspect of any robust application's architecutre
 * Keep the units of code for a project both cleanly separated and organized
 * Encapsulate some data into privacy and expose other data publicly
 */ 

 /**
  * To-Do List
  * Add event handler
  * Get input values
  * add the new item to our data structure
  * Add the new item to the UI
  * Calculate the budget
  * Update the UI
  */

  /**
   * UI Module
   * Get input values
   * Add the new item to the UI
   * Update the UI
   */

   /***
    * Data Module
    * Add the new item to our data structure
    * Calculate the budget
    */

    /**
     * Controller Module
     * Add event handler
     */

    /***
     * Implementing the Module Pattern
     * how to use the module pattern
     * More about private and public data, encapsulation, and separation of concerns
     */

     // BUDGET CONTROLLER
     var budgetController = (function() {

        // some code

     })();

     // UI CONTROLLER
     var UIController = (function() {

        /// Some code

     })();

      /**
      * Setting up the First Event Listeners
      * how to set up event listeners for keypress events
      * how to use event object
      */

     // GLOBAL APP CONTROLLER
     var controller = (function(budgetCtrl, UICtrl) {

        var ctrlAddItem = function() {
            // 1. Get the field input data

            // 2. Add the item to the budget controller

            // 3. Add the new item to the user interface

            // 4. Calculate the budget

            // 5. Display the budget on the UI
            console.log('it works');
        }
        document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) { //event.which for older browsers
                ctrlAddItem();
            }
        });

     })(budgetController, UIController);

    
