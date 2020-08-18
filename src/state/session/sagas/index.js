// Sagas
import signIn from "./signInGoogle.saga";
import signOut from "./signOut.saga";

export const sagas = [...signIn, ...signOut];
