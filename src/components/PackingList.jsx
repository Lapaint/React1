import Items from "./Items";

export default function PackingList() {
    return (
        <section>
            <h1>여행 준비 목록</h1>
            <ul>
                <Items name="충전기"/>
                <Items name="여분 옷" isPacked={false}/>
                <Items name="이어폰" isPacked={0}/>
                <Items name="노트북" isPacked={1}/>
                <Items name="텀블러" isPacked={true}/>
            </ul>
        </section>
    )
}   