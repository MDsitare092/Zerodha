require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//model
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local");
const  User = require("./model/User");


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

// CORS + Cookie setup
app.use(cors({
  origin: [
    "http://localhost:3000", "http://localhost:3001",
    "https://zerodha-dashboard-64oq.onrender.com",
    "https://zerodha-frontend-tt9f.onrender.com"

  ],
  
  credentials: true
}));

app.use(bodyParser.json());

// sessions 
app.use(session({
  secret:  process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}));



// Passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//demo
// app.get("/demouser", async(req, res)=>{
//   let fakeUser = new User({
//     email: "star@gmail.com",
//     username: "er_star",
//   });

//   let registerUser = await User.register(fakeUser, "helloworld");
//   res.send(registerUser);
// });




//cluster me data add hoga
// app.get("/addHoldings", async(req, res)=>{
//     let tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
  
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHoldings.forEach((item)=>{
//     let newHolding = HoldingsModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     });

//     newHolding.save();
// });
// res.send('Done!');

// });

// app.get("/addPositions", async(req, res)=>{
//      let tepmPosition =[
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tepmPosition.forEach((item)=>{
//     let newPosition = PositionsModel({
//    product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     });

//     newPosition.save();
// });
// res.send('Done!');
// });

app.get("/allHoldings", async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res)=>{ 
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});


// Signup
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email });
    await User.register(user, password);
    req.login(user, err => {
      if (err) return res.status(500).json({ error: "Login after signup failed" });
      res.status(201).json({ message: "Signup successful" });
    });
  } catch {
    res.status(400).json({ error: "Signup failed" });
  }
});

// Login
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err || !user) return res.status(401).json({ error: "Invalid credentials" });
    req.login(user, err => {
      if (err) return res.status(500).json({ error: "Login failed" });
      res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
});

// Logout
app.post("/logout", (req, res) => {
  req.logout(err => {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).json({ error: "Logout failed" });
    }
    res.clearCookie("connect.sid"); // clear session cookie
    res.status(200).json({ message: "Logged out" });
  });
});


// Auth Check
app.get("/check-auth", (req, res) => {
  res.json({ authenticated: req.isAuthenticated() });
});




app.listen(PORT, () =>{
    console.log("App started");
    mongoose.connect(url);
    console.log("DB connected!");
});

