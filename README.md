# 🎉 Happy Birthday Fariha! 

A magical, interactive birthday website created with love for Fariha's special day.

## ✨ Features

- **Password-Protected Entry**: Secure access with the special password "mayabini"
- **Interactive Countdown**: Real-time countdown to the birthday moment
- **Animated Celebrations**: Fireworks, confetti, and floating balloons
- **Personalized Messages**: 12 heartfelt birthday messages with smooth transitions
- **Beautiful Animations**: Sparkles, glowing effects, and smooth transitions
- **Music Integration**: Background music controls (requires audio files)
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Multi-Day Experience**: Continues celebration for days after the birthday

## 🎵 Music Setup

To add background music:

1. Add your music files to the `public` folder:
   - `countdown-music.mp3` (for countdown page)
   - `celebration-music.mp3` (for birthday and messages pages)
   - `fireworks.mp3` (for fireworks sound effect)

2. The music controls are already integrated and will work once files are added.

## 🚀 Getting Started

1. **Set the Birthday Date**: 
   - Open `src/App.tsx`
   - The birthday date is already set to May 26, 2026
   - Format: `new Date('YYYY-MM-DDTHH:mm:ss')`

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The website uses a beautiful gradient color scheme with:
- Primary: Pink to Purple gradients
- Accent: Gold, Yellow, and various rainbow colors
- Background: Animated gradient backgrounds

### Messages
To customize the birthday messages:
1. Open `src/components/MessagesPage.tsx`
2. Edit the `messages` array with your personalized messages
3. Each message includes text, emoji, and gradient colors

### Animations
The website includes various animations:
- Floating particles and hearts
- Sparkling effects
- Confetti rain
- Fireworks display
- Smooth transitions between pages

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Mobile phones (all sizes)
- Tablets (portrait and landscape)
- Desktop computers
- Touch interactions and gestures

## 🎯 Password

The magic password to unlock the website is: **mayabini**

## 💝 Special Features

- **Countdown Timer**: Shows days, hours, minutes, and seconds until the birthday
- **Midnight Celebration**: Automatic fireworks and celebration at the exact birthday moment
- **Message Sequence**: 12 beautiful messages that auto-play or can be navigated manually
- **Music Controls**: Mute/unmute toggle for background music
- **Particle Effects**: Floating hearts, stars, and sparkles throughout the experience

## 🌟 Technical Details

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Responsive**: Mobile-first design
- **Performance**: Optimized for fast loading

## 💻 Browser Support

Works on all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Tablet browsers

---

Created with 💜 for Fariha's special day!