let tunings = [];
   const addTuning = (ev)=>{
       ev.preventDefault();
       let tuning = {
           name: document.getElementById('name').value,
           note1:document.getElementById('note1').value,
           note2:document.getElementById('note2').value,
           note3:document.getElementById('note3').value,
           note4:document.getElementById('note4').value,
           note5:document.getElementById('note5').value,
           note6:document.getElementById('note6').value
       }
       tunings.push(tuning);
       document.forms[0].reset();


       //displays tunings upon creation however they dissapear when refreshing the page
       console.warn('added' , {tunings} );
       let pre = document.querySelector('#msg pre');
       pre.textContent = '\n' + JSON.stringify(tunings, '\t', 2);


       localStorage.setItem('MyTuningList', JSON.stringify(tunings) );
   }
   document.addEventListener('DOMContentLoaded', ()=>{
       document.getElementById('btn').addEventListener('click', addTuning);
   });

   document.getElementById('MyTuningList').innerHTML = JSON.stringify(localTuning, null, 2);

/*
const data = localStorage.getItem("tunings");

 if (!tunings || !tunings.length) {
   tunings = [];
 } else {
   tunings = JSON.parse(data);
 }

 console.log(tunings);
*/
