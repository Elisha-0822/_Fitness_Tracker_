// Handle Daily Goal Submission

let timer;
let seconds = 0;
let isRunning = false;

function updateTimerDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("timerDisplay").textContent = `${mins}:${secs}`;
}


document.getElementById("startBtn").addEventListener("click", () => {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
        seconds++;
        updateTimerDisplay();
      }, 1000);
    }
  });
  
  document.getElementById("pauseBtn").addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
  });
  
  document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(timer);
    seconds = 0;
    isRunning = false;
    updateTimerDisplay();
  });
document.getElementById("goalForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const goal = document.getElementById("goal").value;
    document.getElementById("goalMessage").textContent = `New daily goal of ${goal} steps added!`;
    document.getElementById("goalForm").reset();
  });
  
  // Handle Workout Log Submission
  document.getElementById("logForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const workout = document.getElementById("workout").value;
    const duration = document.getElementById("duration").value;
  
    const list = document.getElementById("workoutList");
    const entry = document.createElement("p");
    entry.innerHTML = `<strong>${workout}</strong> - ${duration} minutes`;
    list.appendChild(entry);
  
    document.getElementById("logForm").reset();
  });
  
  // Display 7-Day Workout Plan
  const workoutPlan = [
    "Day 1: Cardio - 30 mins running",
    "Day 2: Strength Training - Upper body",
    "Day 3: Yoga & Flexibility - 45 mins",
    "Day 4: HIIT - 20 mins intense session",
    "Day 5: Core Workout - Planks, crunches",
    "Day 6: Full Body - Circuit training",
    "Day 7: Rest or Light walk"
  ];
  
  const workoutList = document.getElementById("weeklyWorkout");
  workoutPlan.forEach(day => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = day;
    workoutList.appendChild(li);
  });
  
  // Display 7-Day Diet Plan
  const dietPlan = [
    "Day 1: Oatmeal, Grilled Chicken, Mixed Veggies",
    "Day 2: Smoothie, Quinoa Bowl, Fruit Salad",
    "Day 3: Eggs & Toast, Brown Rice & Beans, Yogurt",
    "Day 4: Avocado Toast, Grilled Fish, Steamed Broccoli",
    "Day 5: Protein Shake, Whole Wheat Pasta, Nuts",
    "Day 6: Cereal & Milk, Veg Stir Fry, Fresh Juice",
    "Day 7: Pancakes (Healthy), Baked Tofu, Berries"
  ];
  
  const dietList = document.getElementById("weeklyDiet");
  dietPlan.forEach(day => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = day;
    dietList.appendChild(li);
  });
  