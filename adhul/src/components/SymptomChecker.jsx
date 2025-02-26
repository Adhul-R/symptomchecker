import React, { useState } from "react";
import "../styles/SymptomChecker.css";

const healthAdviceData = {
  fever: {
    mild: "If you have a mild fever, drink plenty of fluids and get enough rest to support recovery. Over-the-counter medications like paracetamol can help reduce discomfort if needed. Avoid strenuous activities and wear light clothing to stay comfortable. If the fever persists, worsens, or is accompanied by severe symptoms, consult a doctor.",
    moderate: "For a moderate fever, stay well-hydrated and rest as much as possible to aid recovery. Take paracetamol or ibuprofen if the fever causes discomfort, but follow dosage guidelines. Use cool compresses or lukewarm baths to help bring down the temperature. If the fever lasts more than three days or is accompanied by severe symptoms, seek medical advice.",
    veryHigh: "For a very high fever (above 103°F or 39.5°C), seek medical attention immediately. Stay hydrated and use cool compresses or lukewarm sponge baths to help lower body temperature. Avoid heavy blankets or excessive clothing, and take fever-reducing medication like paracetamol if advised. If seizures, confusion, or difficulty breathing occur, go to the emergency room."
  },
  headache: {
    mild: "Stay hydrated and get some rest in a quiet, dimly lit room. Avoid screen time and stress triggers that may worsen the headache. If needed, take over-the-counter pain relievers like paracetamol. Gentle neck stretches or a cold compress on the forehead can also help.",
    moderate: "Drink plenty of fluids and avoid caffeine or strong odors that might worsen the pain. Take a pain reliever like ibuprofen or paracetamol as per the recommended dosage. Apply a cold or warm compress to the head or neck for relief. If the headache persists for more than a day or worsens, consult a doctor.",
    veryHigh: "For a severe headache, seek immediate medical attention, especially if it’s sudden, intense, or accompanied by confusion, vision problems, or weakness. Stay in a quiet, dark room and avoid triggers like noise or bright lights. If symptoms worsen or include nausea, fever, or neck stiffness, go to the emergency room."
  },
  cough: {
    mild: "Stay hydrated with warm fluids like honey tea or broth and avoid irritants like smoke or strong odors. Use lozenges or a humidifier to soothe your throat. If the cough persists for more than a week, monitor for worsening symptoms.",
    moderate: "Drink plenty of warm fluids and take over-the-counter cough syrups or lozenges if needed. Rest your voice and avoid cold or dry air that may trigger further irritation. If coughing worsens, produces thick mucus, or lasts more than 10 days, consult a doctor.",
    veryHigh: "Seek immediate medical help if the cough is persistent, causes breathing difficulty, or is accompanied by chest pain, high fever, or blood in mucus. Stay in a well-ventilated area and avoid allergens or smoke. If breathing becomes strained or symptoms worsen rapidly, go to the emergency room."
  },
  cold: {
    mild: "Stay hydrated and get enough rest to support recovery. Use saline nasal spray or steam inhalation to clear nasal congestion. Eat warm soups or honey with lemon to soothe the throat.",
    moderate: "Drink plenty of fluids and take over-the-counter cold medications if needed for congestion or body aches. Use a humidifier and steam inhalation to relieve nasal blockage. Rest well and avoid cold temperatures to prevent worsening. If symptoms last more than 10 days, see a docto.",
    veryHigh: "Seek medical attention if the cold is accompanied by high fever, breathing difficulties, or chest pain. Stay warm, hydrated, and use prescribed medications if symptoms worsen. If persistent coughing, wheezing, or extreme fatigue occur, visit a doctor immediately."
  },
  stomachache: {
    mild: "Stay hydrated and get enough rest to support recovery. Use saline nasal spray or steam inhalation to clear nasal congestion. Eat warm soups or honey with lemon to soothe the throat.",
    moderate: "Drink plenty of fluids and take over-the-counter cold medications if needed for congestion or body aches. Use a humidifier and steam inhalation to relieve nasal blockage. Rest well and avoid cold temperatures to prevent worsening. If symptoms last more than 10 days, see a doctor.",
    veryHigh: "Seek medical attention if the cold is accompanied by high fever, breathing difficulties, or chest pain. Stay warm, hydrated, and use prescribed medications if symptoms worsen. If persistent coughing, wheezing, or extreme fatigue occur, visit a doctor immediately."
  },
  fatigue: {
    mild: "Get enough rest and maintain a regular sleep schedule. Stay hydrated and eat a balanced diet rich in vitamins and minerals. Light exercise and fresh air can help boost energy levels.",
    moderate: "Ensure proper nutrition and manage stress levels to prevent exhaustion. Take short breaks throughout the day and avoid excessive caffeine or sugar. If fatigue persists for weeks or interferes with daily activities, consult a doctor.",
    veryHigh: "Seek medical attention if fatigue is extreme, persistent, or accompanied by dizziness, shortness of breath, or unexplained weight loss. Avoid strenuous activities and focus on proper hydration and rest. If fatigue worsens despite adequate sleep and nutrition, consult a healthcare provider immediately."
  },
  nausea: {
    mild: "Drink small sips of water, ginger tea, or clear broth to settle your stomach. Avoid strong smells, greasy foods, and sudden movements. Rest in a cool, ventilated area and take deep breaths to ease discomfort.",
    moderate: "Stay hydrated with electrolyte-rich fluids and eat bland foods like crackers or toast. Avoid overeating or lying down immediately after meals. If nausea lasts more than a day or is accompanied by vomiting, consult a doctor.",
    veryHigh: "Seek immediate medical help if nausea is persistent, uncontrollable, or accompanied by severe vomiting, dehydration, dizziness, or confusion. Avoid food and drink until symptoms improve. If nausea is linked to a head injury, poisoning, or intense abdominal pain, go to the emergency room."
  },
  dizziness: {
    mild: "Sit or lie down immediately to prevent falling and rest until the feeling passes. Drink water to stay hydrated, as dehydration can cause dizziness. Avoid sudden movements and get up slowly from sitting or lying positions.",
    moderate: "Eat a light snack if dizziness is due to low blood sugar and stay in a cool, quiet place. Avoid bright lights, excessive screen time, or stressful situations. If dizziness occurs frequently or lasts for hours, consult a doctor.",
    veryHigh: "Seek immediate medical attention if dizziness is severe, persistent, or accompanied by fainting, chest pain, blurred vision, or difficulty speaking. Avoid driving or operating heavy machinery. If dizziness is linked to a head injury or possible stroke, go to the emergency room immediately."
  },
  soreThroat: {
    mild: "Drink warm fluids like herbal tea or honey with warm water to soothe irritation. Gargle with salt water and avoid cold or spicy foods. Rest your voice and use a humidifier if the air is dry.",
    moderate: "Stay hydrated and take over-the-counter lozenges or throat sprays for relief. Avoid smoking and allergens that may worsen irritation. If pain persists for more than a few days or is accompanied by fever, consult a doctor.",
    veryHigh: "Seek medical attention if the sore throat is extremely painful, making it difficult to swallow, breathe, or speak. Watch for symptoms like high fever, swollen tonsils with pus, or persistent hoarseness. If breathing becomes difficult or there’s a risk of infection like strep throat, visit a doctor immediately."
  },
  diarrhea: {
    mild: "Stay hydrated by drinking plenty of water, electrolyte solutions, or clear broths. Eat bland foods like bananas, rice, applesauce, and toast (BRAT diet). Avoid dairy, caffeine, and greasy foods until symptoms improve.",
    moderate: "Drink oral rehydration solutions to prevent dehydration and rest as much as possible. Avoid raw or spicy foods and take probiotics or over-the-counter medications if needed. If diarrhea lasts more than two days or is accompanied by fever, consult a doctor.",
    veryHigh: "Seek immediate medical help if diarrhea is persistent, watery, or accompanied by blood, severe dehydration, dizziness, or high fever. Drink fluids frequently but avoid solid food until advised by a doctor. If symptoms worsen or signs of dehydration appear, visit the emergency room."
  },
  constipation: {
    mild: "Increase fiber intake by eating fruits, vegetables, and whole grains. Drink plenty of water and stay physically active to promote digestion. Avoid processed foods and try natural remedies like prunes or warm lemon water.",
    moderate: "Drink more fluids and consider fiber supplements or mild laxatives if needed. Establish a regular bathroom routine and avoid delaying bowel movements. If constipation persists for more than a week or causes discomfort, consult a doctor",
    veryHigh: "Seek medical attention if constipation is prolonged, extremely painful, or accompanied by bloating, vomiting, or blood in stool. Avoid excessive laxative use without medical advice. If there’s severe abdominal pain or signs of a blockage, visit the emergency room immediately"
  },
  anxiety: {
    mild: "Practice deep breathing, meditation, or light exercise to relax your mind. Stay hydrated, maintain a balanced diet, and get enough sleep. Engage in calming activities like reading, listening to music, or spending time in nature.",
    moderate: "Use relaxation techniques like mindfulness or journaling to manage stress. Avoid excessive caffeine or alcohol, and establish a structured daily routine. If anxiety starts interfering with daily life, consider talking to a therapist or counselor",
    veryHigh: "Seek professional help if anxiety is overwhelming, persistent, or causes panic attacks, dizziness, or chest tightness. Practice grounding techniques and avoid isolation. If anxiety leads to self-harm thoughts or severe distress, seek immediate medical attention."
  },
  chestPain: {
    mild: "Rest and take slow, deep breaths to ease discomfort. Drink water and avoid heavy meals or caffeine if the pain is related to digestion. If the pain is mild and short-lived, monitor it, but seek help if it recurs.",
    moderate: "Sit or lie down and try to stay calm while monitoring your symptoms. Avoid physical exertion and take over-the-counter antacids if acid reflux is suspected. If the pain lasts more than a few minutes or radiates to the arm, neck, or jaw, seek medical advice.",
    veryHigh: "Seek emergency medical help immediately if the pain is intense, crushing, or accompanied by shortness of breath, dizziness, nausea, or sweating. Avoid any physical activity and do not ignore symptoms. If a heart attack is suspected, call for emergency assistance right away."
  },
  backPain: {
    mild: "Maintain good posture and avoid prolonged sitting or standing. Apply a warm or cold compress to the affected area for relief. Gentle stretching or light activity like walking can help loosen muscles.",
    moderate: "Take over-the-counter pain relievers if needed and practice regular stretching or yoga. Avoid heavy lifting and use ergonomic support when sitting or sleeping. If pain persists for more than a week or worsens, consult a doctor.",
    veryHigh: "Seek medical attention if the pain is intense, persistent, or radiates to the legs, causing weakness or numbness. Avoid sudden movements and excessive strain on the back. If back pain is accompanied by fever, loss of bladder control, or unexplained weight loss, visit the emergency room immediately."
  }
};

