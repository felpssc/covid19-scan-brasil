import styled from 'styled-components';

export const Logo = styled.h1`
  color: white;
  font-size: 35px;
  margin-top: 120px;
  display: flex;
  align-items: center;

  @media(max-width: 728px){
    display: block;
    text-align: center;
    font-size: 24px;
    margin-top: 100px;

    img {
      width: 30px;
    }
  }

  span {
    background-image: url('https://cdn.pixabay.com/photo/2016/06/16/04/23/brazil-1460615_1280.jpg');
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: cover;
    margin-left: 7px;
  }

  img {
    margin-right: 0.5rem;
  }
`;

export const CardInfo = styled.div`
  max-width: 800px;
  height: 17rem;
  margin-top: 70px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #7f88d8;
  transform: scale(1.06);

  #mapid { height: 100%; width: 90%; z-index: 0; }

  h4 {
    margin: auto auto;
    color: whitesmoke !important;
    opacity: 0.8;
  }

  @media(max-width: 728px) {
    margin-top: 30px;
    margin-bottom: 30px;
    height: auto;
    display: block;
  }

  div {
    width: 70%;
  }

  div:nth-child(1) {
    h2 {
      color: whitesmoke;
    }
    
    @media(max-width: 728px) {
      width: 100%;
    }

    p {
      color: white;
    }

  }

  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;

    @media(max-width: 728px) {
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 250px;
    }
  }

  > div img {
    width: 250px;
    height: 250px;

    @media(max-width: 728px) {
      width: 100px;
      height: 100px;
    }
  }

`;