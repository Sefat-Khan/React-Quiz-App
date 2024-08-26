import { db } from '../Firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Add or update user data in Firestore
async function saveUserData(userId, data) {
    try {
        await setDoc(doc(db, "users", userId), data);
        console.log("User data saved successfully!");
    } catch (err) {
        console.error("Error saving user data:", err);
    }
}

// Fetch user data from Firestore
async function getUserData(userId) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}

export { saveUserData, getUserData };
