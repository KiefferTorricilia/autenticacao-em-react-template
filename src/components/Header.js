import { useNavigate } from "react-router-dom";
import { navigateToAdmin, navigateToHome, navigateToLogin, navigateToCrate, navigateToCreateTrip } from "../routes/coordinator";
import styled from "styled-components"
function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Title>Labex</Title>
      <GoToPage onClick={() => navigateToHome(navigate)}>
        Ir para página inicial
      </GoToPage>
      <GoToPage onClick={() => navigateToAdmin(navigate)}>
        Ir para página de admin
      </GoToPage>
      <GoToPage onClick={() => navigateToCrate(navigate)}>
        Criar Viagem
      </GoToPage>
      <GoToPage onClick={() => navigateToLogin(navigate)}>
       Fazer Login
      </GoToPage>
      <GoToPage onClick={() => navigateToCreateTrip(navigate)}>
       Criar Viajem
      </GoToPage>
      
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer=styled.header`
background-image:url('https://img.freepik.com/fotos-premium/fundo-do-espaco-caotico-planetas-estrelas-e-galaxias-no-espaco-sideral-mostrando-a-beleza-da-exploracao-espacial_372999-412.jpg?w=2000');
background-repeat: no-repeat;
background-size:cover;
display:flex;
align-items:center;
justify-content: space-between;
padding: 0 10px;
`
const Title=styled.h1`
color:white;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
`
const GoToPage = styled.button`
background-color: blueviolet;
color: white;
border: none;
padding:8px;
`