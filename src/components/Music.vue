		
<template>

<div class="wrap" id="app">
歌手：<input/>
歌曲：<input/>
专辑数量：<input/>
  <div class="baidu">
   <ul class="list">
     <li class="list list-head">
       <div>
         <input type="checkbox" v-model="ischeckedAll"/>全选
       </div>
        <span>歌单</span>
         <span>歌手</span>
         <span>专辑</span>
     </li>
   </ul>
   	<ul class="list list-body">
       <!-- class="checkedColor"-->
					<li v-for="item in list " :class="{checkedColor:item.checked}">
						<div><input type="checkbox" v-model="item.checked"></div>
						<span>{{item.name}}</span>
						<span>{{item.song}}</span>
						<span>{{item.album}}</span>
					</li>
				
				</ul>
                <div class="select">
					<span class="selectAll">

						<span>统计：</span>
					</span>
					<div class="others">
						<span><em></em>歌手有：{{list.length}}位</span>
						<span><em></em>专辑有{{albums}}张</span>
					</div>
				</div>
  </div>
</div>
</template>
<style lang="scss">
@import '../styles/baidu.scss';
			body,
			ul,
			li {
				margin: 0;
				padding: 0;
				list-style: none;
			}
			.list-body li:nth-child(even) {
				background: yellow;
			}
			.list-body li:nth-child(odd) {
				background: #fff;
			}
			.list-body li:hover {
				background: green;
			}
			.list-body li.checkedColor {
				background: green;
			}
		</style>
<script>

let data = [
				{
					id:Date.now()+Math.random(),
					name: '邓紫棋',
					song: '泡沫',
					checked: true,
					album: 10
				},
				{
					id:Date.now()+Math.random(),
					name: '王杰',
					song: '泡沫',
					checked: false,
					album: 10
				},
				{
					id:Date.now()+Math.random(),
					name: '周杰伦',
					song: '泡啥沫',
					checked: false,
					album: 10
				}
			]
  export default {
      name:'Music',
      data(){
          return{
            list:data
          }
         
      },
      computed:{
       
          ischeckedAll:{
              get() {
                  console.log('取值了');
                //   return this.list.filter(item=>item.checked).length === this.list.length;
                return this.list.every(item=>item.checked)

              },
            set(newValue) {
              console.log(newValue);
              this.list.forEach(item=>item.checked=newValue)
            }
          },
          albums:function (){
            //   let n=0;
            //   this.list.forEach(item=>{
            //       n+=item.album;
            //   })
           return this.list.reduce((item1,item2)=>{
              return {
                  n:item1.n+item2.album
                  }
            },{n:0}).n
             
          }
      }
  } 
</script>