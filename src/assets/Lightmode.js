import React from 'react';
import { useSelector } from 'react-redux';

function Lightmode() {
  const themeState = useSelector(state => state.themeState);
  return <svg width="434" height="247" viewBox="0 0 434 247" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect style={!themeState ? { stroke: "var(--active-mode)"} :{ stroke: "gray"}} x="1.5" y="1.5" width="431" height="244" rx="23.5" fill="white" strokeWidth={3}/>
  <rect x="82" y="17" width="331" height="18" rx="5" fill="#E4E3E3"/>
  <rect x="17" y="17" width="56" height="216" rx="5" fill="#EDEDED"/>
  <rect x="82" y="43" width="60" height="8" rx="4" fill="#EDEDED"/>
  <rect x="82" y="59" width="59" height="63" rx="5" fill="#E8E8E8"/>
  <rect x="82" y="59" width="59" height="63" rx="5" fill="#E8E8E8"/>
  <rect x="82" y="59" width="59" height="63" rx="5" fill="#E8E8E8"/>
  <rect x="82" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="82" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="82" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="173" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="173" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="173" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="264" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="264" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="264" y="59" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="82" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="82" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="82" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="173" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="173" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="173" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="264" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="264" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="264" y="151" width="74" height="79" rx="5" fill="#E8E8E8"/>
  <rect x="347" y="59" width="66" height="174" rx="5" fill="#E8E8E8"/>
  <rect x="347" y="59" width="66" height="174" rx="5" fill="#E8E8E8"/>
  <rect x="347" y="59" width="66" height="174" rx="5" fill="#E8E8E8"/>
  </svg>
  
  ;
}

export default Lightmode;
