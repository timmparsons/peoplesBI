import React from 'react';

const Loan = (props) => {
  return (
    <div>
      {props.data.map((loan,index) => 
        <p key={index} className={`loan-${index}`}>Loan Guid: {loan.loanGuid}</p>
        )
      }
    </div>
  )
}

export default Loan;