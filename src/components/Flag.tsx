function Flag({ countryCode }: { countryCode: string | undefined }) {
  return (
    <img
      src={`https://flagcdn.com/16x12/${countryCode?.toLowerCase()}.png`}
      width="16"
      height="12"
      alt="Flag"
    />
  );
}

export default Flag;
