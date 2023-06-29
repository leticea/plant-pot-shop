import { useFormContext } from "react-hook-form";
import { Container } from "./styles";

export function AddressForm() {
  const { register } = useFormContext();
  
  return (
    <Container>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register("number")}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register("district")}
      />
      <Input
        placeholder="Cidade"
        {...register("city")}
      />
      <Input
        placeholder="UF"
        className="uf"
        {...register("uf")}
      />
    </Container>
  )
}