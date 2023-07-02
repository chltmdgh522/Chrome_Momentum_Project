const notice=document.querySelector("#emoticon div");
const notice1=document.querySelector("#noticespan");



function onClickNotice(){
    notice.setAttribute('id',"hidden");
    notice1.className="";
    notice1.addEventListener("click", onClickNotice1);
}
function onClickNotice1(){
    notice.setAttribute('id',"");
    notice1.className="hidden";
}

notice.addEventListener("click", onClickNotice);