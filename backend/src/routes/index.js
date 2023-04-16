const express = require("express");
const homepageRoute = require("./homepage.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/homepage",
    route: homepageRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
