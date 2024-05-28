let express = require("express")

let {
    addStudent,
    getStudent,
    getStudents,
    updateStudent,
    deleteStudent
    } = require("../controller/student.controller")


let router = express.Router();

router.post("/addStudent", addStudent)
router.get("/getStudents", getStudents)
router.get("/getSingleStudent/:id", getStudent)
router.put("/updateStudent/:id", updateStudent)
router.delete("/deleteStudent/:id", deleteStudent)

module.exports = router;