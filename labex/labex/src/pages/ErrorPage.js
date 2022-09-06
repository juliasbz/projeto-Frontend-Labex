import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';

function ErrorPage() {
    const navigate = useNavigate();

    return(
        <>
            <h1>Error 400 - Página não encontrada!</h1>
            <button onClick={() => goToHomePage(navigate)}>Voltar para página inicial</button>
        </>
    );
};

export default ErrorPage;