import {
  SET_LOADING,
  SET_POST,
  SET_POST_IMG,
  SET_USER,
  TOGGLE_POST_MODAL,
} from "./actionTypes";
import { auth } from "../../Firebase/settings.js";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../Firebase/settings.js";
import { addDoc, getDocs } from "firebase/firestore";
import { editUpdateUserData } from "../../Firebase/DataBaseFunctions";
import { doc, setDoc } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";

import {
  toastError,
  toastInfo,
  toastSuccess,
} from '../../Helpers/alerts';

const getErrorMessage = (error) => {
  const code = error.code;

  switch (code) {
    case 'auth/invalid-email':
      return 'Correo inválido.';

    case 'auth/user-not-found':
      return 'No se encontró un usuario asociado con el correo proporcionado.';

    case 'auth/wrong-password':
      return 'Contraseña incorrecta.';

    case 'auth/email-already-in-use':
      return 'El correo proporcionado ya está en uso.';

    case 'auth/weak-password':
      return 'Contraseña débil.';

    case 'auth/invalid-user-token':
      return 'El token de usuario encontrado es inválido';

    case 'auth/user-token-expired':
      return 'El token de usuario proporcionado está expirado';


    case 'auth/null-user':
      return 'Ocurrió un error. Se proporcionó un usuario con valor nulo.';


    default:
      return 'Ha ocurrido un error inesperado al procesar la petición';
  }
};

const postsCollection = collection(db, 'posts')

export const togglePostModal = (payload) => ({
  type: TOGGLE_POST_MODAL,
  payload: payload,
});

export const setPost = (post) => ({
  type: SET_POST,
  payload: post,
});
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setImage = (imgURL) => ({
  type: SET_POST_IMG,
  payload: imgURL,
});

export const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
});

export const signInAPI = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const usersRef = collection(db, "users");
      // localStorage.setItem('user', JSON.stringify(response.user))

      const q = query(usersRef, where("userEmail", "==", email));

      const querySnapshot = await getDocs(q);


      querySnapshot.forEach(async (docm) => {

        localStorage.setItem('user', JSON.stringify(docm.data()))
        // dispatch(setUser(JSON.stringify(docm.data())))
      })

      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
      toastSuccess('¡Bienvenid@!');
    } catch (error) {
      const msg = getErrorMessage(error);
      toastError(msg);
    }
  };
};

export const signUpAPI = (email, password, userFirstName, userLastName, userAge) => {
  return async (dispatch) => {
    try {
      console.log('ayuda')
      const response = await createUserWithEmailAndPassword(auth, email, password)
      sendEmailVerification(response.user);
      await editUpdateUserData(email, userFirstName, userLastName, userAge, response.user.uid)
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("userEmail", "==", email));

      const querySnapshot = await getDocs(q);


      querySnapshot.forEach(async (docm) => {

        localStorage.setItem('user', JSON.stringify(docm.data()))

      })

      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));

      // before
      // localStorage.setItem("user", JSON.stringify({
      //     email, userFirstName, userLastName, userAge, userId: response.user.uid
      // }));
      // dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
      toastSuccess('¡Cuenta creada con éxito!');

    } catch (error) {
      const msg = getErrorMessage(error);
      toastError(msg);
    }
  };
};

export const signOutAPI = () => {
  return async (dispatch) => {
    try {
      const result = await signOut(auth);
      localStorage.setItem("user", null);
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
      toastSuccess('Sesión terminada');
    } catch (error) {
      const msg = getErrorMessage(error);
      toastError(msg);
    }
  };
};


export const editUpdatePostData = async (id, caption, Img, timestamp) => {
  await setDoc(doc(db, 'posts', id), {
    caption, Img, timestamp
  })
}

export const UploadPost = (payload) => {
  return async (dispatch) => {
    if (payload.postImg == null) {
      alert('null image')
      dispatch(setLoading(true));
      const docRef = await addDoc(collection(db, "Posts"), {
        user: payload.user,
        caption: payload.postCaption,
        img: null,
        key: payload.key,
        timestamp: payload.timestamp,
        createdBy: payload.createdBy
      });
      console.log("Document written with ID: ", docRef.id);
      dispatch(setLoading(false));
      return
    }
    dispatch(setLoading(true));
    const metadata = {
      contentType: "image/jpeg",
    };
    console.log(payload);
    const storageRef = ref(storage, `images/${payload.postImg?.name}`);
    const uploadTask = uploadBytesResumable(
      storageRef,
      payload.postImg,
      metadata
    );

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          // Add a new document with a generated id.
          const docRef = await addDoc(collection(db, "Posts"), {
            user: payload.user,
            caption: payload.postCaption,
            img: downloadURL,
            key: payload.key,
            timestamp: payload.timestamp,
            createdBy: payload.createdBy
          });
          console.log("Document written with ID: ", docRef.id);
          dispatch(setLoading(false));
        });
      }
    );
  };
};

export const getPostAPI = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "cities"));
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc);
    });
    dispatch(setPost(posts));
  };
};
