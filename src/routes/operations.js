const { Router } = require("express");
const router = Router();

const {
    getOperations,
    createOperation,
    getOperation,
    updateOperation,
    deleteOperation,
    getQuantityOperations,
    getBalance,
    getByCategory,
} = require("../controllers/operations.controller");

router.route("/").get(getOperations).post(createOperation);

router.route("/recent/:quantity").get(getQuantityOperations);

router.route("/balance").get(getBalance);

router
    .route("/:id")
    .get(getOperation)
    .put(updateOperation)
    .delete(deleteOperation);

router.route("/category/:category").get(getByCategory);

module.exports = router;
