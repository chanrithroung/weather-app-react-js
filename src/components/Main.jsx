import City from './City';
const Main = ({cityname, temperatrue, cloudsCondition, lowTemperature}) => {
    return <main>
       <City cityname={cityname} temperature={temperatrue} cloudsCondition={cloudsCondition} lowTemperature={lowTemperature}></City>
     </main>
};

export default Main