export function Pot({ potProps }) {
  console.log("PotProps: " + potProps);
  return (
    <>
      <potDiv>
        <h4>Pot: {potProps}</h4>
      </potDiv>
    </>
  );
}
