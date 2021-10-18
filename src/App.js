import './App.css';
import {Route} from "react-router-dom";
import NewsPage from "./page/NewsPage";

export const API_KEY = "f0e78fbb6f8a4e798791e3f653810aa3";

function App() {
    // const [category, setCategory] = useState('all');
    // const onSelect = useCallback(category => {
    //     setCategory(category);
    // }, []);

    return (
        <Route path='/:category?' component={NewsPage}/>
    );
}

export default App;
