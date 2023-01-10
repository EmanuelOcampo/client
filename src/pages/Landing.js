import main from "../assets/images/main.svg"
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo, ProfileButton } from '../assets/components'
import { useAppContext } from '../context/appContext'


const Landing = () => {


    const {user} = useAppContext()

    

  return (
    <Wrapper>
        <main>
        {/* nav bar */}
            <nav className="nav-landing">
                <Logo />
                <div className='nav-right'>
                    <ul>
                    
                        <li><a href="/landing">Home</a></li>
                        <li><a href="/landing">Packages</a></li>
                        <li><a href="/landing">Menus</a></li>
                        <li><a href="/landing">Gallery</a></li>
                    </ul>
                </div>
                {user? <ProfileButton /> : 
                <form action="/register">
                    <div className='nav-btn-right'>
                            <button  className='btn-home btn btn-hero'>
                                    Login / Register
                            </button>                   
                    </div>
                </form>   
                }
               
            </nav>

            {/* content */}
            <div className='container page'>
                <div className="info">
                    <h1><span>MomDad'z</span> Event and catering services</h1>
                    <p>
                        We start with a discussion about your event - your likes, your dislikes and the atmosphere you wish to achieve. We follow up with a customised selection of menus and dishes for you to choose. From there we can fine-tune  every element of your dining experience.
                    </p>
                    <form action="/booking">
                        <div className=''>
                                <button  className='btn-home btn btn-hero'>
                                        booking
                                </button>                   
                        </div>
                    </form> 
                </div>
                <img src={main} alt="job hunt" className='img main-img'/>
            </div>
        </main>
    </Wrapper>
  )

}



export default Landing