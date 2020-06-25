<template>
   
   <div class="login">
       <h1>Vue.js Firebase App</h1>
     <img alt="Vue logo" src="../assets/logo.png"><br>
            <h2>Let's Create a Account</h2><br>

      <input type="email" v-model="email" placeholder="Email.."><br>
     <input type="password" v-model="password" placeholder="Password."><br>
     <button v-on:click="signup">Create</button>
      <p>Already, have account? <router-link to=/signin> Login</router-link></p>
 </div>
     
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'signup',
    data()
    {
        return{
            email:'',
            password:''
        };
    },
    methods: {
        signup: function()
        {
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email,this.password)
            .then(
                function(){
                    alert('Successfully created your acconut!');
                },
                function(err){
                    alert('Opps,'+err.message);
                },

            )
        }
    }
};

</script>


 <style>
body {
  font-family: Arial;
}

input{
   padding: 12px 20px;
  margin: 8px 0;
   border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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