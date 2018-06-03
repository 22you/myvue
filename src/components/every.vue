<template></template>
<script>
  export default{
      name:'every',
      data(){
          return{

          }
      }
  }
</script>
<script>
 var arr=[1,2,3,4];
 //只要有小于5的数返回true
  let bl=arr.every(item=>item>5);
  console.log(bl)
 //每一项都要满足条件才会返回true
 //集合中的数据都必须大于5，只要有一个不大于5就返回false
 //some  只要有一个满足条件就返回true var bl2=arr.some(item=>item<5)
</script>