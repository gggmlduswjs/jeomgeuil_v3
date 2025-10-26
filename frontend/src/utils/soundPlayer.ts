export function stopAllSounds() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  }
  