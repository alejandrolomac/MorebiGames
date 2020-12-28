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

var snapinfo;

Vue.filter('htmlEscape', function(value) {
    return value.replace(/\&amp\;/g, '&');
});
Vue.filter('dateTime', function(val) {
    return new Date(val).toGMTString().slice(0, -13);
});
  
var vm = new Vue({
    el: '#morebiApp',
    data: {
        wikiObj: null,
        isResult: false,
        searchQuery: '',
    },
    computed: {

    },
    ready: function() {
    },
    methods: {
        removeSearchQuery: function() {
            this.searchQuery = '';
            this.isResult = false;
        },
        submitSearch: function() {
            firebase.database().ref(this.searchQuery).once('value', snapshot => {
                if(snapshot.val()){
                    this.wikiObj = snapshot.val();
                    this.isResult = true;
                }else {
                    this.wikiObj = '';
                    this.searchQuery = '';
                    this.isResult = false;
                }
            });//end of search
        },
        submitReclamado: function() {
            firebase.database().ref(this.searchQuery)
                .update({ userStatus: "Reclamado" })
                .then(() => {
                console.log('user updated!');
                this.wikiObj.userStatus = "Reclamado";
            })
        }
    }
});