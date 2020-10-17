let inpkey = document.getElementById("inpkey");
let inpvalue=document.getElementById("inpvalue");
let inpvalue2=document.getElementById("inpvalue2");
let inpvalue3=document.getElementById("inpvalue3");
let inpvalue4=document.getElementById("inpvalue4");
let inpvalue5=document.getElementById("inpvalue5");
let inpvalue6=document.getElementById("inpvalue6");

let btninsert = document.getElementById("btninsert");
let isoutput = document.getElementById("isoutput");

btninsert.onclick = function(){
  let key = inpkey.value;
  let value = inpvalue.value;
  let value2 = inpvalue2.value;
  let value3 = inpvalue3.value;
  let value4 = inpvalue4.value;
  let value5 = inpvalue5.value;
  let value6 = inpvalue6.value;

  console.log(key);
  console.log(value);
  console.log(value2);

  if(key && value && value2 && value3 && value4 && value5 && value6) {
    localStorage.setItem(key,value,value2,value3,value3,value4,value5,value6);
    location.reload();
  }
};
for(let i=0; i<localStorage.length; i++){
  let key=localStorage.key(i);
  let value=localStorage.getItem(key);
  let value2=localStorage.getItem(key);
  let value3=localStorage.getItem(key);
  let value4=localStorage.getItem(key);
  let value5=localStorage.getItem(key);
  let value6=localStorage.getItem(key);

  isoutput.innerHTML += `${key}: ${value} ${value2} ${value3} ${value4} ${value5} ${value6} <br>`;
}
