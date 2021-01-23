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
            firebase.database().ref('winners/' + this.searchQuery).once('value', snapshot => {
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
            firebase.database().ref('winners/' + this.searchQuery)
                .update({ userStatus: "Reclamado" })
                .then(() => {
                console.log('user updated!');
                this.wikiObj.userStatus = "Reclamado";
            })
        }
    }
});