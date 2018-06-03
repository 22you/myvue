<template>
<div id="wrap">
		<section id="section">
			<nav id="choose">
			你的选择:
			<mark 
             v-for="value,key,index in choose">{{value}}
             <a href="javascript:;" @click="remove(key)">x</a>
            </mark>
			</nav>
			<ul id="type">
				<li v-for="item,j in list">
					{{item.title}}:
					<a 
						@click="chooseHandle(item,i,option,j)"
						v-for="option,i in item.list" 
						href="javascript:;"
						:class="{active:item.index===i}"
					>
						{{option}}
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>
 <style lang="scss">
  @import '../styles/phone.scss';
 </style>
<script>
let data = [
			{
				title: '品牌',
				list: ["苹果", "小米", "锤子", "魅族", "华为", "三星", "OPPO", "vivo", "乐视", "360", "中兴", "索尼"]
			},
			{
				title: '尺寸',
				list: ["3.0英寸以下", "3.0-3.9英寸", "4.0-4.5英寸", "4.6-4.9英寸", "5.0-5.5英寸", "6.0英寸以上"]
			},
			{
				title: '系统',
				list: ["安卓", "(", "Android", ")", "苹果", "(", "IOS", ")", "微软", "(", "WindowsPhone", ")", "无", "其他"]
			},
			{
				title: '网络',
				list: ["联通3G", "双卡单4G", "双卡双4G", "联通4G", "电信4G", "移动4G"]
			}
		];
        //在循环的对象上绑定一个属性index，记录选中的a

 export default{
     name:'Phone',
     data(){
         return{
            list:data,
            index:-1,
            choose:{} //{0:value,1:value,2:value}
         }
     },
     methods:{
        chooseHandle(item,i,option,rowIndex){
            console.log(item,i)
           // item.index=i;
            this.$set(item,'index',i)
            // this.choose.push(option)
            this.$set(this.choose,rowIndex,option)
            this.choose[rowIndex]=option;
            // this.index=i
        } ,
		remove(key){
         	// 虽然删掉了，但是视图不更新
					//delete this.choose[index];
					this.$delete(this.choose,key)

					this.$set(this.list[key],'index',-1)

					console.log(this.choose);
	   
		}
     }
 }   
</script>