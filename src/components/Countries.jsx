import React from 'react'

const Countries = () => {

  const countries = [
    { name: 'Country 1', flagUrl: 'https://flagcdn.com/ro.svg', capital: 'Capital 1', population: 10000000, region: 'Region 1' },
    { name: 'Country 2', flagUrl: 'https://flagcdn.com/us.svg', capital: 'Capital 2', population: 20000000, region: 'Region 2' },
    { name: 'Country 3', flagUrl: 'https://flagcdn.com/gb.svg', capital: 'Capital 3', population: 30000000, region: 'Region 3' },
    // Add more countries as needed
  ];
  return (
    <div className='pl-4 pr-4 md:pl-40 md:pr-40'>
    <div className=' mt-11 flex flex-col md:flex-row justify-between items-center'>
      <div className='text-center md:text-left md:w-1/2'>
        <h1 className='text-2xl mb-2'>View Countries</h1>
        <p>Page 1 of 5</p>
      </div>
      <select className="inline-block text-center md:text-right md:w-0.5/2 mt-4 md:mt-0"  aria-placeholder='select country' id="">
        <option>South America</option>
        <option>North America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Africa</option>
        <option>Antarctica</option>
        <option>Oceania</option>
      </select>
    </div>

    <div className='flex justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
    <div className='text-center'>
      <img src="https://flagcdn.com/cy.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold'>Cyprus</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Nicosia</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>1207361</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
     </div>
     
    <div className='text-center '>
      <img src="https://flagcdn.com/er.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Eritrea</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Asmara</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>5352000</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/lr.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Liberia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Monrovia</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>5057677</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
   </div>

    
    <div className='text-center '>
      <img src="https://flagcdn.com/bm.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold mt-3'>Bermuda</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Hamilton</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>63903</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>


    
    <div className='text-center'>
      <img src="https://flagcdn.com/va.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold'>Vatican City</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Vatican City</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>451</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
    </div>

    
    
    <div className='text-center  '>
      <img src="https://flagcdn.com/ck.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Cook Islands</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Avarua</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>18100</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>


    </div>
    <div className='text-center '>
      <img src="https://flagcdn.com/so.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Somalia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Mogadishu</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>15893219</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='text-center'>
      <img src="https://flagcdn.com/zm.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Zambia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Lusaka</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>18383956</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/ve.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold mt-3'>Venezuela</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Caracas</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>28435943</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/tm.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Turkmenistan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Ashgabat</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>6031187</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/al.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Albania</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Tirana</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>2837743</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/hr.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Croatia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Zagreb</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>4047200</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/gb.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>United Kingdom</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> London</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>67215293</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/sd.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold mt-3'>Sudan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Khartoum</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>43849269</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/tl.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Timor-Leste</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Dili</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>1318442</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>
     
    <div className='text-center'>
      <img src="https://flagcdn.com/cg.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold'>Republic of the Congo</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Brazzaville</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>5657000</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='text-center'>
      <img src="https://flagcdn.com/az.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Azerbaijan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Baku</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>10110116</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>


    </div>
    <div className='text-center'>
      <img src="https://flagcdn.com/ke.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>Kenya</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Nairobi</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>53771300</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/as.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold mt-3'>American Samoa</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Pago Pago</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>55197</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/ci.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold'>Ivory Coast</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Yamoussoukro</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>26378275</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/sn.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold'>Senegal</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Dakar</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>16743930</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/vn.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Vietnam</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Hanoi</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>97338583</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/sv.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>El Salvador</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  San Salvador</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>6486201</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>

    <div className='text-center'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold mt-3'>Afghanistan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Kabul</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 40218234</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/mf.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Saint Martin</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Margos</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>26378275</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>
      
    <div className='text-center '>
      <img src="https://flagcdn.com/lv.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Latvia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Riga</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>1901548</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>


    </div>
    <div className='text-center '>
      <img src="https://flagcdn.com/gt.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Guatemala</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Guatemala City</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>16858333</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/kw.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>Kuwait</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Kuwait City</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>4270563</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/st.svg" alt="" className='w-80 h-30 mt-2' />
      <h1 className='text-2xl font-bold mt-3'>São Tomé and Príncipe</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  São Tomé</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 219161</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/kg.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Kyrgyzstan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Bishkek</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>6591600</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>
      
    <div className='text-center '>
      <img src="https://flagcdn.com/sn.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Senegal</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Dakar</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>16743930</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/vn.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Vietnam</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Hanoi</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>97338583</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/sv.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>El Salvador</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  San Salvador</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>6486201</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>

    <div className='text-center'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold mt-3'>Afghanistan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Kabul</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 40218234</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/mf.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Saint Martin</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Margos</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>26378275</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>
      
    <div className='text-center '>
      <img src="https://flagcdn.com/pl.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Poland</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> WarSaw</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>37950802</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/gu.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Guam</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Hagåtña</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>168783</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/gh.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>Ghana</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Accra</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>31072945</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/lt.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold mt-3'>Lithuania</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Vilnius</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 2794700</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
    </div>
    
    <div className='text-center'>
      <img src="https://flagcdn.com/am.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Armenia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Yerevan</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>6591600</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>
    
    <div className='text-center '>
      <img src="https://flagcdn.com/je.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold'>Jersey</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Saint Helier</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>3100800</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/gd.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Grenada</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>St. George's</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>112519</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/tj.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>Tajikistan</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Dushanbe</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>9537642</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/et.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold mt-3'>Ethiopia</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Addis Ababa</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 114963583</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/eh.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold'>Western Sahara</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>El Aaiún</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>510713</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>
      
    <div className='text-center'>
      <img src="https://flagcdn.com/ma.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Morocco</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Rabat</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>36910558</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>


    </div>
    <div className='text-center '>
      <img src="https://flagcdn.com/pr.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Puerto Rico</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>San Juan</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>3194034</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>


    </div>
    <div className='text-center '>
      <img src="https://flagcdn.com/cx.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>Christmas Island</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Flying Fish Cove</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>2072</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>
    </div>

    <div className='text-center'>
      <img src="https://flagcdn.com/nz.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold mt-3'>New Zealand</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Wellington</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 5084300</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/bn.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Brunei</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Bandar Seri Begawan</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>437483</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Asia</p>
    </div>
      
    <div className='text-center '>
      <img src="https://flagcdn.com/gf.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>French Guiana </h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Cayenne</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 254541</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Americas</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/nu.svg" alt="" className='w-80 h-50' />
      <h1 className='text-2xl font-bold pb-30 pt-0 '>Niue</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Alofi</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>1470</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Oceania</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/ro.svg" alt="" className='w-80 h-50  ' />
      <h1 className='text-2xl font-bold'>Romania </h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>   Bucharest</p>
      <p> <span className="text-green-900 font-bold"> Population:</span>19286123</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Europe</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/sj.svg" alt="" className='w-80 h-30 ' />
      <h1 className='text-2xl font-bold mt-3'>Svalbard and Jan Mayen</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span> Longyearbyen</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 2562</p>
      <p> <span className="text-green-900 font-bold">Region:</span> Europe</p>
    </div>

    <div className='text-center '>
      <img src="https://flagcdn.com/by.svg" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Belarus</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>  Minsk</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 9398861</p>
      <p> <span className="text-green-900 font-bold">Region:</span> Europe</p>
    </div>

    <div className='text-center '>
      <img src="data:image/png;base64,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" alt="" className='w-80 h-50 ' />
      <h1 className='text-2xl font-bold'>Rwanda</h1>
      <p > <span className="text-green-900 font-bold">Capital:</span>Kigali</p>
      <p> <span className="text-green-900 font-bold"> Population:</span> 12000000</p>
      <p> <span className="text-green-900 font-bold">Region:</span>Africa</p>
    </div>
   
  </div>
  </div>
  
  );
}


export default Countries;