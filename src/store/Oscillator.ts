export interface Envelope {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

export interface OscillatorConstructor {
  audioContext: AudioContext;
  type: OscillatorType;
  frequency: number;
  detune: number;
  envelope?: Envelope;
  connection: AudioDestinationNode;
}

export class Oscillator {
  private audioContext: AudioContext;
  public oscillator: OscillatorNode;
  private envelope: Envelope;
  private gateGain: GainNode;
  private easing: number;

  constructor({
    audioContext,
    type,
    frequency,
    detune,
    envelope,
    connection,
  }: OscillatorConstructor) {
    this.audioContext = audioContext;
    this.envelope = envelope || {
      attack: 0.05,
      decay: 0.1,
      sustain: 0.6,
      release: 0.1,
    };
    this.oscillator = audioContext.createOscillator();
    this.oscillator.frequency.value = frequency;
    this.oscillator.detune.value = detune;
    this.oscillator.type = type;

    this.gateGain = audioContext.createGain();
    this.gateGain.gain.value = 0;

    this.oscillator.connect(this.gateGain);
    this.gateGain.connect(connection);

    this.easing = 0.005;
    this.oscillator.start();
    this.start();
  }
  start() {
    const { currentTime } = this.audioContext;
    this.gateGain.gain.cancelScheduledValues(currentTime);
    this.gateGain.gain.setValueAtTime(
      0,
      currentTime + this.easing + this.easing
    );
    this.gateGain.gain.linearRampToValueAtTime(
      1,
      currentTime + this.envelope.attack
    );

    this.gateGain.gain.linearRampToValueAtTime(
      this.envelope.sustain,
      currentTime + this.envelope.attack + this.envelope.decay + this.easing
    );
  }

  stop() {
    const { currentTime } = this.audioContext;
    this.gateGain.gain.cancelScheduledValues(currentTime);
    this.gateGain.gain.setTargetAtTime(
      0,
      currentTime,
      this.envelope.release + this.easing
    );
    setTimeout(() => {
      this.oscillator.disconnect();
    }, 10000);
  }
}
