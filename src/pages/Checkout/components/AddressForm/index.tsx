import { Container } from "./styles";

export function AddressForm() {
  return (
    <Container>
      <input
            className="cep"
            type="number"
            placeholder="CEP"
          />
          <input className="street" placeholder="Rua" />

          <section>
            <input
              className="number"
              type="number"
              placeholder="Número"
            />
            <input
              className="complement"
              placeholder="Complemento"
            />
          </section>

          <section>
            <input
              className="district"
              placeholder="Bairro"
            />
            <input
              className="city"
              placeholder="Cidade"
            />
            <input className="state" placeholder="UF" />
          </section>
    </Container>
  )
}