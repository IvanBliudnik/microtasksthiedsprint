import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles";

// site.module.css
// function App() {
//     return (
//         <div>
//             <div className={styles.header}><h1>HEADER</h1></div>
//             <div className={styles.body}>
//                 <div className={styles.nav}>
//                     <div><NavLink to={"/page1"} className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink )}>Page1</NavLink></div>
//                     <div><NavLink to={"/page2"} className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink )}>Page2</NavLink></div>
//                     <div><NavLink to={"/page3"} className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink )}>Page3</NavLink></div>
//                 </div>
//                 <div className={styles.content}>
//                     <Routes>
//                         <Route path={"/"} element={<Navigate to={"/page1"}/>}/>
//                         <Route path="/page1" element={<PageOne/>}/>
//                         <Route path="/page2" element={<PageTwo/>}/>
//                         <Route path="/page3" element={<PageThree/>}/>
//                         <Route path={"/404"} element={<Error404/>}/>
//                         <Route path={"/*"} element={<Navigate to={"/404"}/>}/>
//                     </Routes>
//                 </div>
//             </div>
//             <div className={styles.footer}>abibas 2023</div>
//         </div>
//     )
//         ;
// }

//styled.components
//_styles.tsx
const PATH = {
    PAGE1: "/page1",
    PAGE2: "/page2",
    PAGE3: "/page3",
    PAGE404: "/*",
} as const
function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper>
                        <div>
                        <NavLink to={PATH.PAGE1} >Page1</NavLink>
                        </div>
                    </S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2} >Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3} >Page3</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/page1"}/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>
                        <Route path={PATH.PAGE404} element={<Error404/>}/>

                        {/*<Route path={PATH.PAGE404} element={<Error404/>}/>*/}
                        {/*<Route path={"/*"} element={<Navigate to={"/404"}/>}/>*/}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    )
        ;
}


export default App;
