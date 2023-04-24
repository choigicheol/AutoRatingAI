import React, { useState, useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { CenterContainer } from "../../styles/commonStyles";
import styled from "styled-components";
import "./KakaoMap.css";
import { convertMapDataToStoreData } from "../../util/util";

function KakaoMap({ selectType, getPlace, getIsMapResult, handleSelectStore }) {
  const { kakao } = window;
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [keyword, setKeyword] = useState("");
  const [position, setPosition] = useState({
    lat: 37.27958020017223,
    lng: 127.11463078567597,
  });

  useEffect(() => {
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(position.lng, position.lat, displayCenterInfo);
    // geocoder.coord2RegionCode(position.lng, position.lat, displayCenterInfo);
  }, [position]);

  function displayCenterInfo(result, status) {
    if (status === kakao.maps.services.Status.OK) {
      let detailAddr = !!result[0].road_address
        ? result[0].road_address.address_name
        : "";
      detailAddr += result[0].address.address_name;
      setKeyword(detailAddr);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") setKeyword(searchInputValue);
  };

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(
      `${keyword} ${selectType}`,
      (data, status, _pagination) => {
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

          map.setBounds(bounds);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          getIsMapResult(false);
          setMarkers([]);
        } else if (status === kakao.maps.services.Status.ERROR) {
          // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
        }
      }
    );
  }, [map, keyword, selectType]);

  return (
    <Container>
      <CenterContainer style={{ width: "100%", marginBottom: "10px" }}>
        <SearchInput
          onChange={(e) => setSearchInputValue(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
          value={searchInputValue}
          placeholder={"주소를 입력해주세요 ex)강남역 or 서울특별시 역삼동"}
        ></SearchInput>
        <SearchButton onClick={() => setKeyword(searchInputValue)}>
          검색
        </SearchButton>
      </CenterContainer>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
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
        level={3}
      >
        {markers.map((marker, idx) => (
          <div key={idx}>
            <MapMarker // 마커를 생성합니다
              position={{ lat: marker.position.lat, lng: marker.position.lng }}
              onClick={(e) => {
                setInfo(marker);
                setTimeout(() => {
                  map.panTo(e.getPosition());
                }, 0);
              }}
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
                yAnchor={2.1}
              >
                <div
                  onClick={() => {
                    console.log(marker);
                    handleSelectStore(convertMapDataToStoreData(marker.data));
                  }}
                  className="customoverlay"
                >
                  <span className="title">{marker.content}</span>
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
  width: 360px;
  padding: 10px 20px;
  flex-direction: column;
  border-radius: 30px;
  /* overflow: hidden; */
`;

const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  padding-left: 5px;
  font-family: BMJUA;
  box-sizing: border-box;
`;

const SearchButton = styled.button`
  width: 50px;
  height: 25px;
  margin-left: 10px;
  border-radius: 4px;
  font-family: BMJUA;
  font-size: 14px;
  background: tomato;
  border: none;
  cursor: pointer;
  color: #ffffff;
`;
