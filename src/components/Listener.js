import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import './Listener.scss';

export const Listener = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>This browser doesn't support speech recognition.</span>;
  }

  return (
    <section className="app-container">
      <p className="support">Better supported on Chrome</p>
      <p className="microphone-status">
        Microphone: {listening ? 'on' : 'off'}{' '}
        <span
          className={`microphone-icon microphone-icon--${
            listening ? 'on' : 'off'
          }`}
        ></span>
      </p>
      <button
        className="button__listening button__listening--start"
        onClick={SpeechRecognition.startListening}
      >
        Start Listening
      </button>
      <button
        className="button__listening button__listening--stop"
        onClick={SpeechRecognition.stopListening}
      >
        Stop Listening
      </button>
      <button
        className="button__listening button__listening--reset"
        onClick={resetTranscript}
      >
        Reset
      </button>
      <p>Transcription: </p>
      {transcript && <p className="transcription">{transcript}</p>}
    </section>
  );
};
