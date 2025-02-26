import React from "react";
import "../styles/HopeMessage.css";

const speakHealthAdvice = () => {
    const healthAdvice = "Your health is important. Stay hydrated, eat a balanced diet, and get enough rest. If symptoms persist, consult a doctor.";
    
    const speech = new SpeechSynthesisUtterance();
    speech.text = healthAdvice;
    speech.lang = "en-US";
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};

const HopeMessage = () => {
    return (
        <div className="hope-message-container">
            <div className="hope-message-box">
                <h2 className="hope-title">Stay Positive! ✨</h2>
                <p className="hope-text">
                    Your health and well-being are invaluable. Taking care of yourself is the first step toward recovery.
                </p>
                <p className="hope-text">
                    Proper hydration, a balanced diet, and adequate rest play a crucial role in your healing journey. Listen to your body and prioritize self-care.
                </p>
                <button className="ai-checkup-btn" onClick={speakHealthAdvice}>
                    🩺 AI Health Checkup
                </button>
            </div>
        </div>
    );
};

export default HopeMessage;
