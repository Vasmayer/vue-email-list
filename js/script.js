/* 

Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*/

Vue.config.devtools = true;

var root = new Vue({
    el: '#root',
    data:{
      listEmails:[1,2,3,4,5,6,7,8,9,10],
      numberEmails:10
    },
    methods:
    {
      
    } 
  });