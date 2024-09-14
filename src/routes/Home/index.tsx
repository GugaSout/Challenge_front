import './Home.css'

export default function Home(){

    

    return(

    <div className="Home">
      
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Car Doctor</h1>
            <p>
              Saiba tudo sobre a saúde do seu carro com o CarDoctor.
            </p>
          </div>
          <div className="hero-image">
            <img className='carro' src="carro_azul.png" alt="Carro Azul" />
          </div>
        </section>
      </main>
    </div>
  );
}
