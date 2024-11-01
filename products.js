function selectDrone(drone) {
    const droneData = {
        t25: {
            title: "DJI AGRAS T25",
            description: "A highly efficient drone optimized for agricultural applications, providing precision and sustainability.",
            image: "images/file (10).png",
            specs: [
                "Flight Time: Up to 45 minutes",
                "Battery Capacity: 10L",
                "Max Speed: 12 m/s",
                "Spray Width: 5 meters",
                "Control Range: 4km"
            ]
        },
        t50: {
            title: "DJI AGRAS T50",
            description: "Advanced agricultural drone designed for precision spraying and efficient field management.",
            image: "images/agras-T50.png",
            specs: [
                "Flight Time: Up to 60 minutes",
                "Battery Capacity: 12L",
                "Max Speed: 15 m/s",
                "Spray Width: 6 meters",
                "Control Range: 5km"
            ]
        }
    };

    const selectedDrone = droneData[drone];
    document.getElementById("droneTitle").textContent = selectedDrone.title;
    document.getElementById("droneDescription").textContent = selectedDrone.description;
    document.getElementById("droneImage").src = selectedDrone.image;

    // Update specifications
    const specsList = document.getElementById("specsList");
    specsList.innerHTML = "";
    selectedDrone.specs.forEach(spec => {
        const listItem = document.createElement("li");
        listItem.textContent = spec;
        specsList.appendChild(listItem);
    });

    // Update active state for toggle links
    document.querySelectorAll(".selector-link").forEach(link => {
        link.classList.remove("active");
    });
    document.querySelector(`.selector-link[onclick="selectDrone('${drone}')"]`).classList.add("active");
}
