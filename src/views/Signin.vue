<template> 
   <div class="login">
      <img alt="Vue logo" src="../assets/logo.png"><br> 
     <h2>Welcome back !</h2>
      <p style="color:red;">{{ message }}</p>
        <div class="fields">
       <input type="email" v-model="email"  placeholder="Email"><br>
       <input type="password" v-model="password"  placeholder="Password"><br>
        </div>
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
    created(){
      var vm = this;
      const currentuser=firebase.auth().currentUser;
      if(currentuser){
                                        vm.$router.replace('Home');

      }

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
  width: 239px;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;}
 

div.login {
    width: 400px;
   height: 450px;
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
p{
    font-size: 12px;
}
</style>