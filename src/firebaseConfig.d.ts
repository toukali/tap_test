declare module '../../firebaseConfig' {
    interface FirebaseConfig {
      apiKey: string;
      authDomain: string;
      projectId: string;
      storageBucket: string;
      databaseURL: string;
      messagingSenderId: string;
      appId: string;
    }
  
    const firebaseConfig: FirebaseConfig;
    export default firebaseConfig;
  }