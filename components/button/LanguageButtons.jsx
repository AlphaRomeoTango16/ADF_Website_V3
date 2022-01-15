import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes'

function LanguageButton() {
    const { theme } = useTheme()
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <SelectButton>
            <ButtonFr isdarkmode={theme === 'dark'} onClick={() => changeLanguage('fr')}>FR 🇫🇷</ButtonFr>
            <ButtonEn isdarkmode={theme === 'dark'} onClick={() => changeLanguage('en')}>EN 🇬🇧</ButtonEn>
        </SelectButton>
    )
}

export default LanguageButton

const SelectButton = styled.div`
    display: flex;
    font-size: 15px;
`

const ButtonFr = styled.button`
    border-radius: 10px 0px 0px 10px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    background-color: ${({ isdarkmode }) =>
        isdarkmode ? 'black' : 'white'};
    color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
`

const ButtonEn = styled.button`
    border-radius: 0px 10px 10px 0px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    background-color: ${({ isdarkmode }) =>
        isdarkmode ? 'black' : 'white'};
    color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
`