import styled from 'styled-components'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    const { theme, setTheme } = useTheme()

    return (
        <FooterContainer>
            <Line isdarkmode={theme === 'dark'} />
            <LabelSwitch onChange={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
                <InputSwitch type="checkbox" />
                <SliderSwitch isdarkmode={theme === 'dark'} data-fa-icon={theme === 'light' ? "" : ""}></SliderSwitch>
            </LabelSwitch>
            <LogoContainer>
                <IconMe href="https://www.linkedin.com/in/arthur-della-faille-46a2815a/"><LinkedInIcon isdarkmode={theme === 'dark'} icon={['fab', 'linkedin']} style={styleIcon} title="LinkedIn" /></IconMe>
                <IconMe href="https://github.com/AlphaRomeoTango16"><GitHubIcon isdarkmode={theme === 'dark'} icon={['fab', 'github']} style={styleIcon} title="GitHub" /></IconMe>
                <IconMe href="https://www.malt.fr/profile/ardellafaille"><MaltIcon isdarkmode={theme === 'dark'} icon={['fab', 'malt']} style={styleIcon} title="Malt" /></IconMe>
            </LogoContainer>
            <CopyrightLine>Copyright ©2021 | All rights reserved, Arthur della Faille.</CopyrightLine>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

const Line = styled.div`
    padding-top: 30px;
    width: 100%;
    border-top: 1px solid;
    border-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
`

const CopyrightLine = styled.div`
    font-family: Quicksand;
    padding-bottom: 10px;
    font-size: 10px;
`

const LogoContainer = styled.div`
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
    width: 90px;
`

const LabelSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin-bottom: 20px;
`

const SliderSwitch = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background-color: #b5b5b5;
    box-shadow: inset 0px 0px 5px 2px #595959;
    -webkit-transition: .4s;
    transition: .4s;
    :before{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ isdarkmode }) =>
        isdarkmode ? 'black' : 'white'};
        font-size: 15px;
        font-family: "Font Awesome 5 Free";
        font-weight: 500;
        content: attr(data-fa-icon);
        color: black
        box-shadow: 0px 0px 2px 2px #595959;
        height: 21px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        border-radius: 20px;
        -webkit-transition: .4s;
        transition: .4s;
    }
`

const InputSwitch = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${SliderSwitch}{
        &::before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px) rotate(1turn);
        }
    }
`

const IconMe = styled.a`
    font-size: 13px;
`

const LinkedInIcon = styled(FontAwesomeIcon)`
    transition: all 0.5s;
    color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    &:hover{
        transform: translateY(-5px);
        color: #0B65C2;
    }
`

const GitHubIcon = styled(FontAwesomeIcon)`
    transition: all 0.5s;
    color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    &:hover{
        transform: translateY(-5px);
        color: #6e5494;
    }
`

const MaltIcon = styled(FontAwesomeIcon)`
    margin-left: -3px;
    transition: all 0.5s;
    color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    &:hover{
        transform: translateY(-5px);
        color: #FC5655;
    }
`

const styleIcon = { fontSize: "2em", textShadow: "2px 2px 2px #CE5937" }