-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2020 a las 03:04:59
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alkemy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `categoria_detalle` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `categoria_detalle`) VALUES
(1, 'Comida'),
(2, 'Servicio'),
(3, 'Limpieza'),
(4, 'Ropa'),
(5, 'Sueldo'),
(6, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operaciones`
--

CREATE TABLE `operaciones` (
  `id_operacion` int(11) UNSIGNED NOT NULL,
  `operacion_tipo` char(10) NOT NULL,
  `operacion_concepto` varchar(100) NOT NULL,
  `operacion_monto` int(10) UNSIGNED NOT NULL,
  `operacion_fecha` date NOT NULL,
  `operacion_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `operaciones`
--

INSERT INTO `operaciones` (`id_operacion`, `operacion_tipo`, `operacion_concepto`, `operacion_monto`, `operacion_fecha`, `operacion_categoria`) VALUES
(1, 'Egreso', 'Internet fibertel', 55000, '2020-10-01', 2),
(3, 'Egreso', 'Netflix', 800, '2020-09-20', 2),
(4, 'Egreso', 'Prime video', 300, '2020-02-12', 2),
(6, 'Egreso', 'Compra semanal', 3000, '2020-07-10', 1),
(7, 'Egreso', 'Compra semanal 2', 4000, '2020-01-10', 1),
(8, 'Egreso', 'Spotify', 4000, '2020-10-10', 2),
(9, 'Egreso', 'Amazon', 1000, '2020-05-10', 2),
(10, 'Ingreso', 'Trabajo Relacion de Depencia', 45000, '2020-09-19', 5),
(13, 'Ingreso', 'Trabajo Freelance', 10000, '2020-03-10', 5),
(14, 'Egreso', 'Cosas para limpiar la cocina', 2000, '2020-09-30', 3),
(38, 'Egreso', 'luz', 7500, '2020-10-09', 2),
(39, 'Ingreso', 'Plazo fijo', 2000, '2020-10-01', 5),
(42, 'Ingreso', 'Loteria', 99446, '2020-10-07', 6),
(43, 'Egreso', 'Celular', 5000, '2020-10-08', 2),
(46, 'Egreso', 'Alquiler', 60000, '2020-10-06', 6),
(47, 'Ingreso', 'Bingo', 60000, '2020-10-15', 6),
(48, 'Ingreso', 'Bingo', 60000, '2020-10-15', 6),
(49, 'Egreso', 'agua', 600, '2020-10-10', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `operaciones`
--
ALTER TABLE `operaciones`
  ADD PRIMARY KEY (`id_operacion`),
  ADD KEY `operacion_categoria` (`operacion_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `operaciones`
--
ALTER TABLE `operaciones`
  MODIFY `id_operacion` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `operaciones`
--
ALTER TABLE `operaciones`
  ADD CONSTRAINT `operaciones_ibfk_1` FOREIGN KEY (`operacion_categoria`) REFERENCES `categoria` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
