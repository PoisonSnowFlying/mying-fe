import { View, Swiper, SwiperItem, Image,Slot } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });
  const swiperData = [
    {
      alt: "",
      src: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
      type: "image",
    },
    {
      alt: "",
      src: "https://obj.pipi.cn/festatic/fe-gandalf/placerholder-horizontal-cat.png",
      type: "image",
    },
    {
      alt: "",
      src: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
      type: "image",
    },
  ];
  const tabsData = [
    {
      title: "技术开发",
      title2: "小程序开发进阶",
      img: "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg",
      desc: "本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。",
    },
    {
      title: "产品解析",
      title2: "微信小程序直播",
      img: "http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png",
      desc: "微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。",
    },
    {
      title: "运营规范",
      title2: "常见问题和解决方案",
      img: "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg",
      desc: "提高审核质量",
    },
    {
      title: "运营规范",
      title2: "常见问题和解决方案",
      img: "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg",
      desc: "提高审核质量",
    },
    {
      title: "运营规范",
      title2: "常见问题和解决方案",
      img: "http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg",
      desc: "提高审核质量",
    },
  ];

  const swiperItemRender = () => {
    return swiperData.map((item, index) => {
      const { src, type } = item;
      return (
        <SwiperItem key={index}>
          {type === "image" && (
            <Image
              src={src}
              mode="aspectFill"
              className="swiper-item-image"
            ></Image>
          )}
        </SwiperItem>
      );
    });
  };
  const tabsItemRender = () => {
    return tabsData.map((item, index) => {
      const { title, title2, img, desc } = item;
      return (
        <Slot className="tab-content" data-set={item} key={index} name={`tab-content-${index}`}>
          <Image src={img} mode="aspectFill" className="tabs-item-image"></Image>
          <View className="item-title">{title2}</View>
          <View className="item-desc">{desc}</View>
        </Slot>
      );
    });
  };

  return (
    <View className="index">
      <View className="swiper-view">
        <View className="swiper-container">
          <Swiper
            className="swiper-swiper"
            indicatorColor="#000"
            indicatorActiveColor="red"
            circular
            indicatorDots
            autoplay
            interval={2000}
          >
            {swiperItemRender()}
          </Swiper>
        </View>
      </View>
      <mp-tabs
        tabs={tabsData}
        activeTab={0}
        bindtabclick="onTabClick"
        bindchange="onChange"
        swiperClass="weui-tabs-swiper"
        activeClass="tab-bar-title__selected"
        tabUnderlineColor="#07c160"
        tabActiveTextColor="#333333"
        tabInactiveTextColor="#666666"
        tabBackgroundColor="#fff"
        swipeable
        animation
        duration={500}
      >
        {tabsItemRender()}
      </mp-tabs>
    </View>
  );
}
