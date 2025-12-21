document.addEventListener("DOMContentLoaded", () => {
        const rows = document.querySelectorAll("tbody tr");

        rows.forEach(row => {
            const scoreDiv = row.querySelector("td div");
            const gradeTd = row.querySelector(".grade");

            const score = Math.floor(Math.random() * 61) + 40;
            scoreDiv.textContent = score;

            let grade = "";
            if (score >= 80) grade = "A";
            else if (score >= 75) grade = "B+";
            else if (score >= 70) grade = "B";
            else if (score >= 65) grade = "C+";
            else if (score >= 60) grade = "C";
            else if (score >= 55) grade = "D+";
            else if (score >= 50) grade = "D";
            else grade = "F";

            gradeTd.textContent = grade;
        });
    });