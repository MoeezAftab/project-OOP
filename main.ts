import inquirer from "inquirer";

class Student{
    name : string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()

const programStart =async(persons:Person)=>{
    do{
    console.log("WelCome!");
    const ans = await inquirer.prompt({
        name:"select",
        type: "list",
        message: "whom would you like to interact with?",
        choices: ["staff","student","exit"]
    })
    if(ans.select == "staff"){
        console.log("You Approach the staff room. Please feel free to ask any Questions.");
    }
    else if(ans.select == "student"){
        const ans = await inquirer.prompt({
            name : "student",
            type: "input",
            message: "Enter the student's name you wish to engage with: "
        })
        const student = persons.students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`hello i m ${name.name}. Nice to meet you!`);
            console.log("New Student Added");
            console.log("Current Student List");
            console.log(persons.students);
        }else{
            console.log(`Hello I Am ${student.name}. Nice to See you Again!`);
            console.log("Existing Student List");
            console.log(persons.students);
    }
    
    }else if(ans.select == "exit"){
        console.log("Exiting the program............");
        process.exit()
    }
}while(true)
}
programStart(persons)