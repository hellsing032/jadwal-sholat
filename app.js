function jadwalSholat(latitude, longitude) {
  fetch(
    "https://api.aladhan.com/v1/calendar?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&method=2"
  )
    .then((response) => response.json())
    .then(function (response) {
      let date = new Date();
      let today = date.getDate() - 1;
      console.log(today);
      console.log(response.data[today]);
    });
}

function success(position) {
  jadwalSholat(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("Posisi ente tidak dapat di akses");
}

function userLocation() {
  if (!navigator.geolocation) {
    alert(
      "Geolocation tidak di dukung di dalam browser ente, coba silahkan dengan browse lain"
    );
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function index() {
  let app = document.getElementById("app");
  let h3 = document.createElement("h3");
  h3.innerHTML = "Jadwal Sholat";

  app.appendChild(h3);
  userLocation();
}

index();
