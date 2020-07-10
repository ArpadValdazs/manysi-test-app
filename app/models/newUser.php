<?php
/*Необходимо создать базу данных
а также таблицу "Юзеры", в которой будут колонки айди, юзернейм и пароль*/
$sql = `INSERT INTO users VALUES (NULL, `.$username`, `.$password.`)`;
$stmt = $sql->prepare();
$stmt->execute();