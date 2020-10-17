
var inpkey = document.getElementById("inpkey");
var inpvalue=document.getElementById("inpvalue");
var inpvalue2=document.getElementById("inpvalue2");
var inpvalue3=document.getElementById("inpvalue3");
var inpvalue4=document.getElementById("inpvalue4");
var inpvalue5=document.getElementById("inpvalue5");
var inpvalue6=document.getElementById("inpvalue6");



var btninsert = document.getElementById("btninsert");
var isoutput = document.getElementById("isoutput");


var key = inpkey.value;
var value = inpvalue.value;
var value2 = inpvalue2.value;
var value3 = inpvalue3.value;
var value3 = inpvalue4.value;
var value3 = inpvalue5.value;
var value3 = inpvalue6.value;

console.log(key);
console.log(value);
console.log(value2);

btninsert.onclick = function(){
  var key = inpkey.value;
  var value = inpvalue.value;
  var value2 = inpvalue2.value;
  var value3 = inpvalue3.value;
  var value4 = inpvalue4.value;
  var value5 = inpvalue5.value;
  var value6 = inpvalue6.value;

if(key && value) {
  var savekey = "Tune:"+inpkey.value;
  var content = value + ', ' + value2 + ', ' + value3 + ', '  + value4 + ', ' + value5 + ', '  + value6;
    // if the key exists
    if(localStorage.getItem(savekey)){
        // add this value onto the end of the existing string
        localStorage.setItem(savekey, content);
    }else{
        // the key doesn't exist yet, add it and the new value
        localStorage.setItem(savekey, content);
    }
    location.reload();
}
};

for(var i=0; i<localStorage.length; i++){
  var key=localStorage.key(i);
  if (key.includes("Tune:")){
    var value=localStorage.getItem(key);
    var strippedkey = key.replace(/Tune:/g,'');
    isoutput.innerHTML += `${strippedkey}: ${value}  <br>` ;
  }
}
