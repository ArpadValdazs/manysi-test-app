<?php
/*Необходимо создать базу данных
а также таблицу "Тесты", в которой будут колонки айди, текст и юзернейм*/
$sql = `INSERT INTO tests VALUES (NULL, `.$text.`, `.$username.`)`;
$stmt = $sql->prepare();
$stmt->execute();
