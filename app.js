var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use("/", express.static("public"));
app.get("/", function (req, res) {
  res.render("index", {
    second_left: [
      {
        image_path: "img/second/icon_1.png",
        title: "Awesome Teachers",
        text: "Omnis dolor repellendus tepor bus autem sui bus dam et aut officiis debitis incididunt labore.",
      },
      {
        image_path: "img/second/icon_2.png",
        title: "Globel Certificate",
        text: "Omnis dolor repellendus tepor bus autem sui bus dam et aut officiis debitis incididunt labore.",
      },
    ],
    second_right: [
      {
        image_path: "img/second/icon_3.png",
        title: "Best Program",
        text: "Omnis dolor repellendus tepor bus autem sui bus dam et aut officiis debitis incididunt labore.",
      },
      {
        image_path: "img/second/icon_4.png",
        title: "Business knowlede",
        text: "Omnis dolor repellendus tepor bus autem sui bus dam et aut officiis debitis incididunt labore.",
      },
    ],
    fourth: [
      {
        image_path: "img/fourth/img_1.jpg",
        price: "$100",
        title: "English Course",
        text: "Quis nostrud exercitation ullamco labor nisi ut aliquip commodo.",
      },
      {
        image_path: "img/fourth/img_2.jpg",
        price: "$250",
        title: "Accounting",
        text: "Quis nostrud exercitation ullamco labor nisi ut aliquip commodo.",
      },
      {
        image_path: "img/fourth/img_3.jpg",
        price: "$400",
        title: "Technology",
        text: "Quis nostrud exercitation ullamco labor nisi ut aliquip commodo.",
      },
    ],
    sixth: [
      {
        image_path: "img/sixth/img_1.png",
        rating: ["star", "star", "star", "star", "star"],
        name: "Jonahtan Andrew",
        text: `“ Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum ”`,
      },
      {
        image_path: "img/sixth/img_1.png",
        rating: ["star", "star", "star", "star", "star"],
        name: "Jonahtan Andrew",
        text: `“ Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum ”`,
      },
      {
        image_path: "img/sixth/img_1.png",
        rating: ["star", "star", "star", "star", "star"],
        name: "Jonahtan Andrew",
        text: `“ Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum ”`,
      },
    ],
    seventh: [
      {
        image_path: "img/seventh/img_1.jpg",
        title: "Nihil molestiae consequatur vel illum sui ",
        text: "December 23, 2020 No Comments ",
        special: "",
      },
      {
        image_path: "img/seventh/img_1.jpg",
        title: "Exercitationem ullam corpor is aboriosam  ",
        text: "December 23, 2020 No Comments ",
        special: "special",
      },
      {
        image_path: "img/seventh/img_1.jpg",
        title: "Suscipit laboriosam, nisi ut aliquid exea ",
        text: "December 23, 2020 No Comments ",
        special: "",
      },
    ],
  });
});

app.listen(process.env.PORT || 3001);
