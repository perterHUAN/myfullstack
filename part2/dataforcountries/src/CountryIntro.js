import { useState } from 'react'
import CountryIntroContent from './CountryIntroContent';
function CountryIntro({ data }){
    
    const [show, setShow]  = useState(false);
    
    const handleShowChange = (e) => {
        setShow(!show);
    }
    
    return (
        <div>
            {data.name.common}
            <button onClick={handleShowChange}>{show ? 'not show' : 'show'}</button>
            <CountryIntroContent  data={data} show={show} />
        </div>
    )
}

export default CountryIntro;