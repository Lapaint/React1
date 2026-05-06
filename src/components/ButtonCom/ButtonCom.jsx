export default function Button({ handle, message, children ,style}) {
  return (
    <button onClick={() => handle({ message })} className={style}>
      {children}
    </button>
  );
}