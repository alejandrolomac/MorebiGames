var firebaseConfig = {
    apiKey: "AIzaSyDeirQtitCB0nbWd3xL9sN91JgKS2vMtfI",
    authDomain: "meykoganadores.firebaseapp.com",
    databaseURL: "https://meykoganadores.firebaseio.com",
    projectId: "meykoganadores",
    storageBucket: "meykoganadores.appspot.com",
    messagingSenderId: "747248423970",
    appId: "1:747248423970:web:fa35ca95550a7eb3dda67b",
    measurementId: "G-W9KYMJ9674"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var ref = firebase.database().ref();
ref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var code = childSnapshot.val().userCode;
        var firstName = childSnapshot.val().userFirst;
        var lastName = childSnapshot.val().userLast;
        var phone = childSnapshot.val().userPhone;
        var premio = childSnapshot.val().userPremio;
        var identidad = childSnapshot.val().userIdentidad;
        var status = childSnapshot.val().userStatus;
        document.getElementById('winners').innerHTML += 
        '<div class="col"><div class="card mb-3"><div class="card-body"><div class="card-text"><ul class="list-group list-group-flush"><li class="list-group-item"><h4 class="card-title" style="color: #873887;">' + code + '</h4></li><li class="list-group-item"><b>Nombre: </b>' + firstName + " " + lastName + '</li><li class="list-group-item"><b>N° de Identidad: </b>' + identidad + '</li><li class="list-group-item"><b>Teléfono: </b>' + phone + '</li><li class="list-group-item"><b>Premio: </b>' + premio + '</li><li class="list-group-item"><b>Estado: </b>' + status + '</li></ul></div></div></div></div>';
    });
});