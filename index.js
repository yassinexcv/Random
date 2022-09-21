const student = ['yassine', 'Taha', 'salah', 'abderahman', 'mehdi', 'brahim', 'mohamed', 'amine', 'ahmed', 'farid'];
const sujets = ['sujet1', 'sujet2', 'sujet3', 'sujet4', 'sujet5', 'sujet6', 'sujet7', 'sujet8', 'sujet9', 'sujet10'];
const empty = [];
function RandomNoRepeat() {

    const random = Math.floor(Math.random() * sujets.length);
    const random2 = Math.floor(Math.random() * student.length);
    // ajouter le sujet et le nom dans un tableau vide
    if (student.length > 0 && sujets.length > 0) {
        empty.push('🎉' + student[random2] + ' ' + sujets[random] + ' 🎉 ');
    }
    // supprimer le sujet et le nom du tableau
    if (student.length > 0 && sujets.length > 0) {
        sujets.splice(sujets.indexOf(sujets[random]), 1);
        student.splice(student.indexOf(student[random2]), 1);
    } else {


        swal({

            text: "la list des sujet et fini!",
            button: "ok!",
        });



    }

    document.getElementById("list").innerHTML = empty;







    console.log(empty);

}
 function refreshPage(){
        window.location.reload();
    }
 





