
<template>
<div class="wrap">
 <div v-for="item,i in QQfriends">
 <h2 class="title" @click="show(i)">{{item.title}}</h2>
 <ul class="list-items" :style="{display:showIndex==i?'block':'none'}">
  <li v-for="option in item.list">{{option.newstitle}}</li>
 </ul>
 </div>
</div>
</template>

<script>
let data=[
    {title:'我的好友',
    list:[
        {
            newstitle:'新闻版块1'
        },
        {
            newstitle:'新闻版块2'
        },
        {
            newstitle:'新闻版块3'
        }
    ]
    },
    {
        title:'黑名单',
        list:[
            {
                newstitle:'娱乐版块1'
            },{
                newstitle:'娱乐版块2'
            },{
                newstitle:'娱乐版块3'
            }
        ]
    },
    {
        title:'我的家人',
        list:[
            {
                newstitle:'体育版块1'
            },{
                newstitle:'体育版块2'
            },{
                newstitle:'体育版块3'
            }
        ]
    }
]
 export default{
    name: 'Friend',
    data(){
        return{
            QQfriends:data,
            showIndex:-1,
        }
        
    },
    methods:{
        show(n){
         //点击的是同一个
         // showIndex的值和n的值相同个，是点击的同一个
         //this.showIndex=n;
         this.showIndex=this.showIndex===n?-1:n;
        }
    }
 }
</script>
<style>
 .list-items{
    
 }
 .title{
     background:rgba(0,0,0,0.6);
     color:#fff;
 }
 .wrap{
     width:50%;
     margin:0 auto;
 }
</style>