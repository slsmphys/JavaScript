var banking = function() {

    var _P;     // Principal Amount for Investments or Borrowings
    var _A;     // Accruing Amount
    var _r;     // Interest Rate expressed as decimal
    var _n;     // Number of periods
    var _t;     // Total Time, usually expressed in years


    var calculateLoanRepayments = function(loanAmount, interestRate, numberOfRepayments) {
        _P = loanAmount;
        _r = (interestRate / 100) / 12;
        _n = numberOfRepayments

        return _P * ((_r * Math.pow(1 + _r ,_n))/((Math.pow(1 + _r, _n)) - 1));
    };

    var calculateLoanInterest = function(loanAmount, interestRate, numberOfRepayments) {
        _P = loanAmount;
        _r = interestRate;
        _n = numberOfRepayments;

        return (calculateLoanRepayments(_P, _r, _n) * _n) - _P; 
    };


    
    var calculateAccruedTotal = function(principal, rate, time, periods) {
   
        var x = principal * Math.pow((1 + (rate/100)/periods), (periods * time));
            
            
            
        return x;
    }

    var methodOne = function() {
        return "Hello World!"
    }


    return {
        hello: methodOne(),
        totalBorrowing: calculateAccruedTotal,
        loanRepayments: calculateLoanRepayments,
        loanInterest: calculateLoanInterest
    }
}();
