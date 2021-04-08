class Employee{
        #age=35; //private 
       
        
       getAge(){ //getter: used to return value of a private field
             return this.#age;
        }
        setAge(age){//setter: used to set the value of private var
            if(age<20){
                console.log("Age must be greater than 20");
            }
            else if (age>65){
                console.log("Age must be less than 20");
            }
            else{
                this.#age=age;
                console.log("Employee age updated to "+this.#age);
            }
        }
}



let emp1= new Employee();

console.log(emp1.age);
console.log(emp1.getAge()); 
emp1.setAge(20);
console.log(emp1.getAge());
emp1.setAge(65);
console.log(emp1.getAge());
emp1.setAge(23);
console.log(emp1.getAge());