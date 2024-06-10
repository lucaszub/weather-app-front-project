import "./statistique.css";
import ThermostatIcon from '@mui/icons-material/Thermostat';


export const Statistique = () => {
  return (
    <div className="statistique">
        <div className="left">
            <span className="title"> TEMPERATURE MAX</span>
            <span className="title"> 14°C</span>
            <span className="title"> Bretagne</span>
      

        </div>
        <div className="right">
            <div className="percentage">

            20 %</div>
            <div>
                <ThermostatIcon className="icon" /> 
            </div>
        </div>
        

    </div>
  )
}


