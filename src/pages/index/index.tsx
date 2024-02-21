import {
  View,
  Swiper,
  SwiperItem,
  Image,
  Slot,
  Button,
  Map
} from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useState, useEffect } from "react";
import { $ } from "@tarojs/extend";
import "./index.less";

export default function Index() {
  const [tabsSwiperHeight, setTabsSwiperHeight] = useState(200);
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    pageInit();
  }, []);

  useLoad(() => {
    console.log("Page loaded.");
  });

  const pageInit = async () => {
    setTabsHeight();
  };
  const setTabsHeight = async () => {
    const { top } = await $("#mp-tabs").offset();
    const { windowHeight } = Taro.getSystemInfoSync();
    if (top && windowHeight) {
      setTabsSwiperHeight(windowHeight - top - 47 - 60);
    }
  };
  const concatBtnClick = () => {
    Taro.makePhoneCall({
      phoneNumber: "15226737806", //仅为示例，并非真实的电话号码
    });
  };
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
      title: "分类1",
      desc: "本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。",
      list: [
        {
          title:
            "本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
      ],
    },
    {
      title: "分类2",
      desc: "微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。",
      list: [
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
      ],
    },
    {
      title: "分类3",
      desc: "微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。",
      list: [
        {
          title: "这是名称",
          img: "https://obj.pipi.cn/festatic/fe-gandalf/109951165268155864.jpg",
          desc: "这是描述",
          tags: ["标签1", "标签2", "标签3"],
          price: 0.2,
          unit: "米",
        },
      ],
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
      const { list } = item;
      return (
        <Slot
          className="tab-content"
          data-set={item}
          key={index}
          name={`tab-content-${index}`}
        >
          <View className="tab-list">
            {list.map((listItem, listIndex) => {
              const { img, title, desc, tags, price, unit } = listItem;
              return (
                <View
                  className={`tab-item ${
                    listIndex === list.length - 1 && "tab-item-last"
                  }`}
                  key={listIndex}
                >
                  <Image
                    src={img}
                    mode="aspectFill"
                    className="tabs-item-image"
                  ></Image>
                  <View className="tab-flex-middle">
                    <View className="item-title">{title}</View>
                    {/* <View className="item-desc">{desc}</View> */}
                    <View className="item-tags">
                      {tags.map((tagItem, tagIndex) => {
                        return (
                          <View className="sing-tag-text" key={tagIndex}>
                            {tagItem}
                          </View>
                        );
                      })}
                    </View>
                    <View className="item-price">
                      <View className="price-text">价格：</View>
                      <View className="price-price">{price}元</View>
                      <View className="price-unit">/{unit}</View>
                    </View>
                  </View>
                  <View className="tab-flex-right"></View>
                </View>
              );
            })}
          </View>
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
      <View id="mp-tabs">
        <mp-tabs
          tabs={tabsData}
          activeTab={0}
          bindtabclick="onTabClick"
          bindchange="onChange"
          swiperClass="weui-tabs-swiper"
          swiperItemClass="weui-tabs-swiper-item"
          activeClass="tab-bar-title__selected"
          tabUnderlineColor="#07c160"
          tabActiveTextColor="#333333"
          tabInactiveTextColor="#666666"
          tabBackgroundColor="#f5f5f9"
          swipeable
          animation
          duration={500}
          swiperHeight={`${tabsSwiperHeight}px`}
        >
          {tabsItemRender()}
        </mp-tabs>
      </View>
      <View className="btn-group">
          <Button
            type="primary"
            size="mini"
            plain
            className="concat-btn"
            onClick={concatBtnClick}
          >
            联系我
          </Button>
          <Button
            type="primary"
            size="mini"
            plain
            className="concat-btn"
            onClick={concatBtnClick}
          >
            查看位置
          </Button>
      </View>
      <Map longitude={116.224219} latitude={38.177504} />
    </View>
  );
}
