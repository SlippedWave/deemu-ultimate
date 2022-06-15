import { auth } from './settings';
import {
   sendPasswordResetEmail,
   signOut,
   updatePassword,
} from 'firebase/auth';
import {
   toastError,
   toastInfo,
   toastSuccess,
 } from '../Helpers/alerts';

export const logout = async () => {
   try {
      const response = await signOut(auth);
      toastSuccess('Sesión terminada');
   } catch (error) {
      const msg = getErrorMessage(error);
      toastError(msg);
   }
};

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

export const resetPassword = async (email) => {
   try {
      await sendPasswordResetEmail(auth, email);
      toastInfo(
         `Un correo se ha enviado a la dirección que especificaste.\n`
      );
   } catch (error) {
      const msg = getErrorMessage(error);
      toastError(msg);
   }
};

export const setNewPassword = async (
   password
) => {
   try {
      await updatePassword(
         auth.currentUser,
         password
      );
      toastSuccess('Contraseña actualizada con éxito.')
   } catch (error) {
      const msg = getErrorMessage(error);
      toastError(msg);
   }
};
