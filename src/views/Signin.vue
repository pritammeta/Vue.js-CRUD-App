<template> 
   <div class="container">
      <img alt="Vue logo" src="../assets/logo.png"><br> 
     <h2>Welcome back !</h2>
      <p style="color:red;">{{ message }}</p>
       <input type="email" v-model="email"  placeholder="Email"><br>
      <input type="password" v-model="password"  placeholder="Password"><br>
     <button v-on:click="login">Login</button>
      <p>Don't, have account? <router-link to=/signup> Sign up</router-link></p>
   </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'login',
    data(){
        return{
          message:'',
          email:'',
          password:''
        };
    },
    methods: {
        login: function(){
                  this.message='Just wait...';
   
              firebase
              .auth()
              .signInWithEmailAndPassword(this.email,this.password)
              .then(
                ()=> {

                  this.message='Logged in Successfully.';
                 // alert('Welcome Again!');
                                this.$router.replace('Home');
                          
                },
                (err) => {
                    alert('Opps,'+err.message);
                                      this.message='Please, try again...';

                },
              )

        }
    }
};
</script>>


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
        color: black;
       font-weight: bold;
  }
button {
 background-color: #4DAB68;
  color: white;
  padding: 14px 20px;
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