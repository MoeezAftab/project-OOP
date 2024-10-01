"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = (persons) => __awaiter(void 0, void 0, void 0, function* () {
    do {
        console.log("WelCome!");
        const ans = yield inquirer_1.default.prompt({
            name: "select",
            type: "list",
            message: "whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("You Approach the staff room. Please feel free to ask any Questions.");
        }
        else if (ans.select == "student") {
            const ans = yield inquirer_1.default.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with: "
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hello i m ${name.name}. Nice to meet you!`);
                console.log("New Student Added");
                console.log("Current Student List");
                console.log(persons.students);
            }
            else {
                console.log(`Hello I Am ${student.name}. Nice to See you Again!`);
                console.log("Existing Student List");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting the program............");
            process.exit();
        }
    } while (true);
});
programStart(persons);
