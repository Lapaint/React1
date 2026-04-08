// 1. 데이터 배열 정의 
const heroes = [
  '스파이더맨: 피터 파커',
  '아이언맨: 토니 스타크',
  '배트맨: 브루스 웨인',
  '슈퍼맨: 클라크 켄트',
  '헐크: 로버트 브루스 배너'
];

// 2. MovieHeroes 컴포넌트 생성
export default function MovieHeroes() {
  // map 함수를 사용하여 각 데이터를 <li> 태그로 변환
  const listHeroes = heroes.map(hero => <li>{hero}</li>);

  return (
    <section>
      <h1>영화 속 영웅들</h1>
      <ul>
        {/* 중괄호를 사용하여 JavaScript 변수(배열)를 출력 */}
        {listHeroes}
      </ul>
    </section>
  );
}