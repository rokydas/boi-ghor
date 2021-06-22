export const firebaseConfig = {
    apiKey: "AIzaSyAmJsooRDbwkP0AWvDpcOSZSP-SccjFo4A",
    authDomain: "boi-ghor18.firebaseapp.com",
    projectId: "boi-ghor18",
    storageBucket: "boi-ghor18.appspot.com",
    messagingSenderId: "159015246672",
    appId: "1:159015246672:web:3b3ac46ecbc3263e7b6a55"
};

export const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/signup',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
        bundleId: 'com.example.ios'
    },
    android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
};