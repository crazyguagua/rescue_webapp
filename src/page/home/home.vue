<template>
  	<div>
        <nav class="banner">
            <scroll :data="ads" class="scroll">
                <div>
                    <div class="slider-wrapper">
                        <slider>
                            <div v-for='(item,index) in ads' :key="index">
                                <a href="">
                                    <img :src="item.imgSrc" alt="">
                                </a>
                            </div>
                        </slider>
                    </div>
                </div>
            </scroll>
        </nav>
        <div class="rescue-types">
            <div class="one-row">
                <div class="dadian">
                    搭电
                </div>
                <div class="huantai">
                    换胎
                </div>
            </div>
            <div class="tuoche">
                拖车
            </div>
            <div class="kunjing">
                <a href=""><img src="" alt=""><span>困境救援</span></a> 
            </div>
        </div>
    </div>
</template>

<script>
import slider from 'components/common/scroll/slide'
import scroll from 'components/common/scroll/scroll'
export default {
    data(){
        return{
           ads:[{
               title:'迪迪救援1',
               imgSrc:'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t9706/45/2649333447/201943/cd8cc7d1/59fadef4Nbd052403.jpg!q70.jpg'
           },{
               title:'迪迪救援2',
               imgSrc:'https://img1.360buyimg.com/da/jfs/t10906/91/2391025823/80723/308d9a16/59f73b9bN53650868.jpg'
           },{
               title:'迪迪救援3',
               imgSrc:'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t9664/290/2484864507/192653/573b73d/59f7dca2Nb63a0b1b.jpg!q70.jpg'
           }]
        }
    },

	mounted(){
       
    },

    components:{
        scroll,slider
    },

    computed:{
       
    },

    methods:{
        //点击图标刷新页面
        reload(){
            window.location.reload();
        }
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    $box-height:6.5rem;
    $box-gutter:.5rem;
    nav{
		background-color: #fff;
		.slider-wrapper{
            width: 100%;
            position: relative;
            overflow: hidden;
            border-bottom: 0.025rem solid $bc;
        }
        .scroll{

        }
    }
    .rescue-types{
        .one-row{
            display: flex;
            .dadian,.huantai{
                flex: 1;
                justify-content: center;
                height: $box-height;
            }
            .dadian{
                 margin-right:  $box-gutter;
                 background: #cccccc;
            }
            .huantai{
                flex:1;
                background: pink;

            }
        }
        .tuoche,.kunjing{
            margin-top: $box-gutter;
            height:$box-height;
            background: purple;
        }

    }

</style>
