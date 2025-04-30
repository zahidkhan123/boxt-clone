import React from 'react';
import './StepProgressBar.css';

export default function StepProgressBar({ step }: { step: number }) {
  return (
    <div className="step-circle-wrapper my-3 font-size-2">
      <div className="step-circle">{step}</div>
    </div>
  );
}

