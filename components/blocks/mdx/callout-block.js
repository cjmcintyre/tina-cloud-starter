//import styled from 'styled-components';
import rem from "../../utils/rem";

export default function Callout({callout}) {

return(
        
  <CalloutWrapper type={backgroundColor[callout.type]} >
    <CalloutLabel >{label[callout.type] || callout.type}</CalloutLabel>
    <CalloutText textColor={textColor[callout.type] || textColor.default}>{callout?.text}</CalloutText>
  </CalloutWrapper>
    
)}