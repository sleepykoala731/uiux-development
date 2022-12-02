# Development

### Link to Deployed Website
https://sleepykoala731.github.io/uiux-development

### Goal and Value of the Application
The goal of this application is to provide an easy way for a user to browse a selection of pokemon and add them to their team, which calculates the total of the team's base stats. This is valuable for comparing the stats of different teams, while being able to sort by number, height, and weight and filter by type and generation.

### Usability Principles Considered
The list of different pokemon takes up the majority of the viewing space, and allows the user to easily read relevant information for the given pokemon (number, type(s), generation, etc). Each pokemon has a button that, when clicked, adds the pokemon to the team view on the right side of the page. Upon doing this, the button will intuitively switch to a red "remove from team" button. The team view is the top element on the right side, along with options for filtering and sorting.

### Organization of Components
The components are organized into two columns -- the left column contains the list of pokemon and takes up the majority of the screen, as it contains the most information out of all of the components. The right column contains the team view, which is the top element, followed by a space-efficient dropdown menu for sorting and a series of checkboxes for filtering by type and/or generation. Since the team view is the most important element in the right column, it is placed at the top.

### How Data is Passed Down Through Components
The pokemon data is first passed to the App.js file, where it is then distributed to each Pokemon.js object, which represent each of the cards in the list of pokemon. As a part of this, functions for adding and removing a given pokemon to/from the team are also passed to the Pokemon objects, which allows them to have the appropriate button functionality and swap between the add/remove from team buttons when necessary.

### How the User Triggers State Changes
The user triggers state changes by clicking on the "add to team" button for a given pokemon, which adds the pokemon to the team and updates the team's total base stats. The user can also remove a pokemon from the team by clicking on the "remove from team" button, which will remove the pokemon from the team and update the team's total base stats accordingly. The user can also sort the list of pokemon by pokedex number, height, or weight using the "sort by" dropdown menu, which changes the sortMode and the state of the pokemonList. Additionally, the user can filter the list of pokemon by type and/or generation using the checkboxes, which changes the filteredTypes and/or filteredGenerations lists, along with the state of the pokemonList.
