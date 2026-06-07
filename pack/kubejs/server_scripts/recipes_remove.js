//------------------------------------------------------------------------------------------------------------------------------------------------
// PA2 Extras - Remove Recipes
//------------------------------------------------------------------------------------------------------------------------------------------------
// Author: RicTheCoder
// Contributors: ShiftTheDev, ChosenArchitect
//
// Removes recipes based on different factors, it also fixes problems with automatic recipe generation from Create by changing the IDs of some
// recipes and suffixing them with '_manual_only'
//------------------------------------------------------------------------------------------------------------------------------------------------

// Remove by Output
// - Add the item id of the output item of the recipe and all recipes with that output will be removed
const byOutput = [
	/^sophisticatedbackpacks:(?!upgrade_base|crafting_upgrade|stonecutter_upgrade|anvi_upgrade|smithing_upgrade|stack_upgrade_(starter_tier|tier_1|tier_2|tier_3|tier_4)).*upgrade.*/,
	'sophisticatedbackpacks:stack_upgrade_tier_4',
	'sophisticatedbackpacks:stack_downgrade_tier_1',
	'sophisticatedbackpacks:stack_downgrade_tier_2',
	'sophisticatedbackpacks:stack_downgrade_tier_3',
]

// Remove by ID
// - Add the recipe id for the recipe to remove
const byId = [

]

// Advance Remove
// - Provide multiple options to target the removal
// - Removes the base version and adds it as '_manual_only' in order to fix Create issues (set 'manual' property to true)
// - To use regex when targeting ids (for dynamic recipes), use '$' in the start of the id
const advRemoval = [
	// { input: "reliquary:alkahestry_tome", manual: true }
]

//---[CODE]---------------------------------------------------------------------------------------------------------------------------------------

ServerEvents.recipes(event => {
    byOutput.forEach(item => event.remove({ output: item }));
    byId.forEach(item => event.remove({ id: item }));
	
    advRemoval.forEach(condition => {
      let manual = condition.manual;
      let test = condition.test;
      
      if (manual)
      {
        delete(condition.manual);
        
        let recipes = event.findRecipes(condition);
        recipes.forEach(recipe => {
          if (recipe.getId().endsWith("_manual_only"))
            return;
          
          recipe.id(recipe.getId() + "_manual_only");
        });
      }
      else		
        event.remove(condition);
    });
});
