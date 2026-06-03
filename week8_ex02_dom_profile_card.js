<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Profile Card</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }

        #profileCard {
            width: 300px;
            text-align: center;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        #profileImage {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        button {
            margin: 5px;
            padding: 10px;
            cursor: pointer;
        }

        .active-status {
            background-color: lightgreen;
            border: 2px solid green;
        }
    </style>
</head>
<body>

    <div id="profileCard">
        <img
            src="https://placehold.co/100x100"
            alt="Profile Image"
            id="profileImage"
        >

        <h2 id="profileName">John Doe</h2>

        <p id="profileRole">Software Developer</p>

        <p id="profileBio">
            Passionate about coding and learning new technologies.
        </p>

        <button id="updateNameBtn">Update Name</button>
        <button id="updateRoleBtn">Update Role</button>
        <button id="toggleStatusBtn">Toggle Active Status</button>
        <button id="changeImageBtn">Change Image</button>
    </div>

    <script>
        // Update Name
        document.getElementById("updateNameBtn").addEventListener("click", function () {
            const newName = prompt("Enter a new name:");

            if (newName) {
                document.getElementById("profileName").textContent = newName;
            }
        });

        // Update Role
        document.getElementById("updateRoleBtn").addEventListener("click", function () {
            const newRole = prompt("Enter a new role:");

            if (newRole) {
                document.getElementById("profileRole").textContent = newRole;
            }
        });

        // Toggle Active Status
        document.getElementById("toggleStatusBtn").addEventListener("click", function () {
            document.getElementById("profileCard").classList.toggle("active-status");
        });

        // Change Profile Image
        document.getElementById("changeImageBtn").addEventListener("click", function () {
            const newImageURL = prompt("Enter a new image URL:");

            if (newImageURL) {
                document.getElementById("profileImage").src = newImageURL;
            }
        });
    </script>

</body>
</html>