function Createtool(name,version,language){
    this.name=name;
    this.version=version;
    this.language=language;
    this.start=function(){
        console.log(this.name+ "started");
    };
    this.stop=function(){
        console.log(this.name+ "started");
    };
    
}

let tool1= new Createtool("selenium",4,["java","js"]);
let tool2= new Createtool("tool2",4,["java","js"]);


tool1.start();
tool2.start();