import React, { useState } from "react";
import "../styles/DietPlan.css";

const dietRecommendations = {
  fever: "Eat light, easily digestible foods like soups, porridge, and fruits. Stay hydrated with herbal teas and electrolyte drinks.",
  headache: "Include magnesium-rich foods like spinach, nuts, and bananas. Stay hydrated and avoid processed foods.",
  cough: "Drink warm honey-lemon tea, consume ginger, and avoid dairy products that may increase mucus.",
  cold: "Eat vitamin C-rich foods like oranges, kiwis, and bell peppers. Drink plenty of warm fluids.",
  stomachache: "Stick to a bland diet of rice, toast, bananas, and yogurt. Avoid spicy and fatty foods.",
  fatigue: "Consume protein-rich foods like eggs, nuts, and lean meats. Drink plenty of water and avoid excessive caffeine.",
  nausea: "Eat small, frequent meals with bland foods like crackers and ginger-based drinks.",
  dizziness: "Stay hydrated, eat iron-rich foods like spinach, and include B12 sources such as eggs and dairy.",
  soreThroat: "Drink warm herbal teas, eat soft foods like oatmeal, and avoid spicy or acidic foods.",
  diarrhea: "Consume foods high in potassium like bananas and potatoes, and drink plenty of electrolyte-rich fluids.",
  constipation: "Increase fiber intake with whole grains, vegetables, and plenty of water.",
  anxiety: "Incorporate omega-3-rich foods like salmon and flaxseeds, and avoid caffeine and sugary foods."
};

const DietPlan = () => {
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [dietAdvice, setDietAdvice] = useState("");

  const handleGetDietPlan = () => {
    if (selectedSymptom in dietRecommendations) {
      setDietAdvice(dietRecommendations[selectedSymptom]);
    } else {
      setDietAdvice("Please consult a nutritionist for a tailored diet plan.");
    }
  };

  return (
    <div className="diet-plan-container">
      <div className="diet-plan-box">
        <h2>Personalized Diet Plan</h2>

        {/* Symptom Selection Dropdown */}
        <div className="input-group">
          <label>Select Your Symptom</label>
          <select
            value={selectedSymptom}
            onChange={(e) => setSelectedSymptom(e.target.value)}
            className="symptom-dropdown"
          >
            <option value="">-- Select Symptom --</option>
            {Object.keys(dietRecommendations).map((symptom) => (
              <option key={symptom} value={symptom}>
                {symptom.charAt(0).toUpperCase() + symptom.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button className="diet-btn" onClick={handleGetDietPlan} disabled={!selectedSymptom}>
          Get Diet Advice
        </button>

        {dietAdvice && (
          <div className="diet-advice-box">
            <h3>Recommended Diet</h3>
            <p>{dietAdvice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlan;
