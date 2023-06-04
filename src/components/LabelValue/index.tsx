function LabelValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="label-value-row align-left">
      <div>
        <strong>{label}</strong>
      </div>
      <div>{value}</div>
    </div>
  );
}

export default LabelValue;
