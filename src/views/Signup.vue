<template>
   
   <div class="container">
      <img alt="Vue logo" src="../assets/logo.png"><br>
            <h2>Let's Create an Account</h2><br>
        <p style="color:red;"> {{ message }}</p>
         <input type="name" v-model="name" placeholder="Full Name"><br>
       <input type="mobile" v-model="number" placeholder="Ph. Number"><br>
              <input type="number" v-model="age" placeholder="Age"><br>
      <input type="email" v-model="email" placeholder="Email"><br>
     <input type="password" v-model="password" placeholder="Password."><br>
     <button v-on:click="signup">Create</button>
      <p>Already, have account? <router-link to=/signin> Login</router-link></p>




 </div>
     
</template>

<script>
import firebase from 'firebase/app'
import { db } from '../main'

export default {
    name: 'signup',
    data()
    {
        return{
            message:null,
            name:null,
            age:null,
            number:null,
            email:null,
            password:null
        };
    },
    methods: {
        signup: function()
        {
                  this.message='Just wait...';

            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email,this.password)
            .then(
                 ()=> {

                  this.message='Creating....';
                            db.collection("users").doc(firebase.auth().currentUser.uid).set({
                              id:firebase.auth().currentUser.uid,
                              name:this.name,
                              email: this.email,
                              number:this.number,
                              age: this.age
                            })
                            .then(()=>
                            {                  this.message='Created account Successfully.';

                                                              this.$router.replace('Home');

                            })  

                                                            //firebase.database().ref('movies').push({name:this.name});
                                  


                },
                (err) => {
                  this.message='Opps, '+err.message;

                   //n alert('Opps,'+err.message);

                },

            )
        }
    }
};

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
 background-color: #4DAB68;
  color: white;
  padding: 14px 20px;
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