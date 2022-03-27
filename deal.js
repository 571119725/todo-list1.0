let state=1;
let allTheTasks=new Array();
let recordfinish=new Array();
const newTask=document.getElementById('todo');
let list=document.getElementById('showtodo');
const data=document.getElementsByClassName('showarea')[0];
const num=document.getElementById('furtherfunct').children[0].children[0];
const buttons=document.getElementById('furtherfunct');
const xiala=document.getElementById('xiala');
const button1=document.getElementById('button1');
const button2=document.getElementById('button2');
const button3=document.getElementById('button3');
const clear=document.getElementById('clear');
list.removeChild(data);
init();
alldisplay();
//回车添加文本
document.onkeydown = function(e) {
    if (!e)
        e = window.event;//火狐中是 window.event
    if ((e.keyCode || e.which) == 13) {
        e.preventDefault();
        if(newTask.value!=""){
            displayList();
            alldisplay();
        }
    }
}
//添加列表项
function displayList(){
    allTheTasks.push(newTask.value);
    recordfinish.push('0');
    newTask.value="";
    const datatemp=document.createElement('li');
    datatemp.innerHTML=data.innerHTML;
    datatemp.classList.add("showarea");
    datatemp.children[1].value=allTheTasks[allTheTasks.length-1];
    addEvent(datatemp);
    list.append(datatemp);
    list.children[recordfinish.length-1].index=recordfinish.length-1;
    console.log(datatemp);
}
function addEvent(datatemp){
    // datatemp.children[1].addEventListener('dblclick',(e)=>{
    //     datatemp.children[1].classList.add('editdata');
    //     datatemp.children[1].classList.remove('showdata');
    //     //alldisplay();
    // })
    datatemp.children[1].addEventListener('blur',(e)=>{
        if(datatemp.children[1].value==""){
            for(var i=datatemp.index+1;i<recordfinish.length;i++){
                list.children[i].index-=1;
            }
            allTheTasks.splice(datatemp.index,1);
            recordfinish.splice(datatemp.index,1);
            list.removeChild(datatemp);
            alldisplay();
        }else{
            datatemp.children[1].classList.add('showdata');
            datatemp.children[1].classList.remove('editdata');
            allTheTasks[datatemp.index]=datatemp.children[1].value;
            console.log("hello");
        }
    })
    //删除键
    datatemp.addEventListener('mouseover',(e)=>{
        datatemp.children[2].style.visibility='visible';
    })
    datatemp.addEventListener('mouseout',(e)=>{
        datatemp.children[2].style.visibility='hidden';
    })
    //删除键变粗
    datatemp.children[2].addEventListener('mouseover',(e)=>{
        datatemp.children[2].children[0].src='image/cushanchu.png';
    });
    datatemp.children[2].addEventListener('mouseout',(e)=>{
        datatemp.children[2].children[0].src='image/xishanchu.png';
    });
    //单击删除选项
    datatemp.children[2].addEventListener('click',(e)=>{
        for(var i=datatemp.index+1;i<recordfinish.length;i++){
            list.children[i].index-=1;
        }
        allTheTasks.splice(datatemp.index,1);
        recordfinish.splice(datatemp.index,1);
        list.removeChild(datatemp);
        alldisplay();
    });
    //点击选项
    datatemp.children[0].addEventListener('click',(e)=>{
        e.preventDefault();
        if(recordfinish[datatemp.index]=='0'){
            recordfinish[datatemp.index]='1';
            datatemp.children[0].children[0].src='http://127.0.0.1:5500/image/xuanzhong.png';
            // num.textContent=parseInt(num.textContent)-1;
        }else{
            recordfinish[datatemp.index]='0';
            datatemp.children[0].children[0].src='http://127.0.0.1:5500/image/weixuanzhong.png';
            // num.textContent=parseInt(num.textContent)+1;
        }
        alldisplay();
    });
}
xiala.addEventListener('click',(e)=>{
    e.preventDefault();
    if(xiala.children[0].src=='http://127.0.0.1:5500/image/xi.png'){
        xiala.children[0].src='http://127.0.0.1:5500/image/cu.png';
        // num.textContent='0';
        for(var i=0;i<recordfinish.length;i++){
            recordfinish[i]='1';
        }
    }else{
        xiala.children[0].src='http://127.0.0.1:5500/image/xi.png';
        // num.textContent=recordfinish.length;
        buttons.children[2].style.visibility='hidden';
        for(var i=0;i<recordfinish.length;i++){
            recordfinish[i]='0';
        }
    }
    alldisplay();
})
button1.addEventListener('click',(e)=>{
    state=1;
    alldisplay();
})
button1.addEventListener('mouseover',(e)=>{
    if(state==1){
        return;
    }else{
        button1.style.border="0.5px solid #ead7d7";
    }
})
button1.addEventListener('mouseout',(e)=>{
    if(state==1){
        button1.style.border="0.5px solid #ead7d7";
    }else{
        button1.style.border="0.5px solid transparent";
    }
})
button2.addEventListener('click',(e)=>{
    state=2;
    alldisplay();
})
button2.addEventListener('mouseover',(e)=>{
    if(state==2){
        return;
    }else{
        button2.style.border="0.5px solid #ead7d7";
    }
})
button2.addEventListener('mouseout',(e)=>{
    if(state==2){
        button2.style.border="0.5px solid #ead7d7";
    }else{
        button2.style.border="0.5px solid transparent";
    }
})
button3.addEventListener('click',(e)=>{
    state=3;
    alldisplay();
})
button3.addEventListener('mouseover',(e)=>{
    if(state==3){
        return;
    }else{
        button3.style.border="0.5px solid #ead7d7";
    }
})
button3.addEventListener('mouseout',(e)=>{
    if(state==3){
        button3.style.border="0.5px solid #ead7d7";
    }else{
        button3.style.border="0.5px solid transparent";
    }
})
clear.addEventListener('click',(e)=>{
    for(var i=0;i<recordfinish.length;i++){
        if(recordfinish[i]=='1'){
            for(var j=i+1;j<recordfinish.length;j++){
                list.children[j].index-=1;
            }
            allTheTasks.splice(i,1);
            recordfinish.splice(i,1);
            list.removeChild(list.children[i]);
            i--;
        }
    }
    alldisplay();
})
function alldisplay(){
    let count=0;
    for(var i=0;i<recordfinish.length;i++){
        if(recordfinish[i]=='1'){
            list.children[i].children[1].style.textDecoration="line-through";
            list.children[i].children[1].style.color="#ead7d7";
            list.children[i].children[0].children[0].src='http://127.0.0.1:5500/image/xuanzhong.png';
        }else{
            list.children[i].children[1].style.textDecoration="none";
            list.children[i].children[1].style.color="black";
            list.children[i].children[0].children[0].src='http://127.0.0.1:5500/image/weixuanzhong.png';
            count++
        }
    }
    num.textContent=count;
    for(var i=0;i<recordfinish.length;i++){
        if(recordfinish[i]=='1'){
            buttons.children[2].style.visibility='visible';
            break;
        }else{
            buttons.children[2].style.visibility='hidden';
        }
    }
    for(var i=0;i<recordfinish.length;i++){
        if(recordfinish[i]=='0'){
            xiala.children[0].src='http://127.0.0.1:5500/image/xi.png';
            break;
        }else{
            xiala.children[0].src='http://127.0.0.1:5500/image/cu.png';
        }
    }
    if(allTheTasks.length>0){
        document.getElementById("xiala").style.visibility="visible";
        document.getElementById("another").style.visibility="visible";
    }else{
        document.getElementById("xiala").style.visibility="hidden";
        document.getElementById("another").style.visibility="hidden";
        buttons.children[2].style.visibility='hidden';
    }
    switch(state){
        case 1:
            button1.style.border="0.5px solid #ead7d7";
            button2.style.border="0.5px solid transparent";
            button3.style.border="0.5px solid transparent";
            for(var i=0;i<recordfinish.length;i++){
                list.children[i].style.display="flex";
            }
            break;
        case 2:
            button1.style.border="0.5px solid transparent";
            button2.style.border="0.5px solid #ead7d7";
            button3.style.border="0.5px solid transparent";
            for(var i=0;i<recordfinish.length;i++){
                if(recordfinish[i]=='1'){
                    list.children[i].style.display="none";
                }else{
                    list.children[i].style.display="flex";
                }
            }
            break;
        case 3:
            button1.style.border="0.5px solid transparent";
            button2.style.border="0.5px solid transparent";
            button3.style.border="0.5px solid #ead7d7";
            for(var i=0;i<recordfinish.length;i++){
                if(recordfinish[i]=='0'){
                    list.children[i].style.display="none";
                }else{
                    list.children[i].style.display="flex";
                }
            }
            break;
        default:
            break;
    }
}
function init(){
    allTheTasks=window.localStorage.getItem('Tasks').split(',');
    recordfinish=window.localStorage.getItem('record').split(',');
    state=parseInt(window.localStorage.getItem('state'));
    let num=0;
    console.log(allTheTasks.length);
    for(let i=0;i<allTheTasks.length;i++){
        if(allTheTasks[i]==""){
            allTheTasks.splice(i,1);
        }
    }
    for(let i=0;i<recordfinish.length;i++){
        if(recordfinish[i]==""){
            recordfinish.splice(i,1);
        }
    }
    allTheTasks.forEach((content)=>{
        const datatemp=document.createElement('li');
        datatemp.innerHTML=data.innerHTML;
        datatemp.classList.add("showarea");
        datatemp.children[1].value=content;
        addEvent(datatemp);
        list.append(datatemp);
        list.children[num].index=num;
        num++;
    });
}
function saveData(){
    window.localStorage.setItem('Tasks',allTheTasks);
    window.localStorage.setItem('record',recordfinish);
    window.localStorage.setItem('state',state);
}