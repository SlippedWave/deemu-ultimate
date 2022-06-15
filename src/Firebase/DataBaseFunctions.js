import { doc, setDoc } from "firebase/firestore";
import { db } from "./settings";

export const editUpdateUserData = async (userEmail, userFirstName, userLastName, userAge, userID) => {
    await setDoc(doc(db, 'users', userID), {
        userEmail: userEmail,
        userFirstName: userFirstName,
        userLastName: userLastName,
        userAge: userAge,
        DEEMUID: userID
    })
}
