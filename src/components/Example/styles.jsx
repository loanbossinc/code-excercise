import styled from "styled-components";

export const PageContainer = styled.div`
    max-width: 1120px;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Banner = styled.img`
    position: absolute;
    top: 50;
    left: 0;
    height: 320px;
    width: 100%;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: white;
`;

const Item = styled.li`
    align-content: center;
    display: flex;
    flex-direction: row;
    padding: 25px 30px;
    border: 0.5px solid #dcdedc;
    justify-content: space-between;

`;

export const TitleItem = styled(Item)`
&&{
    height: 30px;
}`;

export const InfoCell =styled(Item)`
&&{
    height: 20px;
}`

export const MainTitle = styled.h3`
    font-weight: bold;
    margin: 0;
    padding: 5px 0;
`;