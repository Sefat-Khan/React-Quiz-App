/* eslint-disable react/prop-types */
import Nav from './nav';
import Styles from './styles/Layout.module.css';
export default function Layout({children}) {
    return(
        <>
          <Nav />
          <main className={Styles.main}>
             <div className={Styles.container}>
                {children}
             </div>
          </main>
        </>
    )
}