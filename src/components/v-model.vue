
<template>
<div>
<input @keyup="addItem"/>
 <ul>
  <li v-for="item in arr">{{item}}</li>
 </ul>
</div>

</template>
<script>
export default{
    name: 'Model',
    data(){
        return{
        msg: 'jiayanajia',
        arr: [1,2,3]
        }
    },
    methods:{
        addItem(ev){
            if(ev.keyCode==13){
             this.arr.push( ev.target.value);
             ev.target.value='';
            }
            
        }
    }
}
</script>