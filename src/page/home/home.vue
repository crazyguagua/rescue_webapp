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
                    <router-link class="link" :to="{ path: 'rescueMap/3'}">
                        <i class="iconfont icon-dianpingdadianjiuyuan"></i>
                        <p>搭电</p>
                    </router-link>
                </div>
                <div class="huantai">
                    <router-link class="link" :to="{ path: 'rescueMap/2'}">
                        <i class="iconfont icon-luntai"></i>
                        <p>换胎</p>
                    </router-link>
                </div>
            </div>
            <div class="tuoche">
                 <router-link class="link" :to="{ path: 'rescueMap/1'}">
                <i class="iconfont icon-bendituoche"></i>
                <p>拖车</p>
                 </router-link>
            </div>
            <div class="kunjing">
                 <router-link class="link" :to="{ path: 'rescueMap/4'}">
                <i class="iconfont icon-jiuyuanxiadan"></i>
                <p>困境救援</p>
                 </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import slider from "components/common/scroll/slide";
import scroll from "components/common/scroll/scroll";
export default {
  data() {
    return {
      ads: [
        {
          title: "迪迪救援1",
          imgSrc:
            "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t9706/45/2649333447/201943/cd8cc7d1/59fadef4Nbd052403.jpg!q70.jpg"
        },
        {
          title: "迪迪救援2",
          imgSrc:
            "https://img1.360buyimg.com/da/jfs/t10906/91/2391025823/80723/308d9a16/59f73b9bN53650868.jpg"
        },
        {
          title: "迪迪救援3",
          imgSrc:
            "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t9664/290/2484864507/192653/573b73d/59f7dca2Nb63a0b1b.jpg!q70.jpg"
        }
      ]
    };
  },

  mounted() {},

  components: {
    scroll,
    slider
  },

  computed: {},

  methods: {
    //点击图标刷新页面
    reload() {
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";
$box-height: 5.8rem;
$box-gutter: 0.5rem;
nav {
  background-color: #fff;
  .slider-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-bottom: 0.025rem solid $bc;
  }
  .scroll {
  }
}
.rescue-types {
  .one-row {
    display: flex;
    .dadian,
    .huantai {
      flex: 1;
      justify-content: center;
      height: $box-height;
      text-align: center;
      .link {
        display: block;
        width: 100%;
        height: 100%;
        padding: 1rem 0;
      }
      p {
        color: #fff;
      }
      i {
        font-size: 3rem;
        color: #fff;
      }
    }
    .dadian {
      margin-right: $box-gutter;
      background: #00bcd4;
    }
    .huantai {
      flex: 1;
      background: #485cc5;
    }
  }
  .tuoche,
  .kunjing {
    margin-top: $box-gutter;
    height: $box-height;
    padding: 1rem 2.2rem;
    p {
      color: #fff;
      padding-left: 0.8rem;
    }
    i {
      font-size: 3rem;
      color: #fff;
    }
  }
  .tuoche {
    background: #673ab7;
  }
  .kunjing {
    background: #e91e63;
    p {
      margin-left: -1.2rem;
    }
  }
}
</style>
