import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

async function addDocument(db, collectionName, data) { 
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllDocuments(db, collectionName) { 
  console.log("Get colection "+ collectionName)
  const query = await getDocs( collection(db, collectionName) )
  const documents= [];

  query.forEach( (doc)=>{
    documents.push( { id: doc.id, ...doc.data() } )  
  } );
  console.log(documents)
  return documents;
}

async function updateDocument(db, collectionName, id, data){ //Update 

  const updateInventory = doc(db, collectionName, id);
 
  if (collectionName){
    await updateDoc(updateInventory,data )
  }else {
    console.log("No references of doc");
  }

}

async function deleteDocument(db, collectionName, id){ // Delete

  const deleteRef = doc(db, collectionName, id);

  if (deleteRef){
    await deleteDoc(deleteRef);
  }else {
    console.log("Element does not exists");
  }

}

export { getAllDocuments, addDocument, updateDocument, deleteDocument };