import { db, firestore } from '../firebase/firebase-utils';

import { getDatabase, ref, set } from "firebase/database";
import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getFirestore
  } from 'firebase/firestore'

  const userCollectionRef =collection(db,'users');
  const userExamRef =collection(db,"exams");




export const  createUserExam=(data) =>{
  const db = getDatabase();
  console.log('////called')
  const {studentId} =data;
  set(ref(db, 'exams/' + studentId),{name:'kat'});
}


  class userDataService{
    updateUser=(id,updateUser)=>{
        const userDoc =doc(db,'users',id);
        return updateDoc(userDoc,updateUser);
    }
    createUserExam=async (data)=>{
      console.log('👽👽👽👽');
    
      
      return addDoc(userExamRef,data);
     

  
        // const docRef=doc(userExamRef/)

    }
  }

  export default new userDataService();