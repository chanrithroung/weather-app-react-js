import sun from '../assets/images/sun.jpeg'
import sun1 from '../assets/images/sun1.png';
import sun2 from '../assets/images/sun2.avif';

let checkSun = (cloudsCondition) => cloudsCondition <= 50 ? sun1 : cloudsCondition <= 75 ? sun2 : sun;


const City = ({cityname, temperature, cloudsCondition, lowTemperature}) => {
    return <div className="city arial-font">
        <div>
            <span className="city-name">{cityname}</span>
            <h1>{temperature}<span className="sub-tem">{lowTemperature}</span> </h1>
        </div>
        <figure>
            <img src={checkSun(cloudsCondition)} alt="Icon" />
        </figure>
    </div>
}


export default City