    let tool={

    "name":"VisualStudioCode",
    "version":"4.2",
    "language":["java","c#","python"],
    "start":function(){
                console.log(this.name+ "started");
            },
    "stop":function(){
                console.log(this.name+"stopped");
            }

}

console.log(tool["name"]);
console.log(tool.version);
console.log(tool.language);
tool.start()
tool.stop()
//javascript object notation --JSON
//key value conbination
//value can be a number, string, boolean, array,object


