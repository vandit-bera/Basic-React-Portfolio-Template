import avtar from "../Assets/img/avataaars.svg"
function Masthead() {
  return (
    <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img class="masthead-avatar mb-5" src={avtar} alt="..." />
                {/* <!-- Masthead Heading--> */}
                <h1 class="masthead-heading text-uppercase mb-0">Vandit Bera</h1>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p class="masthead-subheading font-weight-light mb-0">FullStack WebDeveloper - Coder</p>
            </div>
        </header>
  )
}

export default Masthead