function firstNonRepeatedChar(str) {
 // Write your code here
	for(let k of str){
		if(str.indexOf(k) == str.lastIndexOf(k)) return k;
	}
	return null;
}
const input = prompt("Enter a string")
alert(firstNonRepeatedChar(input)); 
