
<?php

    if($_SERVER["REQUEST_METHOD"] == "POST"){

        echo "<table border='1' style='border-collapse: collapse'>";

        $number = htmlspecialchars($_POST["number"]);

        for($row = 1; $row <= $number; $row++){
            echo "<tr>";
            for($col = 1; $col <= $number; $col++){
                echo "<td>" . ($row * $col) . " (" . $row . " " . $col . ")</td>";
            }
            echo "</tr>";
        }

    }

?>