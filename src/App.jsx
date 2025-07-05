import React from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Alert/Button/Button";

export default function App() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Bienvenue dans React + Vite + Biome + Bulma</h1>
          <Alert
            type="is-warning"
            message="Ceci est un message d'avertissement stylisé avec Bulma."
          />
          <Alert type="is-success" message="Ceci est un message de succès." />
          <Alert message="Notre success sur le scèance d'information" />
        </div>
      </section>

      <section className="section">
        <div className="content">
          <h1 className="title">Bouton personnalisé avec Bulma</h1>

          <Button
            color="is-secondary"
            size="is-medium"
            onClick={() => alert("Clic !")}
          >
            Bouton secondaire
          </Button>

          <Button color="is-success" outlined>
            Bouton succés outline
          </Button>

          <Button color="is-success" fullwidth>
            Pleine largeur
          </Button>
        </div>
      </section>
    </>
  );
}
