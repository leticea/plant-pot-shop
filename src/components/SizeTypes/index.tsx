import { Content, Tags } from "./styles";

export function SizeTypes() {
  return (
    <Tags>
      <Content>
        <input type="radio" name="small" id="small" />
        <label htmlFor="small">P</label>
      </Content>
      <Content>
        <input type="radio" name="medium" id="medium" checked />
        <label htmlFor="medium">M</label>
      </Content>
      <Content>
        <input type="radio" name="large" id="large" />
        <label htmlFor="large">G</label>
      </Content>
    </Tags>
  );
}
