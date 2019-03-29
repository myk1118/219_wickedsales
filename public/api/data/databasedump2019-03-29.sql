-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 29, 2019 at 08:30 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `2.19wickedsales`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
<<<<<<< HEAD
  `id` bigint(20) UNSIGNED NOT NULL,
  `products_id` mediumint(8) UNSIGNED NOT NULL,
  `url` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
=======
  `id` bigint(20) unsigned NOT NULL,
  `products_id` mediumint(8) unsigned NOT NULL,
  `url` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
>>>>>>> 255313cd5a27f369eb582bb17abe5967dbac6ddf

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `products_id`, `url`) VALUES
(1, 1, 'images/61Dyzt7uM9L._SL1224_.jpg'),
(2, 2, 'images/wicked_shoes_custom_converse.jpg'),
(3, 2, 'images/article-2323855-19C2226B000005DC-855_634x397.jpg'),
<<<<<<< HEAD
(4, 3, 'images/Wicked-LEAD-28-11-17.jpg'),
(5, 3, 'images/The-National-Touring-Company-of-WICKED-Photo-by-Joan-Marcus-2017.jpg'),
(6, 3, 'images/wicked-movie-release-date.jpg'),
(7, 3, 'images/image-1024x575.jpg');
=======
(4, 3, 'images/wickedbrick.jpg'),
(5, 3, 'images/40877362261_4c1ff7fd54_b.jpg'),
(6, 3, 'images/images.jpg'),
(7, 3, 'images/wickedbrickhat.jpg');
>>>>>>> 255313cd5a27f369eb582bb17abe5967dbac6ddf

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
<<<<<<< HEAD
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `price` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
=======
  `id` mediumint(8) unsigned NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `price` bigint(20) unsigned NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
>>>>>>> 255313cd5a27f369eb582bb17abe5967dbac6ddf

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`) VALUES
(1, 'Wicked Thing', 2000),
(2, 'Wicked Shoes', 42150),
(3, 'Wicked Brick', 525);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
<<<<<<< HEAD
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

=======
  MODIFY `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
>>>>>>> 255313cd5a27f369eb582bb17abe5967dbac6ddf
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
<<<<<<< HEAD
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
=======
  MODIFY `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
>>>>>>> 255313cd5a27f369eb582bb17abe5967dbac6ddf
