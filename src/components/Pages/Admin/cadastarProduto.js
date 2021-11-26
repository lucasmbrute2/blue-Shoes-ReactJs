import { useState, useEffect } from "react";
import { Api } from "../../../Api/Api";
import "./Admin.css";

export default function CadastarProd(props) {
  const [previewImage, setPreviewImage] = useState("");
  const [marcas, setMarcas] = useState([]);
  const [escolha, setEscolha] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const descricao = event.target.descricao.value;
    const imagem = event.target.imagem.value;
    const preco = Number(event.target.preco.value);
    const cor = event.target.cor.value;
    const marcaId = Number(escolha);
    const tamanho1 = event.target.tamanho.value.split(",");
    const tamanho = [];

    for(let i in tamanho1.length){
      tamanho.push(tamanho1[i])
    }

    console.log(typeof tamanho)

    const payload = {
      nome,
      descricao,
      imagem,
      marcaId,
      preco,
      tamanho,
      cor,
    };

    const response = await Api.post("produto/criar", payload, true);
    if (response.status === 201) {
      alert("Produto Cadastrado Com sucesso");
    }
  };

  const marcasArray = async () => {
    const responseMarca = await Api.getAll("marca/todas", true);
    const marca = await responseMarca.json();
    setMarcas(marca);
  };

  useEffect(() => {
    marcasArray();
  }, []);

  const updatePreview = (event) => {
    setPreviewImage(event.target.value);
  };

  return (
    <div className="cad__main">
      <form className="form__main" onSubmit={handleSubmit}>
        <h1>Cadastrar Produto</h1>
        <label htmlFor="nome" className="form__label">
          Nome:
          <input type="text" id="nome" name="nome" className="form__input" />
        </label>
        <label htmlFor="descricao" className="form__label">
          Descrição:
          <input
            type="text"
            id="descricao"
            name="descricao"
            className="form__input"
          />
        </label>
        <label htmlFor="imagem" className="form__label">
          URL da Imagem:
          <input
            type="text"
            id="imagem"
            name="imagem"
            className="form__input"
            onChange={updatePreview}
          />
          {previewImage ? (
            <div>
              <span className="form__label">Prévia da imagem:</span>
              <br />
              <img
                src={previewImage}
                className="preview-image"
                alt="Prévia da Imagem"
              />
            </div>
          ) : (
            ""
          )}
        </label>
        <div className="label__part">
          <label htmlFor="preco" className="form__label">
            Preço:
            <input
              type="text"
              id="preco"
              name="preco"
              className="form__input input__1"
            />
          </label>
          <label htmlFor="cor" className="form__label">
            Cor:
            <input
              type="text"
              id="cor"
              name="cor"
              className="form__input input__2"
            />
          </label>
        </div>
        <div className="label__part">
          <label className="input__1">
            Escolha A marca
            <select onChange={(e) => setEscolha(e.target.value)}>
              {marcas.map((map) => {
                return <option value={map.id}>{map.nome}</option>;
              })}
            </select>
          </label>
          <label htmlFor="tamanho" className="form__label  input__2">
            Tamanho:
            <input
              type="text"
              id="tamanho"
              name="tamanho"
              className="form__input"
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
