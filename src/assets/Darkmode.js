import React from 'react';
import { useSelector } from 'react-redux';

const Darkmode = () => {
  const themeState = useSelector(state => state.themeState);
  return <svg  width="434" height="247" viewBox="0 0 434 247" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect style={themeState ? { stroke: "var(--active-mode)"} :{ stroke: "gray"}} x="1.5" y="1.5" width="431" height="244" rx="23.5" fill="#0E1117" strokeWidth="3"/>
  <rect x="84" y="17" width="331" height="18" rx="5" fill="#212730"/>
  <rect x="19" y="17" width="56" height="216" rx="5" fill="#212730"/>
  <rect x="84" y="43" width="60" height="8" rx="4" fill="#212730"/>
  <rect x="84" y="59" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="84" y="59" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="175" y="59" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="175" y="59" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="175" y="59" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="266" y="59" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="266" y="59" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="266" y="59" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="84" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="84" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="84" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="175" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="175" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="175" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="266" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="266" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="266" y="151" width="74" height="79" rx="5" fill="#212730"/>
  <rect x="349" y="59" width="66" height="174" rx="5" fill="#212730"/>
  <rect x="349" y="59" width="66" height="174" rx="5" fill="#212730"/>
  <rect x="349" y="59" width="66" height="174" rx="5" fill="#212730"/>
  </svg>
  ;
};

export default Darkmode;