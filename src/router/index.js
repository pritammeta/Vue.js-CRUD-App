import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase';
 Vue.use(Router)

  const router = new Router({
    routes:[ 

    {

      path:'*',
      redirect: '/signin'
    },
    {

      path:'/',
      redirect: '/signin'
    },
  {

    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      requireauth: true
    }
   
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/:id',
    name: 'Edituser',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edituser.vue')
  }
  ]
});
 
router.beforeEach((to,from,next) =>{
const currentuser=firebase.auth().currentUser;
const requireauth= to.matched.some(record => record.meta.requireauth);
if(requireauth && !currentuser) next('/signin');
else next();
});
export default router;
