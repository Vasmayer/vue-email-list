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
      listEmails:[],
      numberEmails:10
    },
    methods:
    {
      getEmails(numberEmails)
      {
        for(let i = 0; i < numberEmails;i++)
        {
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( res => {
             this.listEmails.push(res.data.response);
          });
        }
      }
      
    },
    computed:
    {
        percentage()
        {
          return ( this.listEmails.length * 100 )/ this.numberEmails
        }
    },
    mounted()
    {
      this.getEmails(this.numberEmails);
    } 
  });