//JavaScript sets is an collection of unique values
//Each values occur only once in a set
//Set can have any value of datatype

//To craete an set in JS -> passing an Array into it new Set() 

const set1 =new Set(['a','b','c','d','e']);   
console.log(set1);

//Each value occur only once in a set

const git =new Set([1,2,5,3,7,9,46,'abi',86,46]);   //46 occur two times in a set
console.log(git);                                   //check output 46 occurs only one time 

//To add values to an set use add()

const set2=new Set([1,2,3,4,5,6]);     // Number 1 -6 in set
set2.add(7);                           // Added 7 using add()
console.log(set2);

const para =new Set(['a','b','c','d','e']);
para.add('f');
console.log(para);

const head=new Set([true,false,null]);  //set can be of any datatype
head.add([1,2,3,4,5]);                  // inserted Array datatype into set
console.log(head);

//Set methods 

//delete() --> Remove an element from an set

const del =new Set(['john',25,true,null]);
del.delete(null);
console.log(del);

//clear() --> Remove all element from an set

const been =new Set(['rock',85,[1,2,3,4]]);
been.clear();
console.log(been);

//add() --> Add new element to the set

const sub1 =new Set([1,2,3,4,5,'srini']);
sub1.add(true);
console.log(sub1);

//has() --> Return TRUE if value exists or retun false 

var rrr =new Set([1,2,3,4,56,585,78]);
console.log(rrr.has(585));

//size --> To get the size of the set

const length =new Set(['dani',1,2,null,3,true]);
console.log(length.size);

//Set are objects --> we use typeof to check it 
const type1 =new Set([1,2,true,3,4,5,[8,9,2],null]);
console.log(typeof(type1));

//THANK YOU :)