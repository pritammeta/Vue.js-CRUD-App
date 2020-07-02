<template>
   
   <div class="signup">
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
    },created(){
      var vm = this;
      const currentuser=firebase.auth().currentUser;
      if(currentuser){
                                        vm.$router.replace('Home');

      }

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
  width: 239px;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;}

div.signup {
    width: 400px;
   height: 600px;
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
  inset -20px 0px 60px rgba(0,0,0,0.1);;
}
p{
    font-size: 12px;
}
</style>