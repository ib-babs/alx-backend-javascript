interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0].toUpperCase()}. ${lastName}`
}
// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
// Define the StudentClassInterface interface
interface StudentClassInterface {
    new(firstName: string, lastName: string): StudentClass;
}

// Define the StudentClass interface
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass {
    lastName: string;
    firstName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    workOnHomework(): string {
        return 'Currently working'
    }
    displayName(): string {
        return this.firstName
    }
}