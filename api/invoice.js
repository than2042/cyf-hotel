const express = require("express");
const router = express.Router();

const invoices = require("../public/data/invoices.json");

router.get("/", (req, res) => {
  res.json(invoices);
});

// router.get("/:id", (req, res) => {
//   const invoice = _.find(
//     invoices,
//     invoice => invoice.id === req.params.id
//   );
//   if (invoice) {
//     res.json(invoice);
//   } else {
//     res.send(`invoice ${req.params.id} not found`);
//   }
//   console.log(req.params.id);
//   res.end();
// });
router.get("/:id?", (req, res) => {
  if (req.params.id) {
    const filter = invoices.filter(invoice => invoice.id === parseInt(req.params.id));
    res.status(200).json({ invoices: filter });
  } else {
    res.status(200).json({ invoices: invoices });
  }
  // res.status(200).json(req.body.invoice);
});

router.post("/", (req, res) => {
  // TODO read req.body.customer
  res.status(200).json(req.body.invoices);
});

router.put("/", (req, res) => {
  // TODO update per req.body.customer
  res.status(200).json(req.body.invoices);
});

router.delete("/", (req, res) => {
  // TODO delete req.body.customer
  res.status(200).json(req.body.invoices);
});

module.exports = router;
router.put("/invoice", (req, res) => {
  // TODO read req.query.reservationId and req.body.invoice and insert into DB
  res.status(200).json({
    reservationId: req.query.reservationId,
    invoice: req.body.invoice
  });
});

module.exports = router;
