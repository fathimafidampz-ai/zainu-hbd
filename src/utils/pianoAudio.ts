// Web Audio API Synthesizer for soft piano instrumental music

class SoftPianoSynth {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: NodeJS.Timeout | null = null;
  private volume: number = 0.3;
  private gainNode: GainNode | null = null;

  private notes = [
    // Emotional piano chord progression: C, G, Am, F
    // Frequencies for C4, E4, G4, B4, C5, D5, E5, G5...
    [261.63, 329.63, 392.00, 523.25, 659.25], // C Major 7
    [196.00, 246.94, 293.66, 392.00, 493.88], // G Major
    [220.00, 261.63, 329.63, 440.00, 523.25], // A Minor
    [174.61, 220.00, 261.63, 349.23, 440.00], // F Major
  ];

  private currentChordIndex = 0;
  private currentNoteInChord = 0;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.value = this.volume;
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playNote(freq: number, duration: number = 2.5) {
    if (!this.ctx || !this.gainNode || !this.isPlaying) return;

    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Soft triangle wave for warm piano tone
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Lowpass filter for warm muted sound
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.25, now + 0.08); // soft attack
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration); // decay

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // AudioContext interrupted
    }
  }

  public start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.scheduleArpeggio();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private scheduleArpeggio = () => {
    if (!this.isPlaying) return;

    const chord = this.notes[this.currentChordIndex];
    const freq = chord[this.currentNoteInChord];
    
    this.playNote(freq, 3.0);

    this.currentNoteInChord++;
    if (this.currentNoteInChord >= chord.length) {
      this.currentNoteInChord = 0;
      this.currentChordIndex = (this.currentChordIndex + 1) % this.notes.length;
    }

    // Gentle timing between 450ms and 600ms
    const delay = 480 + Math.random() * 80;
    this.timerId = setTimeout(this.scheduleArpeggio, delay);
  };
}

export const pianoAudio = typeof window !== 'undefined' ? new SoftPianoSynth() : null;
