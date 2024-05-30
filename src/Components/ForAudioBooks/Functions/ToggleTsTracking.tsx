import { useRef, useEffect, useState } from 'react';


export default function ToggleTsTracking() {
  const controlBtnRef = useRef<HTMLDivElement>(null);
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  function Track() {
    // find all transcript-sentent to toggle className `tracking`, such that the computer knows if the transcript should be tracked or not
    const targetTs = document.querySelectorAll(".transcript-sentence");

    for (let index = 0; index < targetTs.length; index++) {
      const element = targetTs[index];
      element.classList.toggle("tracking");
    }

    // in the case that the tracking btn is disabled, click the btn again, then the window will scroll to the position of the currently active transcript.
    const getCurrentX = () => {
      const target = document.querySelector(".transcript-sentence.active");

      const targetY = target?.getBoundingClientRect().top;
      console.log(targetY);

      if (targetY != undefined) {
        window.scroll(0, targetY - 360 + window.scrollY);
      } else {
        window.scroll(0, 0);
      }
    }

    var trackStatus = ""
    if (!trackingEnabled) {
      console.log(`Tracker ${trackStatus}`);
      
    } else {
      console.log(`Tracker ${trackStatus}`);
      getCurrentX()
    }

    setTrackingEnabled(!trackingEnabled);

    // now, let's toggle the className `active` of the btn such that Lili could do some UI changes on it.
    const targetBtn = document.querySelectorAll(".tracking-control-btn");

    for (let index = 0; index < targetBtn.length; index++) {
      const element = targetBtn[index];
      element.classList.toggle("active");
    }

    // the following codes are write for this function: once the user scroll the window manually, the function `Track` is disabled.

  }

  useEffect(() => {
    const controlBtn = controlBtnRef.current;

    if (controlBtn) {
      controlBtn.addEventListener('click', Track);
      
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (controlBtn) {
        controlBtn.removeEventListener('click', Track);
      }
    };
  }, [trackingEnabled]); // Add trackingEnabled to dependencies array

  return (
    <div ref={controlBtnRef} className="control-btn tracking-control-btn active">
      <span className='material-symbols-outlined icon'>
        keep
      </span>
      <span className='hover-layer'></span>
    </div>
  );
}
