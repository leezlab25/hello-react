import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = numbers => {
    console.log("평균값 계산 중...");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputE1 = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    },[]);  //컴포넌트가 처음 랜더링 될때만 함수 생성
    const onInsert = useCallback((e) => {
        const nextlist = list.concat(parseInt(number));
        setList(nextlist);
        setNumber('');
        inputE1.current.focus();
    }, [number, list]); //number 또는 list가 바뀌었을 때만 함수 생성

    const average = useMemo(() => {
        return getAverage(list);
    }, [list]);
    
    return (
        <div>
            <input value={number} onChange={onChange} ref={inputE1} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {average}
            </div>
        </div>
    );
}

export default Average;