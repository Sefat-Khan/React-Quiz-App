

import Styles from './styles/Button.module.css';
export default function Button({className, children, ...rest}) {
    return(
            <>
              <button className={`${Styles.button} ${className}`} {...rest}>
                  {children}
              </button>
            </>
    );
}