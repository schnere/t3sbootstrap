<?php
namespace T3SBS\T3sbootstrap\ViewHelpers\Widget\Ajax;

/**
 * This file is part of the "news" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 */
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * Generate additional params required for the pagination
 */
class PaginateAdditionalParamsViewHelper extends AbstractViewHelper
{


	public function initializeArguments()
	{
		parent::initializeArguments();
		$this->registerArgument('page', 'int', 'current page', false, 0);
	}


	/**
	 * @param int $page
	 * @return array
	 */
	public function render()
	{
		$page = (int)$this->arguments['page'];

		if ($page === 0) {
			return [];
		}
		$params = [
			'tx_news_pi1' => [
				'@widget_0' => [
					'currentPage' => $page
				]
			]
		];

		return $params;
	}
}
