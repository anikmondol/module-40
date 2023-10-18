import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);


    const handelVisitedCountries = country =>{
        setVisitedCountries([...visitedCountries, country])
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ol className="Text">
                    {
                        visitedCountries.map((country, idx) => <p key={idx}>{country.name.common}</p>)
                    }
                </ol>

            </div>
            <div className="Countries-Container">
                {
                    countries.map((country, idx) => <Country key={idx} country={country} handelVisitedCountries={handelVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;