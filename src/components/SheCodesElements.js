import styled from "styled-components";

export const CertContainer = styled.div`
width: 100vw;
height: 90vh;
padding:5rem calc((100vw-1300px) / 2);
background: white;
color: black;
`
export const CertWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`
export const CertCard = styled.div`
margin: 0 4rem;
line-height: 2;
width: 80px; 
`

export const CertImage = styled.img`
height: 100px;
min-width: 100px;
max-width:100%;
box-shadow: 8px 8px #fdc500`

export const CertHeading = styled.h1`
font-size: clamo(2rem, 2.5vw, 3rem):
text-align: center;
display: block;
text-align: center;
margin-bottom: 5rem;
padding-top: 100px;
`

export const CertTitle = styled.h2`
font-weight: 400;
font-size: 1.5rem;
`
export const CertInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem; 
text-align: center;
`

export const CertButton = styled.button`
font-size: 15px; 
padding: 8px 20px;
border: 1px solid black;
background-color: transparent;
border-radius: 1.5rem;
transition: 0.2 ease-out;
color: black;
font-family: Phantomsans, sans-serif;
text-color: black;

&:hover {
    background: purple;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: white;
}
`;