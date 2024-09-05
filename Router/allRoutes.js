import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", [], "/js/galerie.js"),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["ROLE_USER", "ROLE_ADMIN"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["ROLE_USER", "ROLE_ADMIN"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["ROLE_USER"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["ROLE_USER"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";