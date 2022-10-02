import './App.css'
import Hero from './components/Hero/Hero'

import {Header, Footer, Container} from './components/index'

const App = () => {
    return(
        <>
            <Header />
            <Container>
                <Hero/>
            </Container>
           { /*<Footer/>*/} 
        </>
    )

}



export default App