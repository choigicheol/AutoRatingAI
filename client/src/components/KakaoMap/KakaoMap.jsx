import React, { useState, useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { CenterContainer } from "../../styles/commonStyles";
import styled from "styled-components";
import { convertMapDataToStoreData } from "../../util/util";

function KakaoMap({ selectType, getPlace, getIsMapResult, handleSelectStore }) {
  const { kakao } = window;
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [position, setPosition] = useState({
    lat: 37.27958020017223,
    lng: 127.11463078567597,
  });

  const ps = new kakao.maps.services.Places();

  let isUseBounds = true;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") keywordSearch();
  };

  const categorySearch = () => {
    if (!map) return;
    isUseBounds = false;
    const options = {
      location: new kakao.maps.LatLng(position.lat, position.lng),
      sort: kakao.maps.services.SortBy.DISTANCE,
    };
    ps.categorySearch("FD6", kakaoMapCallback, options);
  };

  const keywordSearch = (selectType) => {
    if (!map) return;
    const options = {
      category_group_code: "FD6",
      location: new kakao.maps.LatLng(
        map.getCenter().getLat(),
        map.getCenter().getLng()
      ),
    };

    if (selectType) {
      isUseBounds = false;
      ps.keywordSearch(selectType, kakaoMapCallback, options);
    } else {
      isUseBounds = true;
      ps.keywordSearch(searchInputValue, kakaoMapCallback, options);
    }
  };

  const kakaoMapCallback = (data, status, _pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      getIsMapResult(true);
      const bounds = new kakao.maps.LatLngBounds();
      let markers = [];
      getPlace(data);
      for (var i = 0; i < data.length; i++) {
        markers.push({
          position: {
            lat: data[i].y,
            lng: data[i].x,
          },
          content: data[i].place_name,
          data: data[i],
        });
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      setMarkers(markers);
      if (isUseBounds) map.setBounds(bounds);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      getIsMapResult(false);
      setMarkers([]);
    } else if (status === kakao.maps.services.Status.ERROR) {
      // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
    }
  };

  const handleClickMarker = (e, marker) => {
    setInfo(marker);
    map.panTo(e.getPosition());
  };

  useEffect(() => {
    categorySearch();
  }, [map, position]);

  useEffect(() => {
    keywordSearch(selectType);
  }, [selectType]);

  return (
    <Container>
      <CenterContainer style={{ width: "100%", marginBottom: "10px" }}>
        <SearchInput
          onChange={(e) => setSearchInputValue(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
          value={searchInputValue}
          placeholder={"위치를 검색해보세요"}
        />
        <SearchButton onClick={() => keywordSearch(null)}>검색</SearchButton>
      </CenterContainer>
      <Map
        center={{
          lat: 37.28140250189864,
          lng: 127.11233321137159,
        }}
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "5px",
          border: "2px solid #e2e2e2",
        }}
        onCreate={setMap}
        onDragEnd={(map) => {
          setPosition({
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          });
        }}
        level={4}
      >
        {markers.map((marker, idx) => (
          <div key={idx}>
            <MapMarker // 마커를 생성합니다
              position={{ lat: marker.position.lat, lng: marker.position.lng }}
              onClick={(e) => handleClickMarker(e, marker)}
              image={{
                src: "./marker.png",
                size: {
                  width: 30,
                  height: 30,
                },
              }}
            />
            {info && info.content === marker.content && (
              <CustomOverlayMap
                position={{
                  lat: marker.position.lat,
                  lng: marker.position.lng,
                }}
                yAnchor={3.6}
              >
                <div>
                  <span
                    style={{
                      background: "#000000",
                      color: "#ffffff",
                      padding: "10px",
                      cursor: "auto",
                    }}
                  >
                    {marker.content}
                  </span>
                  <span
                    onClick={() => {
                      handleSelectStore(convertMapDataToStoreData(marker.data));
                    }}
                    style={{
                      background: "#000000",
                      color: "#ffffff",
                      padding: "10px",
                    }}
                  >
                    {">"}
                  </span>
                </div>
              </CustomOverlayMap>
            )}
          </div>
        ))}
      </Map>
    </Container>
  );
}

export default KakaoMap;

const Container = styled(CenterContainer)`
  /* height: 300px; */
  /* width: 360px; */
  width: 100%;
  flex-direction: column;
  border-radius: 30px;
  /* overflow: hidden; */
`;

const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 5px;
  font-family: BMJUA;
  box-sizing: border-box;
  font-size: 13px;
`;

const SearchButton = styled.button`
  width: 60px;
  height: 30px;
  margin-left: 10px;
  border-radius: 4px;
  font-family: BMJUA;
  font-size: 14px;
  background: tomato;
  border: none;
  cursor: pointer;
  color: #ffffff;
`;
