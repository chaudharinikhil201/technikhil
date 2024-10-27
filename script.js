// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Helper to set data
function setData(elementId, value) {
    document.getElementById(elementId).textContent = value;
}

// Fetch Data from Firebase
db.ref("sensors/temperature").on("value", (snapshot) => {
    const temperature = snapshot.val();
    setData("temperature", `${temperature ? temperature.toFixed(1) : '--'} °C`);
});

db.ref("sensors/humidity").on("value", (snapshot) => {
    const humidity = snapshot.val();
    setData("humidity", `${humidity ? humidity.toFixed(1) : '--'} %`);
});

db.ref("sensors/pm25").on("value", (snapshot) => {
    const pm25 = snapshot.val();
    setData("pm25", `${pm25 ? pm25.toFixed(1) : '--'} µg/m³`);
});

db.ref("sensors/fire").on("value", (snapshot) => {
    const fireDetected = snapshot.val();
    setData("fire", fireDetected === "on" ? "Yes" : "No");
});

db.ref("sensors/smoke").on("value", (snapshot) => {
    const smokeDetected = snapshot.val();
    setData("smoke", smokeDetected === "on" ? "Yes" : "No");
});

db.ref("sensors/lpg").on("value", (snapshot) => {
    const lpgLeakage = snapshot.val();
    setData("lpg", lpgLeakage === "on" ? "Yes" : "No");
});

db.ref("sensors/vibration").on("value", (snapshot) => {
    const vibrationDetected = snapshot.val();
    setData("vibration", vibrationDetected === "on" ? "Yes" : "No");
});
