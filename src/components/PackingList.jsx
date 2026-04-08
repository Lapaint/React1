import Items from "./Items";

export default function PackingList() {
    return (
        <section>
            <h1>여행 준비 목록</h1>
            <ul>
               <Items name="여분 옷"/>
               <Items name="노트북"/>
               <Items name="텀블러"/>
            </ul>
        </section>
    )
}   