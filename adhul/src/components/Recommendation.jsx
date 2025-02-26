import React, { useState } from "react";
import "./Recommendation.css";

const Recommendation = ({ symptoms }) => {
  const [routine, setRoutine] = useState([]);
  const [showRoutine, setShowRoutine] = useState(false);

  const lifestyleRecommendations = {
    fatigue: [
      "💧 Start your day with a glass of warm lemon water.",
      "🧘‍♂️ Do 5-10 minutes of morning stretching.",
      "🥗 Include iron-rich foods in your breakfast.",
      "🛌 Get at least 7-8 hours of sleep for better recovery."
    ],
    stress: [
      "🧘 Practice 10 minutes of deep breathing.",
      "🌿 Drink herbal tea in the evening for relaxation.",
      "📵 Reduce screen time 1 hour before bed.",
      "🎵 Listen to calming music or engage in a relaxing hobby."
    ],
    indigestion: [
      "🥗 Eat smaller meals and chew food slowly.",
      "🚶 Walk for 10 minutes after eating.",
      "🚫 Avoid eating heavy meals late at night.",
      "🍵 Drink ginger or peppermint tea to aid digestion."
    ],
    headache: [
      "💆 Massage your temples with essential oils like peppermint or lavender.",
      "🥤 Stay hydrated; dehydration can trigger headaches.",
      "🌞 Avoid bright screens and rest in a dim-lit room.",
      "🛏️ Get adequate rest and avoid excessive caffeine."
    ],
    insomnia: [
      "🛏️ Create a consistent bedtime routine.",
      "📖 Read a book instead of using screens before sleeping.",
      "🍵 Drink chamomile tea to promote relaxation.",
      "🕯️ Keep your bedroom cool, dark, and quiet for better sleep."
    ],
    musclePain: [
      "🏋️‍♂️ Stretch and do light exercises to loosen muscles.",
      "🛀 Take a warm bath with Epsom salts.",
      "💆 Massage sore areas with essential oils.",
      "🛌 Ensure proper rest and avoid overexertion."
    ],
    coldAndFlu: [
      "🍯 Drink warm honey and lemon tea for throat relief.",
      "💨 Use a humidifier to keep airways moist.",
      "🥣 Eat warm soups and nutrient-rich meals to boost immunity.",
      "🛌 Get plenty of rest to allow your body to heal."
    ],
    jointPain: [
      "🏊 Try low-impact exercises like swimming or yoga.",
      "🛀 Apply hot and cold compresses to relieve stiffness.",
      "🍣 Eat omega-3-rich foods like fish and flaxseeds.",
      "💆 Consider physiotherapy or gentle stretching."
    ]
  };

  const generateRoutine = () => {
    let recommendations = [];

    symptoms.forEach(symptom => {
      if (lifestyleRecommendations[symptom]) {
        recommendations = [...recommendations, ...lifestyleRecommendations[symptom]];
      }
    });

    if (recommendations.length === 0) {
      recommendations.push("🚀 Stay active, eat healthy, and maintain a balanced routine for overall well-being!");
    }

    setRoutine(recommendations);
    setShowRoutine(true);
  };

  return (
    <div className="recommendation-container">
      <h2>🌟 Personalized Lifestyle Routine</h2>
      <button className="recommendation-btn" onClick={generateRoutine}>
        Generate Recommendations
      </button>
      {showRoutine && (
        <ul className="recommendation-list">
          {routine.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendation;
