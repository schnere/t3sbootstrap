<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "t3sbootstrap".
 *
 * Auto generated 10-01-2019 08:34
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = [
	'title' => 'Bootstrap Components',
	'description' => 'Startup extension to use bootstrap 4 classes, components and more out of the box. Example and info: www.t3sbootstrap.de',
	'category' => 'templates',
	'author' => 'Helmut Hackbarth',
	'author_email' => 'typo3@t3solution.de',
	'state' => 'stable',
	'uploadfolder' => true,
	'createDirs' => '',
	'clearCacheOnLoad' => true,
	'version' => '4.5.0-dev',
	'constraints' => [
	'depends' => [
		'typo3' => '10.2.2-10.9.99',
		'gridelements' => '10.0.0-10.99.99',
		'ws_scss' => '1.1.13'
	],
	'conflicts' => [],
	'suggests' => [],
	],
	'autoload' => [
		'psr-4' => ['T3SBS\\T3sbootstrap\\' => 'Classes']
	],
	'clearcacheonload' => true,
	'author_company' => NULL,
];

