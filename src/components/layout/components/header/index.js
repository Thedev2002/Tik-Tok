import s from './Header.module.scss';
import Logo from '~/assets/header/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.logo}>
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>
                <div className={s.search}>
                    <div className={s.input_search}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <FontAwesomeIcon icon={faCircleXmark} />
                        <FontAwesomeIcon icon={faSpinner} />
                    </div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className={s.menu_right}></div>
            </div>
        </div>
    );
}

export default Header;
