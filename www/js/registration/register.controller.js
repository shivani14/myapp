angular.module('FamilyPlusApp').controller('registerController',['$scope',function($scope)
{

	$scope.checked=false;
	$scope.user ={ };
	$scope.err = "";

	$scope.check = function()
	{
		if($scope.user.groupname==undefined)
		{
			$scope.err = "field is required";
			console.log("--data-",false);
			return false;
		}
		else
		{
			$scope.err = "";
			return true;
		}
	}
	$scope.send = function(value)
	{
		$scope.value1 = value;
		console.log("--data--",$scope.value1 + "hii");
	}
}]);