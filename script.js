// const a=document.getElementById('Red');
// function change() {
//     document.body.style.backgroundColor="red";
// }
// a.addEventListener('click',change);
// const b=document.getElementById('Yellow');
// function change1() {
//     document.body.style.backgroundColor="yellow";
// }
// b.addEventListener('click',change1);
// const c=document.getElementById('Black');
// function change2() {
//     document.body.style.backgroundColor="black";
// }
// c.addEventListener('click',change2);
// const d=document.getElementById('Purple');
// function change3() {
//     document.body.style.backgroundColor="purple";
// }
// d.addEventListener('click',change3);
// const e=document.getElementById('Green');
// function change4() {
//     document.body.style.backgroundColor="green";
// }
// e.addEventListener('click',change4);
// const f=document.getElementById('Blue');
// function change5() {
//     document.body.style.backgroundColor="blue";
// }
// f.addEventListener('click',change5);
// const g=document.getElementById('Default');
// function change6() {
//     document.body.style.backgroundColor="white";
// }
// g.addEventListener('click',change6);

// using array

const a=document.querySelectorAll('.tabs');
a.forEach((val)=>{
val.addEventListener("click",()=>{
    const b=val.innerHTML;
    if(b==="Default")
        document.body.style.backgroundColor="white";
    else
    document.body.style.backgroundColor=b;
})
})