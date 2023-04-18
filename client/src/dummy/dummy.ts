interface ReviewData {
  name: string;
  imagePath: string;
  content: string;
}

interface StoreData {
  name: string;
  imagePath: string;
  address: string;
  type: string;
  subType: string;
  reviews: ReviewData[];
}

export const storeDummy: StoreData[] = [
  {
    name: "잘구운 피자",
    imagePath: "./western.jpeg",
    address: "경기도 용인시 처인구 명지로 225",
    type: "western",
    subType: "피자",
    reviews: [
      {
        name: "gigi",
        imagePath: "",
        content: "정말 맛있어요! 재방문 의사 있습니다.",
      },
      {
        name: "코끼리사자",
        imagePath: "",
        content:
          "피자 도우가 완전 쫀득하면서 너무 맛있습니당~ㅎ파스타도 너무 맛있네요~이전하고주차하기도 편하고, 분위기도 너무 좋네요",
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
      {
        name: "gigi",
        imagePath: "",
        content: `주차장넓고 깨끗한 매장에 친절한주인 최고의 맛까지~~~ 우와.. 최고의 장소였답니당~ 집이 안산이라는게 늠 아쉽고만요~`,
      },
    ],
  },
  {
    name: "두마리세마리 치킨",
    imagePath: "./korean.jpeg",
    address: "경기도 용인시 처인구 명지로116번길 24-2",
    type: "korean",
    subType: "치킨",
    reviews: [
      {
        name: "gigi",
        imagePath: "",
        content: "테이크아웃 치킨점으로 괜찮지만 점점 비싸지는 아쉽다",
      },
      {
        name: "코끼리사자",
        imagePath: "",
        content: "후라이드치킨이 다소 기름집니다",
      },
      {
        name: "gigi",
        imagePath: "",
        content: `맛있어요`,
      },
    ],
  },
  {
    name: "천리향",
    imagePath: "./chinese.png",
    address: "경기도 용인시 처인구 남동 산26-3",
    type: "chinese",
    subType: "중식당",
    reviews: [
      {
        name: "gigi",
        imagePath: "",
        content:
          "중국짬뽕...추천합니다. 시원한 육수에 땅콩 소스 섞으니...고소함이 입안에 가득...너무 많이 한번에 섞지마시고 조금씩 추가해서 드시는게 좋을 듯. 야채와 큼지막한 해삼이 면의 부드러움과 섞여 냉면의 면 식감하고는 차원이 다른 색다름을 입안가득 선물합니다. 다른 메뉴도 괞찬아요...적극 추천드립니다.",
      },
      {
        name: "코끼리사자",
        imagePath: "",
        content:
          "짜장면은 어릴때 먹던 그 맛이고, 탕수육은 금방해서 그런지 고기도 부드럽고 튀김옷도 정말 맛있음",
      },
      {
        name: "gigi",
        imagePath: "",
        content: `그냥 평범합니다 맛, 손님응대, 위생 평범했습니다만 탕수육이 다소 실망스러웠습니다 퍽퍽하고 질기고... 궁금해서 한 번 방문했으나 재방 의사는 없습니다`,
      },
    ],
  },
  {
    name: "장인의 초밥",
    imagePath: "./japanese.png",
    address: "경기도 용인시 처인구 명지로 60번길 8-10 1층 101호",
    type: "japanese",
    subType: "일식",
    reviews: [
      {
        name: "gigi",
        imagePath: "",
        content:
          "역북 명지대 입구에 있는 작은 스시전문점. 저녁스페샬로 식사를 했는데 맛있습니다. 서비스로 연어 서더리조림, 김 마끼를 주시는데 가성비 좋은 스시집입니다. 별하나뺀건 장국이 식사끝날때까지 나오지 않더군요. 결국 장국은 못먹고 나왔습니다. 그래서 별하나 뺐습니다.",
      },
      {
        name: "코끼리사자",
        imagePath: "",
        content: "말할것도 없이 친절하고 최고로 맛있어요",
      },
      {
        name: "gigi",
        imagePath: "",
        content: `초밥 맛집이네요. 🍣 🍣 사장님 써비스도 주시고,친절하기까지 ㅎ 추천합니다`,
      },
    ],
  },
];
