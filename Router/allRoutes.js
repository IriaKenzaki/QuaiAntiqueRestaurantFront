import route from "./route.js";
//Définir ici vos routes
export const allRoutes = [
    new route("/", "Accueil", "/pages/home.html", [], "/js/galerie.js"),
    new route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"]),
    new route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";