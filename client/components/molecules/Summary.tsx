interface Props {
  name: string | null;
}

const summaries: Map<string, string> = new Map([
  [
    "Synagogue",
    "The synagogue of Dura-Europos was preserved with unique painted wall paintings and ceiling tiles.",
  ],
  [
    "Temple of Atargatis",
    "Built in the first century CE, the Temple of Atargatis is dedicated to the Syrian goddess of fertility.",
  ],
  [
    "Palmyrene Gate",
    "The Palmyrene Gate, dating from the mid-second century BC, is a monumental structure rich with inscriptions.",
  ],
  [
    "Mithraeum",
    "The Mithraeum at Dura-Europos is uniquely located above ground and richly decorated with reliefs and frescoes.",
  ],
  [
    "Christian Building",
    "The Christian building is potentially the oldest surviving Christian house of worship and is notable for the brilliant paintings in its baptistery.",
  ],
]);

const Summary = ({ name }: Props) => {
  if (name == null) {
    return <div></div>;
  }
  return (
    <div className="text-2xl p-5">
      <h4>Summary: {summaries.get(name)}</h4>
    </div>
  );
};

export default Summary;
