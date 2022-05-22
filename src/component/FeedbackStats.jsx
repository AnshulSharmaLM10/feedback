function FeedbackStats({ feedback}) {
    let average = feedback.reduce((acc,cur) => {
        return acc + cur.rating;
    }, 0) / feedback.length;

   average = average.toFixed(1).replace(/[.,]0$/,'');

    return (
      <div className="stats">
        <h4 className="B1">{feedback.length} Reviews</h4>
        <h4 className="B2">Average: {isNaN(average) ? 0: average}</h4>
      </div>
    )
}


export default FeedbackStats