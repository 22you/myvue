<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-once>{{ msg }}</p>
   <div v-html="html"></div>
  <div class="box">
    <button 
     v-for="item,i of news"
     :class="{yellow:i==showIndex}"
      @click="tab(i)"
     >
     {{item.title}}
     </button>

    <div 
    :style=styleFn(i)
     v-for="item,i in news"
    >
      <p v-for="option in item.list">{{option.newsTitlt}}</p>
    </div>
  </div>
  </div>
</template>

<script>
/* {{
表达式  不会解析  用v-html   一定是可信任的 不是用户可输入法人
v-for="item,index in 数组"
根据数据生成重复的解构 就在元素行间写上
 }} */
//  let arr=['leo', 'momo', 'join']
let data=[
  {
  title: '新闻',
  list:[
    {
  newsTitlt: '新闻版块1'
    },
    {
  newsTitlt: '新闻版块2'
    },
    {
    newsTitlt: '新闻版块3'
    }
  ]
},
  {
  title: '娱乐',
  list:[
    {
    newsTitlt: '娱乐版块1'
  },
  {
    newsTitlt: '娱乐版块2'
  },
  {
    newsTitlt: '娱乐版块3'
    }]
},
{
  title: '体育',
  list:[
    {
      newsTitlt: '体育版块1'
    },
    {
      newsTitlt: '体育版块2'
    },
    {
      newsTitlt: '体育版块3'
    }
  ]
}]
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      html: `<div>hello</div>`,
      news:data,
      index:0,
      showIndex: 0//控制要显示的面板
    }
   
  },
   methods: {
      tab(n){
       this.showIndex=n;
      },
      	styleFn(m){
						let display = this.showIndex === m ? 'block' : 'none';
						return {
								display: display
							    }
					}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box{

}
.yellow{
  background:yellow;
}

</style>
