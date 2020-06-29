<template>
  <div class="container"> 
          <img alt="Vue logo" src="../assets/logo.png"><br>
          <h3>All Users..</h3>
<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Number</th>
    <th>Edit</th>

  </tr>
<tr v-for="employee in locations" v-bind:key="employee.id"> 
    <td>{{employee.name}}</td>
    <td>{{employee.email}}</td>
    <td>{{employee.age}}</td>
   <td>{{employee.number}}</td>
   <td><router-link to=/edituser><button type="button">Edit</button></router-link></td></tr>
</table>
    <button type="button" class="btn btn-success" v-on:click="logout">Logout</button>
    </div>

   
</template>

<script>
import firebase from 'firebase'
import {db} from '../main'
export default {
  name:'home',
  data(){
  return {
   locations:[]
  }
  },
  

  created(){
    // db.collection('users').doc(firebase.auth().currentUser.uid).
    //           onSnapshot(function(doc){

    //                 console.log('current data:', doc.data())
    //                   const data = {
    //         'id': doc.data().id,
    //         'name': doc.data().name,
    //         'email': doc.data().email
            
    //       }
    //       this.profile.push(data)

                    
                 

    //               })

db.collection('users').get().then(querySnapshot =>{querySnapshot.forEach(doc => {
  const data = {
    'id':doc.data().id,
    name:doc.data().name,
    'email': doc.data().email,
    'number':doc.data().number,
    'age':doc.data().age

  }
  this.locations.push(data)
})})




  },
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
  }
}
</script>

 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width: 70px;
    left: 15px;
 }
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
 button {
 background-color: red;
  color: white;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;}
a {
  color: #42b983;
}
</style>