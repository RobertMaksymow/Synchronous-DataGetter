import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "GET all Portfolio coins",
    status: "success",
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: `GET Portfolio coin with ID: ${req.params.id}`,
    status: "success",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: `POST new Portfolio coin`,
    status: "success",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: `DELETE Portfolio coin with ID: ${req.params.id}`,
    status: "success",
  });
});

router.patch("/:id", (req, res) => {
  res.json({
    message: `PATCH Portfolio coin with ID: ${req.params.id}`,
    status: "success",
  });
});

export default router;
