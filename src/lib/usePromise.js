import {useState, useEffect} from 'react';

export default function usePromise(promiseCreator, deps) {
    // 대기 중/완료/실패에 대한 상태 관리

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const process = async () => {
        setLoading(true);
        try {
            const response = await promiseCreator();
            setResponse(response);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        process();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return [loading, response, error];
}