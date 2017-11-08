<template>

      <div class="container">
           <div id="map" refs="map" :style="mapStyle">

           </div>
           <div class="bottomBox" :style="bottomStyle">
                <div class="rescueAddress">
                    救援地点: <span>{{rescueAddress}}</span>
                </div>
                <div class="targetAddress" v-if="rescueType==1">
                    拖车目的地: <span>{{rescueAddress}}</span>
                </div>
                <div class="buttonDiv" @click="submit">
                    发起救援
                </div>
            </div>
            <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
      </div>     

</template>
<script>
import { loadAMap, loadAMapUI } from "util/amap"
import AlertTip from "components/common/alertTip"
import MessageBox from 'components/common/message-box'
const bottomH = 2;
export default {
  name: "rescueMap",
  components: {
    AlertTip
  },
  data() {
    return {
      rescueAddress: "",
      targetAddress: "",
      showAlert: false,
      alertText: "你本次发起的拖车救援，价格为280元，支付后技师将火速赶来，确认救援请点预付按钮"
    };
  },
  mounted() {
    this.initAMap();
  },
  created() {
    this.rescueType = this.$route.params.type;
  },
  computed: {
    mapStyle() {
      return {
        bottom: `${this.rescueType == 1 ? 3 * bottomH : 2 * bottomH}rem`
      }
    },
    bottomStyle() {
      return {
        height: `${this.rescueType == 1 ? 3 * bottomH : 2 * bottomH}rem`
      }
    },
    rescueTypeName(){
        return this.rescueType ==1?'拖车':(this.rescueType==2?'换胎':(this.rescueType==3?'搭电':'困境救援'))
    }
  },
  methods: {
    submit() {
    //   this.showAlert = true;
         MessageBox.confirm(`${this.rescueTypeName}报价`, this.alertText);
    },
    initAMap() {
      loadAMap().then(() => {
        this.map = new AMap.Map("map", { zoom: 19 });
        let _this = this;
        _this.map.plugin(["AMap.Scale"], function() {
          let scale = new AMap.Scale({ liteStyle: true });
          _this.map.addControl(scale);
          scale.show();
        });

        loadAMapUI().then(() => {
          AMapUI.loadUI(["misc/PositionPicker", "overlay/SvgMarker"], function(
            PositionPicker,
            SvgMarker
          ) {
            let center = [118.783634, 32.031278];
            _this.map.setCenter(center);
            //   let myPos = new SvgMarker(
            //     new SvgMarker.Shape.IconFont({
            //       symbolJs: "//at.alicdn.com/t/font_463608_ejz23bzyt0nklnmi.js",
            //       icon: "icon-dingwei4",
            //       size: 40,
            //       offset: [-20, -40],
            //       fillColor: "black"
            //     }),
            //     {
            //       map: _this.map,
            //       position: center,
            //       showPositionPoint: {
            //         color: "transparent"
            //       }
            //     }
            //   );
            let bubble = new SvgMarker(
              new SvgMarker.Shape.IconFont({
                symbolJs: "//at.alicdn.com/t/font_463608_2vd8cuowxhguv7vi.js",
                icon: "icon-qipao",
                size: 160,
                offset: [10, -80],
                fillColor: "#6b6868"
              }),
              {
                map: _this.map,
                position: center,
                iconLabel: {
                  innerHTML: "拖动图标修改报案位置",
                  style: {
                    top: "70px",
                    color: "#fff",
                    fontSize: ".5em"
                  }
                },
                showPositionPoint: false
              }
            );
            let positionPicker = new PositionPicker({
              mode: "dragMarker",
              map: _this.map,
              iconStyle: {
                //自定义外观
                url: "//webapi.amap.com/ui/1.0/assets/position-picker2.png", //图片地址
                size: [48, 48], //要显示的点大小，将缩放图片
                ancher: [24, 40] //锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置
              }
            });
            positionPicker.on("success", function(positionResult) {
              console.log(positionResult);
              let pos = positionResult.position;
              bubble.setPosition(pos);
              _this.rescueAddress = positionResult.nearestPOI;
            });
            positionPicker.start();
          });
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/mixin";
.container {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 101;
  background: #fff;
  #map {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .bottomBox {
    position: absolute;
    bottom: 0;
    width: 100%;

    div {
      padding: 0.2rem;
      box-sizing: border-box;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.9rem;
      height: 2rem;
      line-height: 1.6rem;
      white-space: nowrap; /*不让文字换行*/
    }
    .buttonDiv {
      text-align: center;
      color: #fff;
      background: #2196f3;
      font-size: 1rem;
    }
  }
}
</style>
