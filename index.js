// Code your solution here

function findMatching(drivers, name) {
   const lowercaseName = name.toLowerCase();
   return drivers.filter(driver => driver.toLowerCase()  === lowercaseName);
 }


 function fuzzyMatch(drivers, searchLetters) {
   const lowercaseSearch = searchLetters.toLowerCase(); // Change letters to lowercase
   return drivers.filter(driver => {

     const lowercaseDriver = driver.toLowerCase(); 
     return lowercaseDriver.startsWith(lowercaseSearch);
   });
 }
 function matchName(data, searchName) {
   const lowercaseSearchName = searchName.toLowerCase(); 
   return data.filter(item => item.name.toLowerCase() === lowercaseSearchName);//help in searching the data from names in l.cs
 }