# Project: RomCom - Pair

>[Our Project Website](https://cameronromo.github.io/romcom/)

## Project Team 

>[Jordon Smith](https://github.com/jdxsmith), contributor

>[Cameron Romo](https://github.com/cameronRomo), contributor

## Overview

People say that romance novels are formulaic. Well ... maybe that's true. We're going to make an app that generates romance novel covers!

## Learning Goals

* Write clean, DRY JavaScript to store our data
* Use a provided class by creating object instances using the `new` keyword
* Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
* Being able to understand every line of code

## Functionality

### Main Page

* When the user loads or reloads the page, a random cover is displayed.  This random cover will contain a random image, title, and tagline.

### Show Random Cover

* When the user clicks the 'Show New Random Cover' button, a new random cover will be created and then displayed on the main page.

### Switching Views

* When the user clicks on 'Make Your Own Cover' button, the home page is hidden and the user is taken to a section of the page where they can view the form to make their own book.  
* When the 'View Saved Covers' button is clicked, the user is taken to the section of the page where the saved covers will be displayed.
* In each view the correct buttons are displayed/hidden so the user can properly navigate the page.

### Creating a New Cover

* On the 'Make Your Own Cover' section of the page, the user can enter values for each aspect of the cover, including image, title, a first descriptor, and a second descriptor.
* After the user has entered values for each input, clicking the 'Make my book' button will display the new cover on the main page.

### Saving and Viewing Cover

* On the main page, when the user clicks the 'Save Cover' button, the current cover will be added to the saved covers page. Once a cover has been saved, it can not be saved again. (This does not persist on page load).
* Clicking the 'View Saved Covers' button will take the user to the page where they can see all of their saved covers.

### Deleting Saved Covers

* On the saved covers page, when a cover is double-clicked, it is removed from the page.

## Wins

* Good workflow between teammates
    - Communication was consistent and professional
    - Git workflow felt structured and well-thought-out
* Able to stick to pre-determined schedule and DTR
* Took time to refactor code several times
* Sought out mentor review

## Challenges

* Determining how to properly use array methods to mainipulate arrays
* Understanding how to use the data model to update the DOM
* Understanding how element.target is accessing certain elements, such as the id, and how it relates to the DOM

## Project Specs and Rubric

>[romcom](https://frontend.turing.io/projects/module-1/romcom-pair.html)