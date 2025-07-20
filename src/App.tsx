import React, { useState, useEffect } from "react";
import {
  Heart,
  Music,
  Music as MusicOff,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import LandingPage from "./components/LandingPage";
import CountdownPage from "./components/CountdownPage";
import BirthdayPage from "./components/BirthdayPage";
import MessagesPage from "./components/MessagesPage";
import "./App.css";
import myAudio from "../public/cool_music.mp3";

type PageType = "landing" | "countdown" | "birthday" | "messages";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("landing");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [birthdayReached, setBirthdayReached] = useState(false);

  // Set Suvrota's birthday date - October 18, 2025
  const birthdayDate = new Date("2025-10-18T00:00:00");

  useEffect(() => {
    // Check if birthday has been reached
    const checkBirthday = () => {
      const now = new Date();
      if (now >= birthdayDate && !birthdayReached) {
        setBirthdayReached(true);
        // setCurrentPage('birthday');
      }
    };

    const interval = setInterval(checkBirthday, 1000);
    return () => clearInterval(interval);
  }, [birthdayDate, birthdayReached]);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage("countdown");
    setMusicPlaying(true);
  };

  const handleBirthdayComplete = () => {
    setCurrentPage("messages");
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onPasswordSuccess={handlePasswordSuccess} />;
      case "countdown":
        return (
          <CountdownPage
            birthdayDate={birthdayDate}
            onBirthdayReached={() => setCurrentPage("birthday")}
            musicPlaying={musicPlaying}
            onToggleMusic={toggleMusic}
          />
        );
      case "birthday":
        return (
          <BirthdayPage
            onComplete={handleBirthdayComplete}
            musicPlaying={musicPlaying}
            onToggleMusic={toggleMusic}
          />
        );
      case "messages":
        return (
          <MessagesPage
            musicPlaying={musicPlaying}
            onToggleMusic={toggleMusic}
          />
        );
      default:
        return <LandingPage onPasswordSuccess={handlePasswordSuccess} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      {renderCurrentPage()}

      {/* Music Control (hidden on landing page) */}
      {currentPage !== "landing" && (
        <button
          onClick={toggleMusic}
          className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 shadow-lg"
        >
          {musicPlaying ? (
            <Music className="w-6 h-6 text-purple-600" />
          ) : (
            <MusicOff className="w-6 h-6 text-purple-600" />
          )}
        </button>
      )}
    </div>
  );
}

export default App;
