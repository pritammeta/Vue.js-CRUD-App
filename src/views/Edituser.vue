<template>
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png"><br>
            <h2>Edit details</h2><br>
        <p style="color:red;"> {{ message }}</p>
         <input type="name" v-model="name" placeholder="Full Name"><br>
       <input type="mobile" v-model="number" placeholder="Ph. Number"><br>
              <input type="number" v-model="age" placeholder="Age"><br>
      <input type="email" v-model="email" placeholder="Email"><br>
           <button class="btn btn-success" v-on:click="signup">Create</button>
            <button class="btn btn-danger" v-on:click="userdelete" >Delete</button>

     <router-link to=/Home> <button class="btn btn-info" v-on:click="signup">Cancel</button></router-link> 
    </div>
</template>


<script>
import firebase from 'firebase'
import {db} from '../main'
export default {
  name:'edituser',
  data(){
  return {
   }},
   methods: {
     userdelete: function(){

                              this.$router.push('Home');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
     


     var uid = user.uid;
            db.collection("users").doc(uid).delete().then(()=> {
                              console.log("Document successfully deleted!");
                              this.$router.push('Home');

                          }),(error) => {
                              console.error("Error removing document: ", error);
                          } } 
});     
   }
   }
    
  }

</script>
 

 <style scoped>
body {
  font-family: Arial;
}
img{
    width: 70px;
    left: 15px;
 }
input{
   padding: 12px 20px;
  margin: 8px 0;
   border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

 label{
    text-align: left;
 }
button {
   color: white;
   margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;}
 

div.login {
   border-radius: 5px;
  background-color: whitesmoke;
  padding: 10px;
}
p{
    font-size: 12px;
}
</style>