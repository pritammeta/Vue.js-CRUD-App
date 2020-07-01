<template>
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png"><br>
      <h3>Edit details</h3><br>
      <p style="color:red;"> {{ message }}</p>
      <label for="name">Name:</label>
      <input type="name" v-model="name" placeholder="Full Name"><br>
      <label for="mobile">Mobile:</label>
      <input type="mobile" v-model="number" placeholder="Ph. Number"><br>
      <label for="age">Age:</label>
      <input type="number" v-model="age" placeholder="Age"><br>
      <label for="email">Email:</label>
      <input type="email" v-model="email" placeholder="Email"><br>
      <button class="btn btn-success" v-on:click="updatedata">Update</button>
      <button class="btn btn-danger" v-on:click="userdelete" >Delete</button>
      <button class="btn btn-info" v-on:click="reloadpage" >Back</button>
     </div>
</template>


<script>
import firebase from 'firebase'
import {db} from '../main'
export default {
  name:'edituser',
  data(){
  return {
            message:'Loading...',
            name: null,
            age:null,
            number:null,
            email:null,
   }},
    created(){
      
      var vm = this;
 // this.$router.push('Home');
                                this.message='Hold on !';
                                    firebase.auth().onAuthStateChanged(function(user) {
                                      if (user) {
                                       var uid = user.uid;
                                 console.log("UUID: "+ uid);
                                     db.collection("users").doc(uid)
                                    .onSnapshot(function(doc) {
                                    console.log("Name: ", doc.data().email);
                                     vm.name= doc.data().name
                                     vm.age=doc.data().age
                                     vm.number=doc.data().number
                                     vm.email= doc.data().email
                                     vm.message='You can edit your details only for the account-"'+vm.email+'"';

                                    });
                                     }else{  vm.message='No data found';
}});     
   },
   methods: {
     userdelete: function(){

                                   var vm = this;
                                        firebase.auth().onAuthStateChanged(function(user) {
                                      if (user) {
                                       var uid = user.uid;
                                      db.collection("users").doc(uid).delete().then(()=> {
                                vm.message='Deleted.';
                                vm.$router.replace('Home');
                                vm.$router.go()

                          }),(error) => {
                              console.error("Error removing document: ", error);
                          } }             
                           });     
                           },

updatedata: function(){
                                        var vm = this;
                                vm.message='Please wait...';

                                        firebase.auth().onAuthStateChanged(function(user) {
                                      if (user) {
                                       var uid = user.uid;
                                      db.collection("users").doc(uid).set({
                                            name: vm.name,
                                            email:vm.email,
                                            age:vm.age,
                                            number:vm.number

                                            
                                        }).then(()=> {
                                vm.message='Updated !';
                               //  vm.$router.go()

                          }),(error) => {
                              console.error("Error removing document: ", error);
                          } } 
                               });     
                        },

 reloadpage: function(){
                                   this.$router.replace('Home');
                                           // this.$router.go()
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
       color: black;
       font-weight: bold;
  }
button {
   color: white;
   margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;}
 

div.container {
   border-radius: 5px;
  background-color: whitesmoke;
   padding: 10px;
}
p{
    font-size: 12px;
}
</style>