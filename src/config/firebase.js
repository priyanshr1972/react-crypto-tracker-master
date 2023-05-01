import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // add your Firebase configuration here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
import { auth, googleAuthProvider } from './firebase';

function LoginPage() {
  const handleGoogleSignIn = () => {
    auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}
