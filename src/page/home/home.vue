<template>
  	<div>
        <nav class="banner">
            <div class="swiper-container" v-if="ads.length">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide ad-banner" v-for="(item, index) in ads" :key="index">
	            		
                        <figure>
                            <img :src="item.imgSrc">
                            <figcaption>{{item.title}}</figcaption>
                        </figure>
		            </div>
		        </div>
		        <div class="swiper-pagination"></div>
		    </div>
        </nav>
        <footer-bar>

        </footer-bar>
    </div>
</template>

<script>
import headTop from '../../components/header/head'
import FooterBar from 'components/footer/footer'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'

export default {
    data(){
        return{
           ads:[{
               title:'迪迪救援1',
               imgSrc:'~images/ads/ad1.jpg'
           },{
               title:'迪迪救援2',
               imgSrc:'~images/ads/ad2.jpg'
           },{
               title:'迪迪救援3',
               imgSrc:'~images/ads/ad3.jpg'
           }]
        }
    },

	mounted(){
       new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        loop: true
		});
    },

    components:{
        headTop,FooterBar
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
    

</style>
