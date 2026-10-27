// Configuración pública del cliente web. Firebase API Key no es una clave privada.
export const firebaseConfig={
  apiKey:"AIzaSyDBCF0LDj243wqzGeM21mgtYJE7QJh0erc",
  authDomain:"viaje-rentable-d5e42.firebaseapp.com",
  projectId:"viaje-rentable-d5e42",
  storageBucket:"viaje-rentable-d5e42.firebasestorage.app"
};

// Firebase Hosting usa el mismo origen. GitHub Pages apunta a la Function `api`.
export const apiBase=location.hostname.endsWith("github.io")
  ? "https://us-central1-viaje-rentable-d5e42.cloudfunctions.net/api"
  : "";
