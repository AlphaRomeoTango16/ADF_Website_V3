import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

function LanguageButton() {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <SelectButton>
            <ButtonFr onClick={() => changeLanguage('fr')}>FR 🇫🇷</ButtonFr>
            <ButtonEn onClick={() => changeLanguage('en')}>EN 🇬🇧</ButtonEn>
        </SelectButton>
    )
}

export default LanguageButton

const SelectButton = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    width: 200px;
`

const ButtonFr = styled.button`
    border-radius: 10px 0px 0px 10px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
`

const ButtonEn = styled.button`
    border-radius: 0px 10px 10px 0px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
`