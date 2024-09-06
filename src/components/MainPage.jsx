import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast, ToastContainer, Bounce } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";

const MainContainer = styled.div`
  width: 2000px;
  height: 1080.53px;
  background-color: #CE2829;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: flex-start; /* Center vertically */
  align-items: center; /* Center horizontally */
  flex-wrap: wrap;
  background-image: url('Assets/Iteration-1-assets/home-banner.png');
  background-repeat: no-repeat;
  background-position: center 120%;
`;

const H1 = styled.h1`
  width: 100%;
  color: #FAF7F2;
  font-family: "Roboto Condensed";
  font-weight: 900;
  text-align: center;
  font-size: 3rem;
`;

const Paragraph = styled.p`
  font-family: "Roboto Condensed";
  font-size: 86px;
  font-weight: 300;
  line-height: 92px;
  letter-spacing: 1.5px;
  text-align: center;
  color: #FAF7F2;
  margin-bottom: 2%;
`;

const Button = styled.button`
  width: 196.47px;
  height: 52px;
  background-color: #FDC913;
  color: #292929;
  font-family: Roboto Condensed;
  font-weight: 600;
  font-size: 1.3rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 2%;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default function MainPage() {
  const notify = () => {
    toast.success("Success Notification !", {
      position: "top-right"
    });
  };

  return (
    <>
      <MainContainer>
        <H1>Teknolojik Yemekler</H1>
        <Paragraph>KOD ACIKTIRIR,<br/>PİZZA DOYURUR</Paragraph>
        <Link to="/orderform">
          <Button onClick={notify}>ACIKTIM</Button>
        </Link>
      </MainContainer>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}
