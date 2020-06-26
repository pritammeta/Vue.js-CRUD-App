<template>
  <div class="home">
     <button v-on:click="logout">Logout</button>
   </div>
</template>

<script>
import firebase from 'firebase'
import {db} from '../main'
export default {
  name:'home',
  methods: {
    logout: function(){
   firebase
    .auth()
    .signOut()
   .then(
    ()=>
     {
    this.$router.replace('Signin');
  });
    }
  },
  retrievedata: function(){
    db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
  }
};




</script>