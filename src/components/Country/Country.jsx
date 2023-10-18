
import { useState } from 'react';
import './Country.css'
import PropTypes from 'prop-types'

const Country = ({country, handelVisitedCountries}) => {
    // console.log(country);
    const {name, flags,population,area,region,capital, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handelVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className={`Country ${visited && 'Visited'}`}>
            <h4>Name: {name.common}</h4>
            <img className='img' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>capital: {capital? capital: 'no capital'}</p>
            <p>Code: {cca3}</p>
            <button className='button'  onClick={() => {
          handelVisited();
          handelVisitedCountries(country);
        }}>{visited?"Visited":"Going"}</button>
            { visited ? 'I am visited this country.' : "I want to Visited"}
        </div>
    );
};

Country.propTypes ={
    country: PropTypes.object.isRequired,
    handelVisitedCountries: PropTypes.func.isRequired

}

export default Country;