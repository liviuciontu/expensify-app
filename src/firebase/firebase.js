import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAfXQPKts5jxwkMmCKCfl_nkSl_iQp-f8c",
    authDomain: "expensify-963ad.firebaseapp.com",
    databaseURL: "https://expensify-963ad.firebaseio.com",
    projectId: "expensify-963ad",
    storageBucket: "expensify-963ad.appspot.com",
    messagingSenderId: "965376998348"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
//     name: "Liviu Ciontu",
//     age: 27,
//     isSingle: false,
//     location: {
//         city: "Bucharest",
//         country: "Romania"
//     }
// }).then(() => {
//     console.log("Data is saved!");
// }).catch((e) => {
//     console.log("This failed. ", e);
// });

database.ref("isSingle").remove().then(() => {
    console.log("Data removed");
}).catch((e) => {
    console.log("Failed to remove. ", e);
}); 