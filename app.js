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

     var budgetController = (function() {

        var x = 23;

        var add = function(a) {
            return x + a;
        }

        return {
            publicTest: function(b) {
                return add(b);
            }
        }
     })();

     console.log(budgetController.publicTest(5));

     var UIController = (function() {

        /// Some code
     })();

     var controller = (function(budgetCtrl, UICtrl) {

        var z = budgetCtrl.publicTest(5);

        return {
            anotherPublic: function() {
                console.log(z);
            }
        }

     })(budgetController, UIController);

     