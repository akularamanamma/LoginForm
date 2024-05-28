let Student = require("../model/student.schema");

// & addStudent() function

let addStudent = async(req, res, next) => {
    try {

        let {fn, age, ln, number, email, address} = req.body;
        let student = Student.create({fn, age, ln, number, email, address})
        res.json({error:false, message: "Student created successfully"})
        

    } catch (error) {

        next(error)

    }
}

// & getStudents() function

let getStudents = async (req, res, next) => {
    console.log('test');
    try {

        let students = await Student.find()
        res.json({error: false, message: "Students fetched successfully",  data:students})

    } catch (error) {
        console.log({error});
        next(error)

    }
}

// & getStudent() function

let getStudent = async (req, res, next) => {
    try {

        let {id} = req.params;
        let student = await Student.findById(id);

        if(!student){
            res.json({error: true, message: "Students not fetched by giving id"})
        } else{
            res.json({error: false, message: "Students fetched successfully",  data:student})
        }

    } catch (error) {

        next(error)
        
    }
}

// & updateStudent() function

let updateStudent = async (req, res, next) => {

    try {
        let {id} = req.params;
        let {fn, age, ln, number, email, address} = req.body;
        let student = await Student.findById(id)

        if(!student){

            res.json({error:true, message: "Student not updated"})

        } else{

            let student = await Student.findByIdAndUpdate({_id:id}, {fn, age, ln, number, email, address}, {new:true})
            res.json({error:false, message: "Student updated succesfully"})

        }

    } catch (error) {
        next(error)
    }
    
}

// & deleteStudent() function

let deleteStudent = async (req, res, next) => {

    try {
        let {id} = req.params;
        let student = await Student.findById(id)

        if (!student) {
            
            res.json({error:true, message : "Student not found with given id"})

        } else {

            let student = await Student.deleteOne({_id:id})
            res.json({error:false, message: "Student deleted successfully", data: student})

        }

    } catch (error) {
        next(error)
    }

}

module.exports = {addStudent, getStudents, getStudent, updateStudent, deleteStudent}