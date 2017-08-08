var carLoansApp = angular.module('carLoansApp', []);

carLoansApp.controller('mainController', ["$scope", function($scope) {


	$scope.repayementCalc = function(loanAmount, interestRate, loanTerm) {
		monthlyRate = (interestRate/12) / 100
		var repayment =  loanAmount * (monthlyRate * (Math.pow((1+monthlyRate), loanTerm))) / ((Math.pow((1+monthlyRate), loanTerm)) - 1)
		return Math.round(repayment)
	}

}])