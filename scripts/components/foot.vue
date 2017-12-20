<template>
    <footer>
        <div v-for="(foot,i) in footList" :key="i">
            <router-link  :to="{name:foot.name}">
                <i class="iconfont" v-html="foot.icon"></i>
                
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>

<script>
import {mapState} from "vuex";
export default {
	computed:{
		...mapState([
			"footList"
		]),
		...mapState({
			list:"footList"
		})
	}
}
</script>

<style scoped lang="less">
// footer{
// 	position:fixed;
// 	width:100%;
// 	height:153px;
// 	left:0;
// 	bottom:0;
// 	background:#fff;
// 	display:flex;
//     z-index:100;
//     border-top:1px solid #d7d7d7;
// 	div{
// 		flex:1;
// 		height:153px;
// 		color: #777777;
// 		a{
// 			display: block;
// 			width:100%;
// 			height:100%;
// 			display:flex;
// 			flex-direction:column;
// 			box-sizing:border-box;
// 			padding:6px 0;
// 			text-align:center;
// 			font-family:"微软雅黑";
// 			color:#504b22;
// 			i{
// 			width:100%;
// 			height:89px;
// 			// color:#504b22;
// 			line-height:89px;
// 			font-size:68px !important;
// 			}
// 			span{
// 				width:100%;
// 				height:35px;
// 				line-height:35px;
// 				font-size:28px;
				
// 			}
// 		}
// 		.router-link-active{
// 			color:#5a9722 !important;
// 		    border-color:#5a9722;
// 		}
// 		// .ft-active-1{
// 		// 	color:#0dc441;;
// 		// 	border-color:#0dc441;
// 		// }
// 	}
// }
</style>
