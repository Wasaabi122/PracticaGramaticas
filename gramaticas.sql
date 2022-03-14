-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2022 a las 18:51:35
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gramaticas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gramaticas`
--

CREATE TABLE `gramaticas` (
  `idGrama` int(11) NOT NULL,
  `NOMBRE` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gramaticas`
--

INSERT INTO `gramaticas` (`idGrama`, `NOMBRE`) VALUES
(1, 'G1'),
(2, 'G2'),
(4, 'G3'),
(5, 'G4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reglas`
--

CREATE TABLE `reglas` (
  `idRegla` int(11) NOT NULL,
  `alpha` varchar(32) NOT NULL,
  `beta` varchar(32) NOT NULL,
  `idGrama` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reglas`
--

INSERT INTO `reglas` (`idRegla`, `alpha`, `beta`, `idGrama`) VALUES
(3, 'epsilon', 'W', 1),
(4, 'W', 'Wc', 1),
(5, 'W', 'c', 1),
(6, 'W', 'WWc', 1),
(7, 'W', 'Wcc', 1),
(8, 'W', 'WWWc', 1),
(9, 'WW', 'Wcccc', 1),
(10, 'epsilon', 'W', 2),
(11, 'W', 'Wa', 2),
(12, 'W', 'a', 2),
(13, 'epsilon', 'S', 4),
(14, 'S', 'c', 4),
(15, 'epsilon', 'lamba', 5),
(16, 'epsilon', 'S', 5),
(17, 'S', 'c', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `gramaticas`
--
ALTER TABLE `gramaticas`
  ADD PRIMARY KEY (`idGrama`);

--
-- Indices de la tabla `reglas`
--
ALTER TABLE `reglas`
  ADD PRIMARY KEY (`idRegla`),
  ADD KEY `idGrama` (`idGrama`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gramaticas`
--
ALTER TABLE `gramaticas`
  MODIFY `idGrama` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `reglas`
--
ALTER TABLE `reglas`
  MODIFY `idRegla` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reglas`
--
ALTER TABLE `reglas`
  ADD CONSTRAINT `reglas_ibfk_1` FOREIGN KEY (`idGrama`) REFERENCES `gramaticas` (`idGrama`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
