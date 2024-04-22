import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getFlagUrl = (countryCode) => {
    return `https://flagcdn.com/64x48/${countryCode.toLowerCase()}.png`;
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <section>
      <div className="flex max-w-1024 justify-between items-center px-7 py-5">
        <div>
          <h3>
            <b>View countries</b>
          </h3>
          <h6>page 1 0f 5</h6>
        </div>

        <select className="border rounded-md" onChange={handleRegionChange}>
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-40 flex-col p-10">
        <div className="flex flex-wrap w-full justify-between gap-10">
          {countries.map((country) => {
            if (
              !selectedRegion ||
              country.region === selectedRegion ||
              (selectedRegion === "Americas" &&
                country.subregion === "Caribbean")
            ) {
              return (
                <div
                  key={country.name.common}
                  className="w-full md:w-5/12 lg:w-1/5 mb-5 border rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="border-b p-4">
                    <img
                      src={getFlagUrl(country.cca2)}
                      alt={country.name.common}
                      className="w-15 h-20 mb-2 mx-auto"
                    />
                    <div className="flex flex-col items-center">
                      <h2 className="mb-1">{country.name.common}</h2>
                      <p className="mb-1">
                        Population: <span>{country.population}</span>
                      </p>
                      <p className="mb-1">
                        Region: <span>{country.region}</span>
                      </p>
                      <p>
                        Capital: <span>{country.capital}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};


export default CountryList;
