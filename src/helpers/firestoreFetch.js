import db from "../utils/firebaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const firestoreFetch = async () => {
    const listadoProductos = await getDocs(collection(db, "products"));
    const dataFirestore = listadoProductos.docs.map( document => ({
        id: document.id,
        ...document.data()
    }))
    return dataFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "products",idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
          // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}