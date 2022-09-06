import { useNavigate } from 'react-router-dom';
import { goToTripDetailsPage } from '../routes/coordinator';

function TripCard(props) {
    const navigate = useNavigate ();

    const {id, name, description, planet, durationInDays, date} = props.trip;
    
    const token = localStorage.getItem("token");
    
    return(
        <>
            <p>Nome: {name}</p>
            <p>Descrição: {description}</p>
            <p>Planeta: {planet}</p>
            <p>Duração: {durationInDays}</p>
            <p>Data: {date}</p>

            {token &&
                <>
                <button onClick={() => goToTripDetailsPage(navigate, id)}>Exibir detalhes</button>
                <button onClick={() => props.removeTrip(id)}>Excluir viagem</button>
                </>
            }
            <hr />
        </>
    );
};

export default TripCard;