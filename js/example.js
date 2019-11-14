// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName("ul")[0];
var firstLI = document.createElement("li");
firstLI.appendChild(document.createTextNode("cream"));

firstLI.setAttribute("id", "five");
ul.appendChild(firstLI);   

  
// ADD NEW ITEM START OF LIST
var secondLI = document.createElement("li");
secondLI.appendChild(document.createTextNode("kale"));
secondLI.setAttribute("id", "zero");
ul.insertBefore(secondLI, ul.childNodes[0]); 

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  items[i].setAttribute("class", "cool");
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var elem = document.getElementsByTagName("h2")[0];
elem.innerHTML += "<span>" + items.length + "</span>";	