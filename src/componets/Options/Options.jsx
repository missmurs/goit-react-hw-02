export default function Options({
  updateFeedback,
  totalFeedback,
  upcloseFeedback,
}) {
  return (
    <div>
      <button type="button" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" onClick={() => upcloseFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
}
