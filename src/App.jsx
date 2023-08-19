import './App.css';
import SectionProducts from './section-productos/section-productos';
import HeaderVertical from './header-vertical/header-vertical';
import HeaderHorizontal from './header-horizontal/header-horizontal';

function App() {

    return (
        <>  
            <div className="column">
                <div>
                    <HeaderHorizontal />
                </div>
                
                <div className='estructura'>
                    <HeaderVertical />
                    <SectionProducts />
                </div>
            </div>
        </>
    );
}

export default App;