const SymptomChecker = () => {
  const [symptom, setSymptom] = useState("");
  const [severity, setSeverity] = useState("");
  const [healthAdvice, setHealthAdvice] = useState("");

  const handleGetHealthAdvice = () => {
    if (symptom && severity) {
      setHealthAdvice(healthAdviceData[symptom]?.[severity] || "Consult a doctor for the best medical advice.");
    } else {
      setHealthAdvice("Please select a symptom and severity level to get advice.");
    }
  };

  return (
    <div className="symptom-checker-container">
      <div className="symptom-checker-box">
        <h2>Symptom Checker</h2>

        {/* Symptom Selection */}
        <div className="input-group">
          <label>Select Your Symptom</label>
          <select value={symptom} onChange={(e) => setSymptom(e.target.value)} className="dropdown">
            <option value="">-- Select Symptom --</option>
            {Object.keys(healthAdviceData).map((symptomKey) => (
              <option key={symptomKey} value={symptomKey}>
                {symptomKey.charAt(0).toUpperCase() + symptomKey.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Severity Selection */}
        <div className="input-group">
          <label>Select Severity Level</label>
          <select value={severity} onChange={(e) => setSeverity(e.target.value)} className="dropdown">
            <option value="">-- Select Severity --</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="veryHigh">Very High</option>
          </select>
        </div>

        <button className="health-advice-btn" onClick={handleGetHealthAdvice} disabled={!symptom || !severity}>
          Get Health Advice
        </button>

        {healthAdvice && (
          <div className="health-advice-box">
            <h3>Health Advice</h3>
            <p>{healthAdvice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
