import ReactLoading from "react-loading";

const Loading = () => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      zIndex: 20,
    }}
  >
    <ReactLoading type={"spin"} color={"tomato"} height={50} width={50} />
  </div>
);

export default Loading;
