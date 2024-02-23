import { View, Map,Button,Image } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useState, useEffect } from "react";
import "./index.less";

export default () => {
  const [initMap, setInitMap] = useState(null);

  useLoad(() => {
    const eventChannel =
      Taro.getCurrentPages()[
        Taro.getCurrentPages().length - 1
      ].getOpenerEventChannel();
    eventChannel.on("initMapEvent", function (data) {
      const initialData = data.data || {};
      setInitMap(initialData);
    });
  });
  const mapError = (e) => {
    console.log(e.detail);
  };
  const gotoNavigation = () => {
    const mapCtx = Taro.createMapContext('myMap');
    const { longitude, latitude, title } = initMap || {};
    mapCtx.openMapApp({
      longitude,
      latitude,
      destination:title
    });
  }
  if (!initMap) return null;
  const { longitude, latitude, title = "沧州志英建材", id } = initMap;
  console.log(title);
  return (
    <View className="map-page">
      <View className="btn-group">
        <View className="my-btn" onClick={gotoNavigation}>
          {/* <Image src={require('../../images/concat.png')} className="btn-image" mode="aspectFit"></Image> */}
          <View className="text">导航</View>
        </View>
        <View className="my-btn" onClick={() => { }}>
          {/* <Image src={require('../../images/position.png')} className="btn-image" mode="aspectFit"></Image> */}
          <View className="text">查位置</View>
        </View>
      </View>
      <View className="map-container">
        <View className="fixed-map-container">
          <Map
            id="myMap"
            className="map"
            longitude={longitude}
            latitude={latitude}
            onError={mapError}
            markers={[
              {
                id,
                longitude,
                latitude,
                callout: {
                  content: title,
                  color: "#FA541C",
                  fontSize: 14,
                  bgColor: "#fff",
                  padding: 10,
                  display: "ALWAYS",
                  textAlign: "center",
                },
              },
            ]}
          ></Map>
        </View>
      </View>
    </View>
  );
};
