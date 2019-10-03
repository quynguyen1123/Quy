const array1 = [1,2,3,4,5,6,7];
const array2 = [...array1,8,9,10];
const  name ={
    name1: ' B',
    name2: 'C',
};
const dsLop = {
    ...name,
    name3:'A',
    name4: ' Z'
}
console.log(name);
console.log(dsLop);
console.log(array1);
console.log(array2);
