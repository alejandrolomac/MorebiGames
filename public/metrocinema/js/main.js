var firebaseConfig = {
    apiKey: "AIzaSyBhiHKK2bxdVv7XnDWAfkyoZHb7rvJV7Q0",
    authDomain: "metrocinema-dc285.firebaseapp.com",
    databaseURL: "https://metrocinema-dc285-default-rtdb.firebaseio.com",
    projectId: "metrocinema-dc285",
    storageBucket: "metrocinema-dc285.appspot.com",
    messagingSenderId: "137573210277",
    appId: "1:137573210277:web:9e5a71925e6d029893154c",
    measurementId: "G-65R1ZGVZ70"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var ref = firebase.database().ref('winners');
ref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var code = childSnapshot.val().userCode;
        var firstName = childSnapshot.val().userName;
        var phone = childSnapshot.val().userPhone;
        var premio = childSnapshot.val().userPremio;
        var identidad = childSnapshot.val().userIdentidad;
        var status = childSnapshot.val().userStatus;
        var city = childSnapshot.val().userCity;
        document.getElementById('winners').innerHTML += 
        '<div class="col"><div class="card mb-3"><div class="card-body"><div class="card-text"><ul class="list-group list-group-flush"><li class="list-group-item"><h4 class="card-title" style="color: #873887;">' + code + '</h4></li><li class="list-group-item"><b>Nombre: </b>' + firstName + '</li><li class="list-group-item"><b>N° de Identidad: </b>' + identidad + '</li><li class="list-group-item"><b>Teléfono: </b>' + phone + '</li><li class="list-group-item"><b>Ciudad: </b>' + city + '<li class="list-group-item"><b>Premio: </b>' + premio + '</li><li class="list-group-item"><b>Estado: </b>' + status + '</li></ul></div></div></div></div>';
    });
});

var refe = firebase.database().ref("winners");
    refe.once("value")
    .then(function(snapshot) {
        document.getElementById('winCounter').innerHTML += ' - ' + snapshot.numChildren();
        document.getElementById('countwin').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userStatus").equalTo('Reclamado').once("value")
    .then(function(snapshot) {
        document.getElementById('recwin').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userStatus").equalTo('No Reclamado').once("value")
    .then(function(snapshot) {
        document.getElementById('recno').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userPremio").equalTo('2x1').once("value")
    .then(function(snapshot) {
        document.getElementById('windos').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userPremio").equalTo('Pase Doble').once("value")
    .then(function(snapshot) {
        document.getElementById('windoble').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userPremio").equalTo('Un Pase').once("value")
    .then(function(snapshot) {
        document.getElementById('winpase').innerHTML = snapshot.numChildren();
});

//contador departamentos

var refa = firebase.database().ref("winners");
    refa.orderByChild("userCity").equalTo('Tegucigalpa').once("value")
    .then(function(snapshot) {
        document.getElementById('winteg').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userCity").equalTo('San Pedro Sula').once("value")
    .then(function(snapshot) {
        document.getElementById('winsps').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userCity").equalTo('El Progreso').once("value")
    .then(function(snapshot) {
        document.getElementById('winpro').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userCity").equalTo('Puerto Cortes').once("value")
    .then(function(snapshot) {
        document.getElementById('winpuerto').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userCity").equalTo('Santa Rosa').once("value")
    .then(function(snapshot) {
        document.getElementById('winsanta').innerHTML = snapshot.numChildren();
});

var refa = firebase.database().ref("winners");
    refa.orderByChild("userCity").equalTo('Choloma').once("value")
    .then(function(snapshot) {
        document.getElementById('wincholoma').innerHTML = snapshot.numChildren();
});