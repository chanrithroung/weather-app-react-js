import { faCancel, faXmark } from '@fortawesome/free-solid-svg-icons';
import logoSrc from '../assets/images/weather.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
const Header = ({searchPressed, temp}) => {

    const summitSearch = (event) =>  {
        event.preventDefault();
        searchPressed(inputValue);
    }

    const [inputValue, setInputValue] = useState("");
    const [activeValue, setActive] = useState(true);
    return <>
     <header>
        <div className="logo">
            <img src={logoSrc} alt="" />
            <span>just weather</span>
        </div>
        <div className="input-container">
            <form onSubmit={summitSearch}><input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value) } placeholder='Search for cities' /></form>
            {inputValue ? <FontAwesomeIcon className='fa-xmark' onClick={() => setInputValue("")} icon={faXmark} /> : <></>}
        </div>
        <button className='temperature'>
            <span id={activeValue? "temperature-active":""}  onClick={()=> {setActive(true); temp(true)}}  className='fahrenhiet temperature-active' >°F</span>
            <span id={!activeValue? "temperature-active":""} className='celsius' onClick={()=> {setActive(false); temp(false)}} >°C</span>
        </button>
     </header>
    </>
}

export default Header;