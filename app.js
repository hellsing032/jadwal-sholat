function success(position) {
  console.log(position);
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
