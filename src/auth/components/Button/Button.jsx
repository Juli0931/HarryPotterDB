import "./Button.css";

export function Button({ labelText, type, onClick }) {
  return (
    <button className={`${type}-btn`} type={type} id="btn" onClick={onClick}>
      {labelText}
    </button>
  );
}
