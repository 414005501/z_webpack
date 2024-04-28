const v=new class Test{
    constructor(){
        this.init();
    }

    init(){
        window.onload=function(){
            for(var i=0;i<100;i++){
                document.body.appendChild(document.createElement("div")).innerText=(i+1);
            }
        }
        window.onscroll=function(e){
            // console.log(document.documentElement.scrollTop);
            console.log(document.documentElement.clientWidth);
        }

    }
}

function test(){
    this.a='1';
}

test.prototype.a='a';

function test2(){

}

Object.assign(test2.prototype,test.prototype)

const t=new test();
const t2=new test2();
alert(t2.a);