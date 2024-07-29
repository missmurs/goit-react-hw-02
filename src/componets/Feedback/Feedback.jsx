export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li> Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Postive: {positive}%</li>
      </ul>
    </div>
  );
}
