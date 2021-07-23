export function Stack({ stackProps }) {
  return (
    <>
      <h4>
        {stackProps.map(function (stack) {
          return <h4 key={stack}>Chips: {stack}</h4>;
        })}
      </h4>
    </>
  );
}
