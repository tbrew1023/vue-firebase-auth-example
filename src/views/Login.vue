<template>
  <h1>this is the login page</h1>
  <button @click="login()">Sign in w Google</button>
</template>

<script>
import firebase from 'firebase';
import router from '../router';
import store from '../store'

export default {
    name: 'Login',
    data() {
        return {

        }
    },
    methods: {
        login() {
            console.log('logging in.......');

            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                console.log(token);
                // The signed-in user info.
                var user = result.user;

                console.log(user);

                store.commit('success');

                router.push('/home');

                // ...
                }).catch(function(error) {

                    store.commit('fail');
                // Handle Errors here.
                //var errorCode = error.code;
                //var errorMessage = error.message;
                // The email of the user's account used.
                //var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                //var credential = error.credential;
                // ...
                console.log(error);
            });
        }
    }
}
</script>

<style>

</style>