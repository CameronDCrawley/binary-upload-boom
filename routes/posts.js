const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const comment = require('../models/Comments')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createComment", ensureAuth, postsController.createComment);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
