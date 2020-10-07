<template>
  <div class="count-container">
    <div class="main">
        <h3 style="color: orange">{{ "Current user: " + currentUser }}</h3>
        <button @click="logout()">Logout</button>
        <button @click="goUp()">up</button>
        <button @click="goDown()">down</button>
        <h1>{{ count }}</h1>

        <h2>users:</h2>

        <ul>
            <li v-for="(item, index) in users" :key="index">
                <p><strong>{{ item.name + " " + item.age + " " }}</strong>{{ index }}</p>
            </li>
        </ul>
    </div>
    <div class="new-user-container">
        <input v-model="userInput.name" type="text" placeholder="name"/><br>
        <input v-model="userInput.age" type="number" placeholder="age"/><br>
        <input v-model="userInput.height" type="text" placeholder="height"/><br>
        <button @click="submitUser()" class="submit-new-user">submit new user</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import router from '../router';

export default {
    name: 'Count',
    data() {
        return {
            currentUser: null,
            userInput: {
                name: '',
                age: null,
                height: ''
            },
            users: [],
            count: 7,
            table: [
                [1,2,3], 
                [4,5,6], 
                [7,8,9]
            ],
        }
    },
    created() {
        console.clear();
    },
    mounted() {
        this.fetchCurrentUser();

        firebase.
        firestore().
        collection('users').
        get().
        then((docs) => {
            docs.forEach((doc) => {
                this.users.push(doc.data());
            });
        });
    },
    methods: {
        goUp() {
            this.count = this.count + 1;
        },
        goDown() {
            this.count = this.count - 1;
        },
        submitUser() {
            console.log('pushing new user to database...');

            firebase.
            firestore().
            collection('users').
            doc().
            set(this.userInput).
            then(() => {
                console.log('successfully added new user');
            }).catch((error) => {
                console.log(error);
            });
        },
        fetchCurrentUser() {
            firebase.auth().onAuthStateChanged((userAuth) => {
                this.currentUser = userAuth.displayName;
            });
        },
        logout() {
            firebase.auth().signOut().then(() => {
                console.log('successfully signed out');
                router.push('/');
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.new-user-container {
    margin-left: 24px;
}

.count-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main {
    background: #eee;
    padding: 24px;
    border-radius: 18px;
}

h2 {
    text-align: center;
}

ul {
    text-align: center;
    list-style: none;
    padding: 0px;
}

strong {
    color: black !important;
}

p {
    color: blue;
}
</style>