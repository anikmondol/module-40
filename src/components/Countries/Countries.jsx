import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [removes, setRemove] = useState([]);



    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);


    const handelVisitedCountries = country =>{
        setVisitedCountries([...visitedCountries, country])
    }

    const handelRemove = (country) =>{
        
        const remaining = removes.filter(remove => remove.cca3 !==  country.cca3)
        setRemove(remaining) 
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country */}
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ol className="Text">
                    {
                        visitedCountries.map((country, idx) => <ol key={idx}>{country.name.common}</ol>)
                    }
                </ol>

            </div>
            {/* display countries */}
            <div className="Countries-Container">
                {
                    countries.map((country, idx) => <Country key={idx} country={country} handelVisitedCountries={handelVisitedCountries}
                    handelRemove={handelRemove}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;