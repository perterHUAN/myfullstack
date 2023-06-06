function CountryIntroContent({ data, show }) {
    return (
            <div style={{display: show ? '':'none'}}>
                <h1>{data.name.common}</h1>                
                <div>capital: {data.capital[0]}</div>
                <div>area: {data.area}</div>
                <ul>languages:
                    {
                        Object.values(data.languages).map(item => <li>{item}</li>)
                    }
                </ul>
                <img src={data.flags.png} style={{width: '100px'}}></img>

            </div>
    );
}

export default CountryIntroContent;