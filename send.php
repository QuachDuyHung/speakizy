<?php
	$payload = [
		'data' => [
			'title' => "Thank For Subscribing",
			'body' => "Firebase Cloud Messaging for Web",
			'icon' => "https://i.imgur.com/tAeLlik.jpg",
			'image' => "https://i.imgur.com/gcRBAPW.png",
			'url' => "https://www.facebook.com/"
		]
	];

	echo json_encode($payload);
?>