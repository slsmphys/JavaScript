var salary = function() {

    const _ukTaxYear = "2018 - 2019";
    const _ukTaxPersonalAllowance = 11850;
    const _ukTaxPersonalAllowanceMaxSalary = 100000;
    const _ukTaxPersonalAllowanceReducedMaxSalary = 123700;
    const _ukBasicRateTax = 20;
    const _ukBasicRateLimitSalary = 34500;
    const _ukHigherRateTax = 40;
    const _ukHigherRateLimitSalary = 150000;
    const _ukAdditionalRateTax = 45;

    var _salary;
    var _taxableSalary;
    var _incomeTax;
    var _personalAllowance;
    var _nationalInsurance;
    var _pension;
    var _studentLoan;


    calculateIncomeTax = function(salary, pension) {

        _incomeTax = 0;

        _salary = calculateSalaryAfterPensionDeduction(salary, pension);

        _personalAllowance = calculatePersonalAllowance(_salary);

        _taxableSalary = _salary - _personalAllowance;

        if (_taxableSalary > _ukHigherRateLimitSalary) {
            _incomeTax += calculateBasicRateTax(_ukBasicRateLimitSalary);
            _incomeTax += calculateHigherRateTax(_ukHigherRateLimitSalary - _ukBasicRateLimitSalary);
            _incomeTax += calculateAdditionalRateTax(_taxableSalary - _ukHigherRateLimitSalary); 
        } else if (_taxableSalary > _ukBasicRateLimitSalary && _taxableSalary <= _ukHigherRateLimitSalary) {
            _incomeTax += calculateBasicRateTax(_ukBasicRateLimitSalary);
            _incomeTax += calculateHigherRateTax(_taxableSalary - _ukBasicRateLimitSalary);
        } else if (_taxableSalary > 0 && _taxableSalary <= _ukBasicRateLimitSalary) {
            _incomeTax += calculateBasicRateTax(_taxableSalary);
        }

        return _incomeTax
    };

    calculateSalaryAfterPensionDeduction = function(salary, pension) {
        return (salary - (pension/100)* salary);
    };

    calculateBasicRateTax = function (taxableSalary) {
        return taxableSalary * (_ukBasicRateTax / 100);
    };

    calculateHigherRateTax = function (taxableSalary) {
        return taxableSalary * (_ukHigherRateTax / 100);
    };

    calculateAdditionalRateTax = function (taxableSalary) {
        return taxableSalary * (_ukAdditionalRateTax / 100);
    };

    calculatePersonalAllowance = function(salary) {
        if (salary >= _ukTaxPersonalAllowanceReducedMaxSalary) {
            return 0;
        } else if (salary >= _ukTaxPersonalAllowanceMaxSalary && salary <= _ukTaxPersonalAllowanceReducedMaxSalary) {
            return _ukTaxPersonalAllowance * (0.5 (salary - _ukTaxPersonalAllowanceMaxSalary));
        } else {
            return _ukTaxPersonalAllowance;
        }
    }

    return {
        taxCalc: calculateIncomeTax
    };
}();