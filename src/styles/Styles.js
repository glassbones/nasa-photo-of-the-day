import styled from "styled-components"

export default

{
    App :styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100vw;
        height: 95vh;
        max-width: 1200px;
    `,

    mainDiv : styled.div`

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 50vh;
        width: 95%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: left;
        
        @media only screen and (min-width: 1200px) {
            height: 80%;
            width:95%
        }
    `,

    MainTxtDiv :styled.div`
        padding: 15px;
        text-align: left;
    `,
}

