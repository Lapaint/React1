// export default function Item({ name, isPacked }) {
//     if (isPacked) {
//     return <li>{name} ✅</li>;
//   }
//   return <li>{name}</li>;
// }

export default function Item({ name, isPacked }) {
  return (
    <li>
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}