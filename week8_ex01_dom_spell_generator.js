<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magical Spell Generator</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }

        #spellArea {
            width: 300px;
            height: 100px;
            margin: 20px auto;
            border: 2px solid #333;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            background-color: lightgray;
        }

        button {
            margin: 10px;
            padding: 10px 15px;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <!-- Task 1 -->
    <h1>Welcome to the Magical Spell Generator!</h1>

    <div id="spellArea">Your spell will appear here...</div>

    <!-- Task 2 -->
    <button id="generateButton">Generate Spell</button>
    <button id="resetButton">Reset</button>

    <ul id="ingredientsList">
        <li>Dragon Scale</li>
        <li>Phoenix Feather</li>
        <li>Unicorn Horn</li>
    </ul>

    <script>
        const spellArea = document.getElementById("spellArea");
        const generateButton = document.getElementById("generateButton");
        const resetButton = document.getElementById("resetButton");
        const ingredients = document.querySelectorAll("#ingredientsList li");

        // Generate a random color
        function getRandomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        // Task 3, 4, and 5
        generateButton.addEventListener("click", () => {
            let countdown = 3;

            spellArea.textContent = countdown;

            const timer = setInterval(() => {
                countdown--;

                if (countdown > 0) {
                    spellArea.textContent = countdown;
                } else {
                    clearInterval(timer);

                    const randomIndex = Math.floor(Math.random() * ingredients.length);
                    const selectedIngredient = ingredients[randomIndex].textContent;

                    spellArea.textContent = `✨ Spell Ingredient: ${selectedIngredient}`;
                    spellArea.style.backgroundColor = getRandomColor();
                }
            }, 1000);
        });

        // Task 6
        resetButton.addEventListener("click", () => {
            spellArea.textContent = "Your spell will appear here...";
            spellArea.style.backgroundColor = "lightgray";
        });
    </script>

</body>
</html>