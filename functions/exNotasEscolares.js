/*  ### Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema númerico para o sistema de notas em caracteres tipo A B C
    
    * de 90 para cima -  A
    * entre 80 - 89   -  B
    * entre 70 - 79   -  C
    * entre 60 - 69   -  D
    * menor que 60    -  F

*/

function notaEscolar (notas) {

      if (notas >= 90) {
         console.log('A');
     } else if(notas < 89 && notas >= 80) {
        console.log('B');
     } else if (notas < 79 && notas >= 70) {
         console.log('C');
     } else if (notas < 69 && notas >= 60) {
         console.log('D');
     } else if (notas < 60 && notas >= 0) {
         console.log('F');
     } else {
         console.log('Nota inválida');
     }
}  

notaEscolar('a')
notaEscolar(90)
notaEscolar(87)
notaEscolar(75)
notaEscolar(65)
notaEscolar(52)
