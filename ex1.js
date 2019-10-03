// tìm hiểu về let và const
// từ kháo dùng để khai báo biến
/*let s;
s = "tôi là quý";
console.log(s);
s = "Tôi là quy";
console.log(s);

const sv = "Nguyễn Văn Quý";
console.log(sv);
*/
function Hello(name){
    console.log(name)
}
// cách viết khác 
const Hello1 = function(name){
    console.log(name+" đến từ hello1")
}
// Cách viết hàm trong js hiện đại 
const Hello2 = (name) =>{
    console.log(name+' đến từ Hello hiện đại')
}
const tinhtong = so => so + so;
console.log(tinhtong(2));

Hello2('QN')
Hello('Quý')
Hello1('Quy')