// export default function Item({ name, isPacked }) {
//     if (isPacked) {
//     return <li>{name} ✅</li>;
//   }
//   return <li>{name}</li>;
// }


//텍스트에 중앙선이 생김
// export default function Item({ name, isPacked }) {
//   return (
//     <li>
//       {isPacked ? (
//         <del>
//           {name + ' ✅'}
//         </del>
//       ) : (
//         name
//       )}
//     </li>
//   );
// }


// export default function Item({ name, isPacked }) {
//     return (
//     <li>
//         {name} {isPacked && '✅'}
//     </li>
//     );
// }


export default function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = <del> {name + "✅"} </del>;
    }
    return (
        <li>
            {itemContent}
        </li>
    )

}