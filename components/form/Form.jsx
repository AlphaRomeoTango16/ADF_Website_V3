import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'

function Form() {
    const { theme } = useTheme()

    return (
        <FormWrapper>
            <FormContainer action="https://formspree.io/f/mvodybdl" method="POST">
                <FormTitle>Let's meet up!</FormTitle>
                <FirstContainer>
                    <LabelName htmlFor="lname" />
                    <InputName type="text" id="lname" name="Nom" placeholder="Your Name" required />
                    <LabelEmail htmlFor="email" />
                    <InputEmail type="text" id="email" name="Email" placeholder="Your Email" require />
                </FirstContainer>
                <SecondContainer>
                    <LabelText htmlFor="message" />
                    <TextArea type="text" id="message" name="Message" placeholder="Your Message" required />
                </SecondContainer>
                <InputButton isdarkmode={theme === 'dark'} type="submit" value="Send">
                    Send
                    <EnvelopeIcon isdarkmode={theme === 'dark'} icon={['fas', 'envelope-open-text']} /><EnvelopeCloseIcon icon={['fas', 'envelope']} />
                </InputButton>
            </FormContainer>
        </FormWrapper>
    )
}

export default Form


const FormWrapper = styled.div`
    width: 100%;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 0;
`

const FormTitle = styled.h2`
    font-family: Quicksand;
    font-weight: bold;
    font-size: 25px;
    padding-top: 20px;
    padding-left: 20px;
    margin-top: 0;
    margin-bottom: 20px;
`

const FirstContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const SecondContainer = styled.div`
    display: flex;
`

const LabelName = styled.label`
`

const InputName = styled.input`
width: 50%;
font-family: Quicksand;
height: 50px;
padding-left: 20px;
margin: 10px;
background: transparent;
border-top: none;
border-right: none;
border-left: none;
`

const LabelEmail = styled.label`
`

const InputEmail = styled.input`
font-family: Quicksand;
width: 50%;
height: 50px;
padding-left: 20px;
margin: 10px;
background: transparent;
border-top: none;
border-right: none;
border-left: none;
`

const LabelText = styled.label`
`

const TextArea = styled.textarea`
font-family: Quicksand;
width: 100%;
height: 200px;
background-color: transparent;
padding-left: 20px;
padding-top: 20px;
margin: 10px;
`

const InputButton = styled.button`
display: inline-block;
margin: 10px;
position: relative;
height: 50px;
font-family: Quicksand;
font-size: 15px;
font-weight: bold;
cursor: pointer;
border: 1px solid;
border-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
background: transparent;
z-index: 0;
overflow: hidden;
transition: 0.08s ease-in;
:hover{
    color: ${({ isdarkmode }) =>
        isdarkmode ? 'black' : 'white'};
}
:before{
    content: '';
    position: absolute;
    background: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
    bottom: 0;
    left: 0;
    top: 0;
    right: 100%;
    z-index: -1;
    transition: right .3s;
}
:hover:before{
    right: 0;
    color: black;
}
`

const EnvelopeIcon = styled(FontAwesomeIcon)`
    margin-left: 10px;
    ${InputButton}:hover & {
        display: none;
    }
`

const EnvelopeCloseIcon = styled(FontAwesomeIcon)`
    margin-left: 10px;
    display: none;
    ${InputButton}:hover & {
        display: inline-block;
    }
`