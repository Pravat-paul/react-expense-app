const ProgressInMonth = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%';
  }
  return (
    <div className="exprense_progress__month">
      <div className="expense_progress__bar">
        <span className="progress_bar_percent" style={{height:barFillHeight}}></span>
      </div>
      <div className="expense_proress__title">
        <p>{props.month}</p>
      </div>
    </div>
  );
};

export default ProgressInMonth;
