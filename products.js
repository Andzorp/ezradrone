// Data for each drone
const droneData = {
    t25: {
        title: "DJI AGRAS T25",
        description: "DJI AGRAS T25 redefines standards for compact agricultural drones. Light and nimble, DJI AGRAS T25 can easily be handled by one person. It can carry a spraying payload up to 20 kg[1] or a spreading payload up to 25 kg[1]. DJI AGRAS T25 is equipped with Front and Rear Phased Array Radars, a Binocular Vision System, and a high resolution FPV gimbal camera. DJI AGRAS T25 supports multiple missions, from surveying[2] to spraying and spreading and excels across a variety of terrains.",
        image: "images/file (10).png",
        specs: {
            "Aircraft": [
                "Weight: 25.4 kg (excl. battery), 32 kg (incl. battery)",
                "Max Takeoff Weight for spraying: 52 kg (at sea level)",
                "Max Takeoff Weight for spreading: 58 kg (at sea level)",
                "Max Diagonal Wheelbase: 1925 mm",
                "Dimensions (Unfolded): 2585×2675×780 mm",
                "Dimensions (Arms Unfolded): 1475×1540×780 mm",
                "Dimensions (Folded): 1050×690×820 mm",
                "Hovering Accuracy (RTK enabled): Horizontal ±10 cm, Vertical ±10 cm",
                "Hovering Accuracy (RTK disabled): Horizontal ±60 cm, Vertical ±30 cm",
                "RTK/GNSS Operating Frequency: GPS L1/L2, GLONASS F1/F2, BeiDou B1I/B2I/B3I, Galileo E1/E5b, QZSS L1/L2",
                "Max Configurable Flight Radius: 2000 m",
                "Max Wind Resistance: 6 m/s"
            ],
            "Propulsion System - Motors": [
                "Stator Size: 100×28 mm",
                "KV: 59 rpm/V",
                "Power: 4600 W/rotor"
            ],
            "Propulsion System - Propellers": [
                "Material: Nylon carbon fiber filament",
                "Dimension: 50 inch",
                "Propeller Rotation Diameter: 1270 mm",
                "Quantity: 4"
            ],
            "Dual Atomizing Spraying System - Spray Tank": [
                "Material: Plastic (HDPE)",
                "Volume: 20 L",
                "Operating Payload: 20 kg",
                "Quantity: 1"
            ],
            "Dual Atomizing Spraying System - Sprinklers": [
                "Model: LX8060SZ",
                "Quantity: 2",
                "Nozzle Distance: 1368 mm (Rear Nozzles)",
                "Droplet Size: 50-500 μm",
                "Effective Spray Width: 4-7 m (at 3 m above crops)"
            ],
            "Dual Atomizing Spraying System - Delivery Pumps": [
                "Type: Impeller pump (magnetic drive)",
                "Quantity: 2",
                "Single Pump Flow Rate: 0-12 L/min",
                "Max Flow Rate: 16 L/min (2 sprinklers), 24 L/min (4 sprinklers)"
            ],
            "T25 Spreading System": [
                "Compatible Material Diameter: 0.5-5 mm",
                "Spread Tank Volume: 35 L",
                "Spread Tank Internal Load: 25 kg",
                "Effective Spreading Width: 5-8 m"
            ],
            "Phased Array Radar System": [
                "Model: RD241608RF (forward); RD241608RB (rear)",
                "Terrain Follow Max Slope: 50°",
                "Altitude Detection Range: 1-50 m",
                "Stabilization Working Range: 1.5-30 m",
                "Obstacle Avoidance Sensing Range: 1-50 m",
                "FOV Forward: 360° horizontal, ±45° vertical",
                "Safety Limit Distance: 2.5 m",
                "Sensing Direction: 360° multidirectional sensing"
            ],
            "Binocular Vision System": [
                "Measurement Range: 0.5-29 m",
                "Effective Sensing Speed: ≤10 m/s",
                "FOV: Horizontal 90°, Vertical 106°",
                "Operating Environment: Adequate light and discernible surroundings"
            ],
            "Remote Controller": [
                "Model: RM700B",
                "Operating Frequency: 2.4000-2.4835 GHz, 5.725-5.850 GHz",
                "Max Transmission Distance: 7 km (FCC), 5 km (SRRC), 4 km (MIC/CE)",
                "Screen: 7.02-in LCD, 1920×1200 pixels, 1200 cd/m² brightness",
                "Operating Temperature: -20° to 50° C"
            ],
            "DB800 Intelligent Flight Battery": [
                "Model: DB800 Intelligent Flight Battery",
                "Weight: Approx. 6.6 kg",
                "Capacity: 15500 mAh",
                "Nominal Voltage: 52.22 V"
            ],
            "D6000i Multifunctional Inverter Generator": [
                "Output Channel: DC 42-59.92V/4500W; AC 230V/1500W or 120V/750W",
                "Battery Charging Time: 9-12 mins",
                "Fuel Tank Capacity: 20 L",
                "Starting Method: One-Button Start Switch",
                "Max Power of Engine: 6000 W",
                "Fuel Type: Unleaded gasoline with RON ≥91",
                "Reference Fuel Consumption: 600 ml/kWh",
                "Engine Oil Model: SJ 10W-40"
            ],
            "C8000 Intelligent Charger": [
                "Model Number: CHX101-7000",
                "Dimensions: 300 × 280 × 230 mm",
                "Weight: Approx. 11.5 kg",
                "Input Voltage: 100-240 VAC",
                "Output Voltage: 59.92V",
                "Output Current: 100A max",
                "Charging Time: 9-12 mins (DB800 Battery)",
                "Protection Functions: Over-temperature, over-voltage, under-voltage, short-circuit, and fan stall",
                "Charging Safety: AC wire, power wire, and charge connector protection"
            ],
            "Relay": [
                "Model: RL01-65",
                "Dimensions: 120×110×100 mm",
                "Weight: ≤575 g",
                "Input Voltage: 9 V3 A / 12 V2.5 A / 15 V2 A",
                "Power Consumption: 9 W (SRRC), 12 W (FCC)",
                "Capacity: 6500 mAh",
                "Operating Time: 4 hours",
                "Operating Frequency: 2.4000-2.4835 GHz, 5.725-5.850 GHz",
                "Max Transmission Distance: 7 km (FCC)",
                "Charging Time: 2 hours 20 mins (standard DJI charger)"
            ]
        }
    },
    t50: {
        title: "DJI AGRAS T50",
        description: "DJI AGRAS T50 elevates drone agricultural operations to new heights. It inherits a powerful coaxial twin-rotor propulsion system and a split-type torque resistant structure for next level stability when carrying 40 kg spraying[1] or 50 kg spreading[1] payloads. DJI AGRAS T50 leverages a Dual Atomizing Spraying System, Front and Rear Phased Array Radars, and a Binocular Vision System. DJI AGRAS T50 excels across multiple scenarios, from surveying[2] to spraying and spreading, guaranteeing stable operations and steady performance.",
        image: "images/agras-T50.png",
        specs: {
            "Aircraft": [
                "Weight: 39.9 kg (excl. battery), 52 kg (incl. battery)",
                "Max Takeoff Weight for spraying: 92 kg (at sea level)",
                "Max Takeoff Weight for spreading: 103 kg (at sea level)",
                "Max Diagonal Wheelbase: 2200 mm",
                "Dimensions (Unfolded): 2800×3085×820 mm",
                "Dimensions (Arms Unfolded): 1590×1900×820 mm",
                "Dimensions (Folded): 1115×750×900 mm",
                "Hovering Accuracy (RTK enabled): Horizontal ±10 cm, Vertical ±10 cm",
                "Hovering Accuracy (RTK disabled): Horizontal ±60 cm, Vertical ±30 cm",
                "Max Configurable Flight Radius: 2000 m",
                "Max Wind Resistance: 6 m/s"
            ],
            "Propulsion System - Motors": [
                "Stator Size: 100×33 mm",
                "KV: 48 rpm/V",
                "Power: 4000 W/rotor"
            ],
            "Propulsion System - Propellers": [
                "Material: Nylon carbon fiber filament",
                "Dimension: 54 in (1371.6 mm)",
                "Propeller Rotation Diameter: 1375 mm",
                "Quantity: 8"
            ],
            "Dual Atomizing Spraying System - Spray Tank": [
                "Material: Plastic (HDPE)",
                "Volume: 40 L",
                "Operating Payload: 40 kg",
                "Quantity: 1"
            ],
            "Dual Atomizing Spraying System - Sprinklers": [
                "Model: LX8060SZ",
                "Quantity: 2",
                "Nozzle Distance: 1570 mm (Rear Nozzles)",
                "Droplet Size: 50-500 μm",
                "Effective Spray Width: 4-11 m (at 3 m above the crops)"
            ],
            "Dual Atomizing Spraying System - Delivery Pumps": [
                "Type: Impeller pump (magnetic drive)",
                "Quantity: 2",
                "Single Pump Flow Rate: 0-12 L/min",
                "Max Flow Rate: 16 L/min (2 sprinklers), 24 L/min (4 sprinklers)"
            ],
            "T50 Spreading System": [
                "Compatible Material Diameter: 0.5-5 mm dry granules",
                "Spread Tank Volume: 75 L",
                "Spread Tank Internal Load: 50 kg",
                "Spread Width: 8 m"
            ],
            "Phased Array Radar System": [
                "Model: RD241608RF (forward), RD241608RB (rear)",
                "Terrain Follow: Max slope in mapping-free operation: 50°",
                "Altitude Detection Range: 1-50 m",
                "Stabilization Working Range: 1.5-30 m",
                "Obstacle Sensing Range: 1-50 m",
                "FOV: Forward 360° horizontal, 45° vertical"
            ],
            "Binocular Vision System": [
                "Measurement Range: 0.5-29 m",
                "Effective Sensing Speed: ≤10 m/s",
                "FOV: Horizontal 90°, Vertical 106°",
                "Operating Environment: Adequate light and discernible surroundings"
            ],
            "Remote Controller": [
                "Model: RM700B",
                "Operating Frequency: 2.4000-2.4835 GHz, 5.725-5.850 GHz",
                "Max Transmission Distance: 7 km (FCC), 5 km (SRRC)",
                "Screen: 7.02-in LCD, 1920×1200 pixels, brightness 1200 cd/m²",
                "Operating Temperature: -20° to 50° C"
            ],
            "DB1560 Intelligent Flight Battery": [
                "Model: DB1560 Intelligent Flight Battery (BAX702-30000mAh-52.22V)",
                "Weight: Approx. 12.1 kg",
                "Capacity: 30000 mAh",
                "Nominal Voltage: 52.22 V"
            ],
            "D12000iE Multifunctional Inverter Generator": [
                "Output Channel: DC 42-59.92V/9000W; AC 230V/1500W or 120V/750W",
                "Battery Charging Time: 9-12 mins",
                "Fuel Tank Capacity: 30 L",
                "Starting Method: One-Button Start Switch",
                "Max Power of Engine: 12000 W",
                "Fuel Type: Unleaded gasoline with RON ≥91",
                "Reference Fuel Consumption: 500 ml/kWh",
                "Engine Oil Model: SJ 10W-40"
            ],
            "C10000 Intelligent Power Supply": [
                "Model Number: CSX702-9500",
                "Dimensions: 400 × 266 × 120 mm",
                "Weight: Approx. 11.4 kg",
                "Input/Output: Input (Main): 220-240 VAC, Output: 59.92 VDC MAX, 175 A MAX",
                "Charging Time: 9-12 mins (DB1560 Battery)",
                "Protection Functions: Over-voltage, over-charge, under-voltage, over-temperature",
                "Charging Safety: AC wire, power wire, and charge connector protection"
            ],
            "Relay": [
                "Model: RL01-65",
                "Dimensions: 120×110×100 mm",
                "Weight: ≤575 g",
                "Input Voltage: 9 V3 A / 12 V2.5 A / 15 V2 A",
                "Power Consumption: 9 W (SRRC), 12 W (FCC)",
                "Capacity: 6500 mAh",
                "Operating Time: 4 hours",
                "Operating Frequency: 2.4000-2.4835 GHz, 5.725-5.850 GHz",
                "Max Transmission Distance: 7 km (FCC)",
                "Charging Time: 2 hours 20 mins (standard DJI charger)"
            ]
        }
    }
};

