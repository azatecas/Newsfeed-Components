/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
funtion createMenu(arr){
  let myDiv = document.createElement('div');
  let myUl = document.createElement('ui');
  

  myDiv.append(myUl);
  myUl.append(myLi);

  //adds css class to the parent div
  myDiv.classList.add('menu');

  //iterate through arr and append the index to ul as li
  arr.forEach(item => {
    let myLi = document.createElement('li');
    myLi.textContent = item;
    myUl.append(myLi);    
  })

  let myMenu = document.getElementsByClassName('menu-button');
  myMenu.addEventListener('click', () => {
    myDiv.classList.toggle('menu--button');
  })

  return myDiv;
}