import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ArticlesFetch from "./components/ArticlesFetch";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mb-4 mt-5">Breaking News 🚀</h1>
      <Container>
        <ArticlesFetch />
      </Container>
    </div>
  );
}

export default App;
