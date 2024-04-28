const fs=require("fs");
const path=require("path");
const abs=`C:\\Users\\zeb\\Desktop\\img`;
const nlist=[0,1,2,3,4,5,6,7,8,9];

// 检查处理-
class Check_{
    constructor(){
        this.newNames=[];
        this.v=fs.readdirSync(abs);
        this.searchFile();
        this.changeName();
    }

    getNewName(name){
        const n1=name.charAt(0);
        const n2=name.charAt(1);
        console.log(n1,n2);
        let t=name.split("");
        if(nlist.includes(parseInt(n1)) && nlist.includes(parseInt(n2))){
            if(name.charAt(2)!='-'){
                t.splice(2,0,'-')
            }
        }else{
            if(name.charAt(1)!="-"){
                t.splice(1,0,'-')
            }
        }
        return t.join("");
    }

    searchFile(){
        this.v=this.v.map((item)=>{
            const name=this.getNewName(item);
             this.newNames.push(name);
             return path.join(abs,item);
         })
    }

    changeName(){
        this.v.forEach((item,index)=>{
            fs.renameSync(item,path.join(abs,`${this.newNames[index]}`));
        })
    }
}

// 
new Check_();