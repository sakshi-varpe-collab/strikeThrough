var list=document.querySelector('.list');
list.className="list";
document.querySelector('.list').addEventListener("click",(event)=>{
// event.target.parentElement.remove(list.target);

var listItem=event.target.parentElement;
if(event.target.className=="ri-close-circle-line")
{
    listItem.className="strikethrough";
}

})