// Function to display specifications in categories or as a simple list
function displaySpecs(specs) {
    const specsContainer = document.getElementById("specsList");
    specsContainer.innerHTML = ""; // Clear existing specs

    if (Array.isArray(specs)) {
        // T25: Display as a simple list
        specs.forEach(spec => {
            const li = document.createElement("li");
            li.textContent = spec;
            specsContainer.appendChild(li);
        });
    } else {
        // T50: Display by category
        for (const [category, items] of Object.entries(specs)) {
            const categoryHeader = document.createElement("h4");
            categoryHeader.className = "spec-category-header";
            categoryHeader.textContent = category;
            specsContainer.appendChild(categoryHeader);

            const ul = document.createElement("ul");
            items.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });
            specsContainer.appendChild(ul);
        }
    }
}

// Function to update page content and highlight the selected drone
function selectDrone(drone) {
    const selectedDrone = droneData[drone];

    // Update image with fade-in effect
    const imageElement = document.getElementById("droneImage");
    imageElement.style.opacity = 0;
    setTimeout(() => {
        imageElement.src = selectedDrone.image;
        imageElement.alt = selectedDrone.title;
        imageElement.style.opacity = 1;
    }, 100);

    // Update text content
    document.getElementById("droneTitle").textContent = selectedDrone.title;
    document.getElementById("droneDescription").textContent = selectedDrone.description;

    // Display specifications
    displaySpecs(selectedDrone.specs);

    // Update active toggle styling
    document.querySelectorAll(".selector-link").forEach(link => link.classList.remove("active"));
    document.querySelector(`.selector-link[data-drone="${drone}"]`).classList.add("active");
}

// Set initial drone based on URL parameter or default to T25
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const drone = params.get("drone") || "t25";
    selectDrone(drone);
};

