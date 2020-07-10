<?php
$dsn = 'mysql:host=127.0.0.1; dbname=manysi_app';
$pdo = new PDO($dsn, 'root', '', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);