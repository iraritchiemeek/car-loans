var carLoansApp = angular.module('carLoansApp', []);

carLoansApp.controller('mainController', ["$scope", function($scope) {


	$scope.repayementCalc = function(loanAmount, interestRate, numberMonths) {
		monthlyRate = (interestRate/12) / 100
		var test =  monthlyRate * (Math.pow((1 + monthlyRate), numberMonths))
		console.log(test)
	}

}])