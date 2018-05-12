		
<template>

<div class="wrap" id="app">
  <div class="baidu">
   <ul>
     <li>
       <div>
         <input tyoe="checkbox"/>全选
       </div>
        <span>歌单</span>
         <span>歌手</span>
         <span>专辑</span>
     </li>
   </ul>
   	<ul class="list list-body">
					<li class="checkedColor">
						<div><input type="checkbox"></div>
						<span>泡沫</span>
						<span>邓紫棋</span>
						<span>10</span>
					</li>
					<li class="">
						<div><input type="checkbox"></div>
						<span>泡沫</span>
						<span>邓紫棋</span>
						<span>10</span>
					</li>
					<li class="">
						<div><input type="checkbox"></div>
						<span>泡沫</span>
						<span>邓紫棋</span>
						<span>10</span>
					</li>
				</ul>
                <div class="select">
					<span class="selectAll">

						<span>统计：</span>
					</span>
					<div class="others">
						<span><em></em>歌手有：3位</span>
						<span><em></em>专辑有5张</span>
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

  let data=[

  ] 
  export default {
      name:'Music',
      data(){}
  } 
</script>