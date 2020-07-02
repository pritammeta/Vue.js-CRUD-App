<template>
  <div class="container"> 
          <img alt="Vue logo" src="../assets/logo.png"><br>
          <h3>All Users</h3>
<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Number</th>
 
  </tr>
<tr v-for="employee in locations" v-bind:key="employee.id"> 
    <td>{{employee.name}}</td>
    <td>{{employee.email}}</td>
    <td>{{employee.age}}</td>
   <td>{{employee.number}}</td>
   </tr>
</table>
   <router-link to=/edituser><button type="button"  class="btn btn-warning">Edit</button></router-link>
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
                                    this.$router.go()

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
 
ul {
  list-style-type: none;
  padding: 0;
}
 div.container {
      margin: auto;

  border-radius: 10px;
   align-self: center;
  background-color:whitesmoke;
     filter: blur(0.4px);
  box-shadow:
  /*bottom shadow*/
  0px 20px 20px rgba(0,0,0,0.2),
  0px 5px 10px rgba(0,0,0,0.2),
  /*long bottom shadow*/
  0px 70px 50px rgba(0,0,0,0.4),
  /*right shadow*/
  30px 50px 50px rgba(0,0,0,0.2),
  /*left shadow*/
  -30px 50px 50px rgba(0,0,0,0.2),
  /*right inset*/
  inset 20px 0px 60px rgba(0,0,0,0.1),
  /*left inset*/
  inset -20px 0px 60px rgba(0,0,0,0.1);
}
a {
  color: #42b983;
}
</style>