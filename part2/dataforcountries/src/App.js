import { useState, useEffect } from 'react'
import  axios  from 'axios'
import CountryIntro from './CountryIntro'; 
import CountryIntroContent from './CountryIntroContent';
function App() {
  const [countries, setCountries]  = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  const handleSearchChange = (e) => {
    console.log("onchange", e.target.value)
    setSearchCountry(e.target.value);
  }

  useEffect(() => {
    
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        //console.log(response);
        setCountries(response.data); 
      })
  }, [])

  const result = searchCountry === '' ? [] : countries.filter(item => item.name.common.indexOf(searchCountry)  != -1);
  return (
  <div>
      find countries:<input value={searchCountry}  onChange={handleSearchChange}/>
      <div>
        {
          result.length > 10 ?  
            <div>
              To many matches, specify another 
            </div> 
            : 
            (result.length === 1 ? <CountryIntroContent data={result[0]} show={true} />: result.map(item =>  <CountryIntro data={item} />))
        }
      </div>
  </div>
    
  )
}
export default App;
