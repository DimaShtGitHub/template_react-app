import { FunctionComponent } from "react";
import { Counter } from "./components/Counter";
import './index.scss'

interface AppProps {
    
}
 
const App: FunctionComponent<AppProps> = () => {

    return ( 
        <div className="app">
            sdafasdf
            <Counter />
        </div>
     );
}
 
export default App;


