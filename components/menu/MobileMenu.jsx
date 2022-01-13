import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

function MobileMenu() {
    const { theme } = useTheme()
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);
    const closeSideBar = () => setSideBar(false);

    const ref = useRef();
    useOnClickOutside(ref, () => setSideBar(false));

    function useOnClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener)
            };
        }, [ref, handler])
    }

    return (
        <>
            <MenuButton ref={ref} isdarkmode={theme === 'dark'} isOpen={sideBar === true} onClick={showSideBar}>
                <div isdarkmode={theme === 'dark'} />
                <div isdarkmode={theme === 'dark'} />
                <div isdarkmode={theme === 'dark'} />
            </MenuButton>
            <NavLine isDarkMode={theme === 'dark'} isOpen={sideBar === true}>
                <Link href="/">
                    <LinkContent>
                        <Number>01</Number><Line /><Title>Home</Title>
                    </LinkContent>
                </Link>
                <Link href="/work">
                    <LinkContent>
                        <Number>02</Number><Line /><Title>Work</Title>
                    </LinkContent>
                </Link>
                <Link href="/about">
                    <LinkContent>
                        <Number>03</Number><Line /><Title>About</Title>
                    </LinkContent>
                </Link>
                <Link href="/contact">
                    <LinkContent>
                        <Number>04</Number><Line /><Title>Contact</Title>
                    </LinkContent>
                </Link>
            </NavLine>
        </>
    )
}

export default MobileMenu

const MenuButton = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 1px solid;
        border-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
        padding: 5px;
        background-color: transparent;
        cursor: pointer;
        div {
            position: relative;
            background-color: ${({ isdarkmode }) =>
        isdarkmode ? 'white' : 'black'};
            border-radius: 20px;
            height: 2px;
            width: 75%;
            transition: all 0.3s linear;
            transform-origin: center center;
            :first-child {
                transform: ${({ isOpen }) =>
        isOpen ? 'translateY(6.5px) rotate(45deg)' : 'translateY(0px) rotate(0deg)'};
            }
            :nth-child(2) {
                opacity: ${({ isOpen }) =>
        isOpen ? '0' : '1'};
                transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0px)'};
            }
            :nth-child(3) {
                transform: ${({ isOpen }) =>
        isOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)'};
            }
        }
    }
`
const NavLine = styled.nav`
    width: 50%;
    display: flex;
    padding: 20px;
    z-index: 5;
    align-item: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: ${({ isDarkMode }) =>
        isDarkMode ? 'black' : 'white'};
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    transition: transform 0.5s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? "translateX(0)" : "translateX(-101%)"};
`

const LinkContent = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Line = styled.div`
    background-color: black;
    width: 1px;
    height: 30px;
    margin-left: 20px;
    margin-right: 20px;
`

const Title = styled.p`
    font-family: PlayfairDisplay;
    font-size: 30px;
    margin: 0;
`

const Number = styled.p`
    font-family: Inconsolata;
    font-size: 40px;
    margin: 0;
`