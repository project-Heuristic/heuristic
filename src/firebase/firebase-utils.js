import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBQ2McJpVLYkCRjJxVAhpM8bdoOniONqCo",
  authDomain: "heuristics-417f2.firebaseapp.com",
  projectId: "heuristics-417f2",
  storageBucket: "heuristics-417f2.appspot.com",
  messagingSenderId: "942610132755",
  appId: "1:942610132755:web:f8660c612fb461a01cb4e6",
  measurementId: "G-Q81WJP92V3",
};


firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (UserAuth, additionalData) => {
  console.log(UserAuth)
  if (!UserAuth) return;

  const userRef = firestore.doc(`users/${UserAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email,photoURL } = UserAuth;
    const createdAt = new Date();
const {Name,profileImg}=additionalData;
const userData={
  displayName:Name,
  email,
  photoURL:profileImg,
  createdAt,
  ...additionalData,
}

    try {
      userRef.set(userData);
      return userData;
    } catch (err) {
      console.log('the error message is', err);
    }
  }
  return userRef;
};





// export  function Providers() {
 
//      const getUsers = ()=>{
//     db.collection("user").get().then((querySnapshot) => {
         
//         // Loop through the data and store
//         // it in array to display
//         querySnapshot.forEach(element => {
//             var data = element.data();
//             // setInfo(arr => [...arr , data]);
//               console.log(data)
//         });
//     })
// }
//   return getUsers;
// }










// export const addCollectionAndDocumnets = async (
//   collectionKey,
//   collectionData
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   console.log(collectionRef);
//   const batch = firestore.batch();
//   collectionData.forEach(doc => {
//     const key = collectionRef.doc();
//     batch.set(key, doc);
//   });
//   return await batch.commit();
// };
// export const getCurrentUser=()=>{
//   return new Promise((resolve,reject)=>{
//     const unsubscrib=auth.onAuthStateChanged(userAuth=>{
//       unsubscrib();
//       resolve(userAuth);
//     },reject)
//   })
// }
// export const collectionSnapshotobjMap = snapshot => {
//   const newObject = snapshot.docs.map(doc => {
//     const { title, items } = doc.data();
//     return {
//       title: title,
//       items: items,
//       id: doc.id,
//       routeName: encodeURI(title.toLowerCase()),
//     };
//   });
//   return newObject.reduce((acc, collection) => {
//     acc[collection.title.toLowerCase()] = collection;
//     return acc;
//   }, {});
// };