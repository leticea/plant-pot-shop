import { useFormContext } from "react-hook-form";
import { Container } from "./styles";

export function AddressForm() {
  const { register } = useFormContext();

  return (
    <Container>
      <input
        className="cep"
        type="number"
        placeholder="CEP"
        {...register("cep", { valueAsNumber: true })}
      />
      <input className="street" placeholder="Rua" {...register("street")} />
      <section>
        <input
          className="number"
          type="number"
          placeholder="Número"
          {...register("number", { valueAsNumber: true })}
        />
        <input
          className="complement"
          placeholder="Complemento"
          {...register("complement")}
        />
      </section>
      <section>
        <input
          className="district"
          placeholder="Bairro"
          {...register("district")}
        />
        <input className="city" placeholder="Cidade" {...register("city")} />
        <input className="state" placeholder="UF" {...register("state")} />
      </section>
    </Container>
  );
}
