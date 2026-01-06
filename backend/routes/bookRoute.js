import express from "express";
import {Create,GetBook,SpecialGet,Updatest,Deletetest} from "../controllers/bookController.js"

const router = express.Router();

router.post("/create",Create);
router.get("/getBook",GetBook);
router.get("/getBook/:id",SpecialGet)
router.patch("/getupdate/:id",Updatest);
router.delete("/getdelete/:id",Deletetest);

export default router;