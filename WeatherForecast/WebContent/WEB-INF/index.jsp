<!DOCTYPE html>
<html lang="en" ng-app="weatherApp">
<head>
<title>Weather Channel</title>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">


<link rel="stylesheet"
	href="./webjars/bootstrap/3.3.6/css/bootstrap.css">
<style>
html, body, input, select, textarea {
	font-size: 1.05em !important;
}
</style>

<script src="./webjars/angularjs/1.4.8/angular.js"></script>
<script src="./webjars/angularjs/1.4.8/angular-resource.js"></script>
<script src="./webjars/angularjs/1.4.8/angular-route.js"></script>
<script src="./resources/static/js/app.js"></script>

</head>
<body>

	<header>
		<nav class="navbar navbar-default">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="#/app">Weather Channel</a>
				</div>

				<ul class="nav navbar-nav navbar-right">
					<li><a href="#/app"><i class="fa fa-home"></i>Forecast</a></li>
					<!--<li><a href="#/weather"><i class="fa fa-home"></i>Weather</a></li>-->
				</ul>
			</div>
		</nav>
	</header>

	<div class="container">

		<div ng-view></div>

	</div>

</body>

</html>