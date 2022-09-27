const student = ['yassine', 'Taha', 'salah', 'abderahman', 'mehdi', 'brahim', 'mohamed', 'amine', 'ahmed', 'farid'];
const sujets = ['sujet1', 'sujet2', 'sujet3', 'sujet4', 'sujet5', 'sujet6', 'sujet7', 'sujet8', 'sujet9', 'sujet10'];
const dates = []
const emptyStudent = [];
const emptySujet = [] ;
function RandomNoRepeat() {
    const date = new Date();
   let getday = date.getDate();
    let day=date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let date1 = day + "/" + month + "/" + year;
    const random = Math.floor(Math.random() * sujets.length);
    const random2 = Math.floor(Math.random() * student.length);
    // ajouter le sujet et le nom dans un tableau vide
    if (student.length > 0 && sujets.length > 0) {
        emptyStudent.push( student[random2]  );
        emptySujet.push( sujets[random] );


        

    }
    // supprimer le sujet et le nom du tableau
    if (student.length > 0 && sujets.length > 0) {
        sujets.splice(sujets.indexOf(sujets[random]), 1);
        student.splice(student.indexOf(student[random2]), 1);

        if (sujets.length >= 0) {
           
            
            // const date2 = new Date();
            // date.setDate(date.getDate() + Math.floor(Math.random() * 10));
            // dates.push(date);

            for (let i = 0; i < emptySujet.length; i++) {

            }
        }
    
    //   //encremanter le jour
        if (getday >= 0) {
            getday++;
        }
        //encremanter le mois
    if (month > 12) {
        month = 1;
        year++;
      }
      if (day > 31) {
        days = 1;
        month++;
      }
console.log(day,month,year);
        const indexStudent = emptyStudent.length - 1;
        const indexSujet = emptySujet.length - 1;
    
    
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
    
        cell1.innerHTML = emptyStudent[indexStudent] ;
        cell2.innerHTML = emptySujet[indexSujet] ;
        cell3.innerHTML = dates[indexSujet] ;
    
        
    
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
    
        document.getElementById('table').appendChild(row);

    } else {

        swal({
            text: "la list des sujet et fini!",
            button: "ok!",
        });
    }

    // generation de date aleatoire pour chaque sujet sans repetition
    


}

  // dunction pour generer les dates random sauf le weekend et les jours ferier 
  

  function refreshPage() {
    window.location.reload();
}






