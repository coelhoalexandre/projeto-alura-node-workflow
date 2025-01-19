// eslint-disable-next-line object-curly-newline
import { describe, expect, it, jest } from "@jest/globals";
import Evento from "../../models/evento.js";

describe("Testando o modelo Autor", () => {
  const objetoEvento = {
    nome: "Evento teste",
    descricao: "descrição do evento teste",
    data: "2023-01-01",
    autor_id: 1,
  };

  it("Deve instanciar um novo evento", () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(expect.objectContaining(objetoEvento));
  });
});
