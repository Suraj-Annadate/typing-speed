import React from 'react'
import { themeOptions } from '../Utilities/ThemeJSON'
import Select from 'react-select';
import { useTheme } from '../Context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InstagramIcon from '@mui/icons-material/Instagram';




const Footer = () => {
    const { setTheme, theme } = useTheme()

    const handleChange = (e) => {
        console.log(e)
        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value))
    }
    return (
        <div className='footer'>
            <div className="links">
                <a href="https://github.com/Suraj-Annadate"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/suraj-annadate-6a11321a1/"><LinkedInIcon /></a>
                <a href="mailto:suraj.annadate98@gmail.com"><AttachEmailIcon /></a>
                <a href="https://www.instagram.com/surajannadate/"><InstagramIcon /></a>
            </div>
            <div className="themeButton">
                <Select
                    onChange={handleChange}
                    options={themeOptions}
                    menuPlacement='top'
                    defaultValue={{ label: theme.label, value: theme }}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'white'

                        }),
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: theme.background,
                            borderColor: theme.textColor
                        }),
                        option: (baseStyles, state) => {
                            return {
                                ...baseStyles,
                                backgroundColor: state.isFocused ? theme.background : theme.textColor,
                                color: state.isFocused ? theme.textColor : theme.background,
                                cursor: 'pointer'
                            }


                        }

                    }}

                />
            </div>
        </div>
    )
}

export default Footer
