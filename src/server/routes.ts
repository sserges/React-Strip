import * as express from "express";
import * as stripeLoader from "stripe";
import axios from "axios";

const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

const stripe = new stripeLoader("sk_test_Kqf4VreHccRkKFgbvX6tznLC00eFCMiylj");

const charge = (token: string, amt: number) => {
  return stripe.charges.create({
    amount: amt * 100,
    currency: "usd",
    source: token,
    description: "Statement Description"
  });
};

router.post("/api/donate", async (req, res, next) => {
  try {
    let data = await charge(req.body.token.id, req.body.amount);
    // console.log(typeof data);
    console.log(data);
    res.send("Charged!");
    // const email = "agounkeserge@gmail.com";
    // const password = "admin3004";
    // const dataTosend = {
    //   payment_details: data
    // };
    // axios
    //   .post(`http://127.0.0.1:8000/dsv/payment/`, dataTosend, {
    //     headers: {
    //       authorization: "Token " + "b19e0a503528d1e8dfc3dc1384fd641b3a89ec16"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  } catch (e) {
    console.log(e);
    // res.status(500);
  }
});

export default router;
