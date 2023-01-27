<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title inertia>{{ config('app.name', 'Laravel') }}</title>

	@routes
    @viteReactRefresh
	@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
	@inertiaHead
</head>
<body>
	@inertia
</body>
</html>