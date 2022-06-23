<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{ title | title }}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- build:css styles/vendor.min.css -->

	<link rel="stylesheet" href="libs/bootstrap/bootstrap-grid.css">
	<link rel="stylesheet" href="libs/aos/aos.css">
	<link rel="stylesheet" href="libs/swiper/swiper-bundle.min.css">
	

	<!-- endbuild -->

	<!-- build:css styles/main.css -->
	<link rel="stylesheet" href="styles/main.css">
	<!-- endbuild -->

</head>
<body>
	<div class="site-wrapper">
        {% block content %} {% endblock %}
	</div>
    <!-- build:js scripts/jquery.min.js -->
    <script src="libs/jquery.min.js"></script>
    <!-- endbuild -->

    <!-- build:js scripts/bootstrap.min.js -->
    <!-- endbuild -->

	<!-- build:js scripts/vendor.min.js -->
	<script src="./libs/swiper/swiper-bundle.min.js"></script>
	<script src="./libs/aos/aos.js"></script>

	<!-- build:js scripts/main.js -->
	<script src="scripts/main.js" defer></script>
	<!-- endbuild -->
</body>
</html>