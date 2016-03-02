angular.module('FamilyPlusApp').controller('registerController',['$scope','$http'function($scope,$http)
{

	$scope.checked=false;
	$scope.user ={ };
	$scope.err = "";

	$scope.check = function()
	{
		if($scope.checked == false && $scope.user.groupname == undefined || $scope.user.groupname == "")
		{
			$scope.err ="field is required";
			console.log("--mydata--",$scope.err);
			return false;
		}
		else if($scope.checked==true && $scope.user.groupname == undefined || $scope.user.groupname == "")
		{
			$scope.err ="field is required";
			console.log("--mydata--",$scope.err);
			return false;
		}
		else if($scope.checked==true && $scope.user.familyid == undefined || $scope.user.familyid == "")
		{
			$scope.err ="field is required";
			console.log("--mydata--",$scope.err);
			return false;
		}
		else
		{
			$scope.err ="";
			return true;
		}

	}


	$scope.send = function()
	{
		$http({
			method :'post',
			url : 'http://localhost:3001/';
			data : $scope.user;
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 

		}).success(function(data)
		{
			if(data.error)
			{

			}
			else
			{
				console.log('--data--',"seneded");
			}
		});
	}
}]);