import "./HomeContent.scss";

export default function HomeContent(props) {
  return (
    <div id={props.id} className={`base_home_content ${props.class}`}>
      <div
        className={`container ${
          props.childClass == null ? "" : props.childClass
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
