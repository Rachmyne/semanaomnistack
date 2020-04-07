import React from 'react';



export default function Header(props) {

    return (        

        /* usando o título

        <header>

            <h1>{props.title}</h1>

        </header>       

        */

       /* usando children */

       <header>

           <h1>{props.children}</h1>

       </header>       

    );

}