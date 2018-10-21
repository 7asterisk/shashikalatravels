// google analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-125655191-1');


(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// Or with jQuery

$(document).ready(function () {
  $('.collapsible').collapsible();
});

// carousel

$(document).ready(function () {
  $('.carousel').carousel();
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("return-to-top").style.display = "block";
  } else {
    document.getElementById("return-to-top").style.display = "none";
  }
}

$('#return-to-top').each(function () {
  $(this).click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});

$(document).ready(function () {
  $('input#phone, textarea#msg').characterCounter();
});

// dropdown
$('.dropdown-trigger').dropdown();

//  modal
$(document).ready(function () {
  $('.modal').modal();
});

function modal2() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
}
// app-install-banner
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCo4UVZoopFQlpoM9bdCEmwUCqfJQ3Amsc",
  authDomain: "shashikalatravels-9c9b6.firebaseapp.com",
  databaseURL: "https://shashikalatravels-9c9b6.firebaseio.com",
  projectId: "shashikalatravels-9c9b6",
  storageBucket: "shashikalatravels-9c9b6.appspot.com",
  messagingSenderId: "841010875585"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});


const docRef = db.doc("samples/sandWidchData");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone")
const msg = document.querySelector("#msg")
const save = document.querySelector("#submit");


var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
function submitForm() {
  const nameToSave = name.value;
  const emailToSave = email.value;
  const phoneToSave = phone.value;
  const msgToSave = msg.value;

  console.log(nameToSave)
  db.collection("users").add({
    name: nameToSave,
    email: emailToSave,
    pno: phoneToSave,
    msg: msgToSave
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      M.toast({ html: 'Message sent!' });
     alert("submited succesfully...");
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}


function getmsg() {
  const getEmail = document.getElementById("getMsg");
  msg_list = "";
  db.collection("users").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.log(doc.id, " => ", doc.data().email);
      msg_list = msg_list + "<li><div class='collapsible-header'><i class='material-icons'>account_circle</i>"
        + doc.data().name +
        "</div> <div class='collapsible-body'><span>email:"
        + doc.data().email
        + "<br/>  Phone:<a href='tel:+918668492860'>" + doc.data().pno
        + "</a><br/>Msg:" + doc.data().msg
        + "</span></div></li>";
      getEmail.innerHTML = msg_list;
    });
  });
  M.toast({ html: 'message getting!', classes: 'rounded' });
}
