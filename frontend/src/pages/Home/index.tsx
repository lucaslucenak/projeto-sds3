import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">oi gatinha, você eh muito linda viu?</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <p><img src="coracao.png" alt = "michele muito gata do sorriso lindo"/></p>
                    <Link className="btn btn-primary btn-log" to="/dashboard">
                        Acessar dashboard
                        <p><img src="coracao.png" alt = "michele muito gata do sorriso lindo"/></p>
                    </Link>
                    <p><img src="coracao.png" alt = "michele muito gata do sorriso lindo"/></p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
