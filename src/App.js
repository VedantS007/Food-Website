import React from 'react'
import { GlobalStyle } from './globalStyle'
import { BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero/HeroMain';
import Products from './components/Products/ProdMain'
import { productsData, productsDataTwo } from './components/Products/Data';
import Feature from './components/Feature/FeatureMain';
import Footer from './components/Footer/FooterMain';


function App() {
    return (
        <div>
            <Router>
                <GlobalStyle />
                <Hero />
                <Products heading="Choose your favorite" data={productsData}/>
                <Feature />
                <Products heading="Sweet Treats for You" data={productsDataTwo}/>
                <Footer />
            </Router> 
        </div>
    )
}

export default App