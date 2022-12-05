import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Team.css'
import Professor from '../Home/usuario.png'

function Team(){

    return(
        <div>
            <Header/>
            <div className='allPage'>
            
                <div className='head'>
                    <h2 className='Titulo_2'>Professor</h2>   
                </div>
                <div>
                <img src={Professor} />
                </div>
            </div>

            <Footer/>
        </div>
    )

}

export default Team
