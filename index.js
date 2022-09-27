const student = ['yassine', 'Taha', 'salah', 'abderahman', 'mehdi', 'brahim', 'mohamed', 'amine', 'ahmed', 'farid'];
const sujets = ['sujet1', 'sujet2', 'sujet3', 'sujet4', 'sujet5', 'sujet6', 'sujet7', 'sujet8', 'sujet9', 'sujet10'];
let joursferies =["4-10","28-9","11-01","1-05","30-07","14-08","20-08","21-08","06-11","18-11"];
const dates = []
const emptyStudent = [];
const emptySujet = [];
function RandomNoRepeat() {
    // mes variables

    const date = new Date();
    let getday = date.getDay();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    

    // random student and sujet

    const random = Math.floor(Math.random() * sujets.length);
    const random2 = Math.floor(Math.random() * student.length);

    // ajouter le sujet et le nom dans un tableau vide

    if (student.length > 0 && sujets.length > 0) {
        emptyStudent.push(student[random2]);
        emptySujet.push(sujets[random]);
    }
    // supprimer le sujet et le nom du tableau
    if (student.length > 0 && sujets.length > 0) {
        sujets.splice(sujets.indexOf(sujets[random]), 1);
        student.splice(student.indexOf(student[random2]), 1);

        // les dates et les jours feries

        if (sujets.length >= 0) {

            for (let i = 0; i <= student.length; i++) {
                
            if(day > 30){
                day = 1;
                month++;
            }
            if(month > 12){
                month = 1;
                year++;
            }

              //tester les jours feries
          if(joursferies.includes(day+"-"+month)){
            console.log("jour ferie");
            day++;
            
     }
            //tester les weekend
            if(getday == 6){
                getday = 1;
                day = day + 2;
            }
                dates.push(day + "/" + month + "/" + year);
                day++;
                getday++;
            }
        }

        const indexStudent = emptyStudent.length - 1;
        const indexSujet = emptySujet.length - 1;


        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');

        cell1.textContent = emptyStudent[indexStudent];
        cell2.textContent = emptySujet[indexSujet];
        cell3.textContent = dates[indexSujet];



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

}

function refreshPage() {
    window.location.reload();
}






