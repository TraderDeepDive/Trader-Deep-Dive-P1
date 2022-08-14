import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import useWindowSize from "../components/common/WindowSizeHook"

import MBar from "../components/mobile/MBar"
import DBar from "../components/desktop/DBar"

const Home = () => {
  const size: any = useWindowSize();
  const status: boolean = size.width >= 576?true:false
  const url: string = status ? 'assets/imgs/desktop/home_bg.jpg' : 'assets/imgs/mobile/mb_home_bg.jpg'
  const text: string = status ? "Click To Enter" : "PRESS TO ENTER"
  const bar: any = status ? <DBar/> :<MBar onClick={()=>{}}/>

  const scale: number = size.width/575.0
  return (
    <div className="flex relative flex-col w-full h-screen">
      <div className="bg-cover bg-top bg-no-repeat h-screen w-screen fixed top-0 -z-10" style={{ backgroundImage: `url(${url})` }}></div>
      <Link to="/opt-in" className="duration-100 absolute top-0 right-0 hover:sm:scale-105 hover:sm:-translate-x-1 hover:sm:translate-y-1">
        <svg className="fill-[#fbb03b] w-36 h-36 sm:w-52 sm:h-52 md:w-60 md:h-60" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 178.8 178.81">
          <g id="Homepage">
            <g>
              <path className="cls-1" d="M110.81,91.77c-.34,.04-.65,.2-.92,.47s-.43,.58-.46,.91c-.04,.34,.05,.61,.26,.82,.21,.21,.49,.3,.83,.26,.34-.04,.65-.19,.91-.45,.27-.27,.43-.58,.46-.92,.04-.34-.05-.62-.26-.83-.21-.21-.49-.3-.83-.25Z"/>
              <path className="cls-1" d="M101.38,77.04c-.6,.14-1.2,.5-1.79,1.09s-.96,1.19-1.09,1.79c-.13,.6,0,1.09,.39,1.48,.37,.37,.86,.5,1.46,.37,.6-.13,1.2-.49,1.79-1.08s.96-1.2,1.09-1.8c.13-.61,.01-1.1-.36-1.47-.39-.39-.89-.52-1.49-.38Z"/>
              <path className="cls-1" d="M110.71,83.7c.34-.04,.64-.2,.92-.47s.43-.58,.46-.91-.05-.61-.26-.82-.49-.3-.83-.25c-.34,.04-.64,.2-.9,.46s-.43,.58-.47,.92,.04,.62,.25,.83c.21,.21,.49,.3,.83,.25Z"/>
              <path className="cls-1" d="M123.36,99.22c-.21-.21-.45-.37-.72-.46-.27-.1-.54-.14-.83-.11-.28,.02-.57,.1-.87,.24-.29,.14-.57,.34-.82,.59-.53,.53-.81,1.09-.85,1.69-.04,.6,.16,1.11,.59,1.55,.21,.21,.45,.37,.71,.46,.26,.09,.54,.13,.82,.11s.57-.1,.87-.24c.29-.14,.57-.34,.82-.59,.53-.53,.81-1.09,.85-1.69,.04-.6-.15-1.11-.58-1.53Z"/>
              <path className="cls-1" d="M71.38,47.5c-.27-.1-.54-.14-.83-.12-.28,.02-.57,.1-.87,.24-.29,.14-.57,.34-.82,.59-.53,.53-.81,1.09-.85,1.69-.04,.6,.16,1.11,.59,1.55,.21,.21,.45,.37,.71,.46,.26,.09,.54,.13,.82,.11,.28-.02,.57-.1,.87-.24,.29-.14,.57-.34,.82-.59,.53-.53,.81-1.09,.85-1.69,.04-.6-.15-1.11-.58-1.53-.21-.21-.45-.37-.72-.46Z"/>
              <path className="cls-1" d="M50.81,26.87c-.02-.51-.22-.96-.61-1.35-.4-.4-.85-.6-1.36-.61-.51,0-.99,.17-1.45,.55l2.88,2.88c.38-.47,.56-.95,.55-1.46Z"/>
              <path className="cls-1" d="M133.25,104.75c-.27-.27-.54-.39-.81-.36-.27,.03-.53,.18-.79,.43l-.28,.28,1.46,1.46s.08-.08,.18-.18c.09-.09,.2-.19,.31-.3s.22-.2,.33-.29c.11-.09,.17-.14,.2-.15-.07-.17-.16-.33-.27-.5-.11-.16-.22-.3-.33-.41Z"/>
              <path className="cls-1" d="M43.01,0H0L178.8,178.81v-43.02L43.01,0ZM108.08,81.23c.13-.35,.33-.67,.6-.94s.59-.47,.94-.59c.35-.12,.71-.18,1.09-.16,.37,.02,.74,.11,1.1,.27,.37,.16,.7,.39,1.01,.7,.31,.3,.54,.64,.7,1,.16,.37,.25,.74,.27,1.12,.02,.37-.03,.74-.16,1.08-.12,.35-.32,.66-.59,.93s-.59,.48-.94,.61c-.35,.13-.72,.18-1.09,.16-.38-.02-.75-.11-1.12-.27-.36-.16-.7-.39-1-.7-.31-.31-.54-.64-.7-1.01-.16-.36-.25-.73-.27-1.1-.02-.38,.04-.74,.16-1.1ZM38.74,24.76l.89-.89c-1.32-.05-2.43-.53-3.33-1.43-.59-.59-1.04-1.26-1.34-2.02-.3-.75-.45-1.52-.44-2.32,.02-.81,.2-1.61,.54-2.41,.34-.8,.86-1.55,1.55-2.23,.61-.62,1.32-1.09,2.1-1.42,.78-.32,1.57-.48,2.38-.49,.81,0,1.61,.15,2.4,.47,.79,.31,1.5,.79,2.14,1.42,.84,.84,1.4,1.75,1.67,2.73,.28,.98,.27,1.94-.03,2.86l-2.72-.38c.2-.61,.22-1.22,.06-1.83-.16-.61-.47-1.15-.91-1.59-.35-.35-.74-.6-1.16-.74-.43-.15-.87-.2-1.32-.15-.45,.05-.9,.18-1.34,.4-.44,.22-.86,.52-1.24,.91-.39,.39-.69,.81-.9,1.26s-.33,.9-.36,1.35c-.03,.45,.03,.9,.19,1.32,.15,.43,.41,.83,.77,1.18,.81,.82,1.92,1.17,3.33,1.07l.28-.28-1.76-1.76,1.52-1.51,3.49,3.49-4.73,4.72-1.73-1.73Zm8.49,7.75c-.88-.22-1.71-.72-2.48-1.49-.56-.56-.97-1.15-1.23-1.78-.27-.63-.4-1.25-.39-1.88,0-.62,.13-1.22,.38-1.79s.6-1.09,1.05-1.54c.48-.48,1.02-.86,1.61-1.12,.59-.27,1.2-.41,1.83-.43,.62-.02,1.25,.1,1.89,.36,.63,.26,1.23,.68,1.8,1.24,.57,.57,.98,1.17,1.23,1.8,.26,.63,.38,1.25,.37,1.88-.02,.62-.15,1.22-.41,1.79s-.62,1.09-1.08,1.55c-.12,.12-.24,.23-.36,.33-.12,.11-.24,.2-.34,.27l-4.94-4.94c-.41,.48-.59,.99-.53,1.51,.06,.53,.28,.98,.65,1.35,.3,.3,.65,.51,1.07,.64,.42,.14,.8,.12,1.14-.03l1.25,2.22c-.79,.26-1.62,.28-2.51,.06Zm5.48,6.17c-.46-.26-.87-.57-1.24-.94-.25-.25-.46-.53-.62-.81-.16-.29-.26-.59-.29-.9-.03-.31,.02-.63,.15-.95,.14-.33,.36-.66,.69-.98l3.48-3.49-.85-.85,1.54-1.54,.85,.85,2.13-2.12,2.03,2.03-2.12,2.13,1.36,1.36-1.54,1.54-1.36-1.36-2.79,2.79c-.22,.22-.32,.43-.31,.64,.01,.21,.1,.4,.27,.57,.16,.15,.34,.28,.55,.39,.21,.11,.41,.2,.59,.26l-1.23,2.01c-.39-.16-.83-.38-1.29-.63Zm4.64,9.53c-.81-.12-1.52-.49-2.15-1.11-.17-.17-.33-.36-.47-.56-.14-.21-.27-.43-.38-.68l1.74-1.74c.11,.23,.23,.43,.35,.6,.12,.18,.25,.32,.37,.44,.24,.25,.52,.35,.82,.32,.31-.04,.74-.22,1.29-.55l4.13-9.23,2.1,2.1-3.38,6.5,6.27-3.61,1.91,1.91-10.31,5.22c-.73,.37-1.49,.5-2.29,.39Zm13.23,6.57c-.62,.01-1.25-.11-1.88-.37s-1.23-.67-1.8-1.24c-.57-.57-.98-1.17-1.24-1.8-.26-.64-.39-1.26-.37-1.89,.01-.62,.15-1.22,.41-1.8,.26-.58,.62-1.09,1.08-1.55s.98-.82,1.56-1.08c.57-.27,1.17-.4,1.8-.42,.62-.01,1.25,.11,1.89,.37,.63,.25,1.24,.66,1.8,1.23,.57,.57,.98,1.17,1.23,1.8s.37,1.26,.36,1.89c-.01,.62-.15,1.22-.41,1.8-.26,.58-.62,1.1-1.07,1.56-.46,.46-.98,.82-1.56,1.08-.57,.27-1.17,.4-1.8,.42Zm7.28,9.26c-.15-.12-.28-.24-.39-.35-.73-.73-.86-1.43-.39-2.1l.37-.44c-.75,.13-1.45,.08-2.11-.17-.67-.24-1.28-.65-1.84-1.21-.68-.68-.99-1.42-.91-2.2,.07-.78,.53-1.58,1.36-2.42l4.28-4.27,2.03,2.03-3.83,3.83c-.41,.41-.64,.8-.69,1.18-.06,.38,.06,.72,.36,1.01,.27,.27,.61,.47,1.01,.57,.39,.12,.87,.09,1.42-.07l4.13-4.12,2.03,2.03-4.39,4.39c-.2,.21-.31,.38-.33,.52-.02,.15,.05,.31,.19,.49l-1.72,1.72c-.24-.16-.43-.29-.58-.42Zm7.77-.41l-4.01,4.01-2.03-2.04,6.68-6.68,1.87,1.87-1.35,1.35c.68-.22,1.33-.28,1.94-.17,.62,.11,1.13,.36,1.55,.76l.2,.2s.08,.09,.12,.14l-1.84,1.83c-.5-.48-1.02-.85-1.57-1.09-.56-.25-1.07-.31-1.56-.18Zm7.3,15.31l-5.5-5.5,1.83-1.83,1.81,1.81,3.24-3.25c-.17,.03-.4,.01-.66-.04-.27-.06-.55-.14-.84-.25-.29-.11-.56-.24-.83-.4-.26-.15-.47-.31-.63-.47l1.88-1.88c.14,.13,.36,.27,.67,.39,.31,.12,.64,.22,.98,.3,.34,.08,.67,.14,.97,.18,.31,.03,.52,.02,.65-.02l2.08,2.08-5.44,5.43,1.62,1.62-1.83,1.83Zm7.54,5.62c-.64,.05-1.26-.04-1.85-.25-.6-.21-1.13-.55-1.61-1.03-.47-.47-.82-1.01-1.04-1.61-.21-.6-.3-1.22-.25-1.86s.22-1.28,.53-1.91c.3-.64,.74-1.24,1.3-1.8s1.15-.99,1.79-1.3c.64-.3,1.28-.48,1.92-.52,.64-.05,1.26,.03,1.86,.24,.6,.22,1.14,.56,1.62,1.04,.47,.47,.81,1.01,1.02,1.61,.21,.59,.29,1.21,.24,1.85-.04,.65-.22,1.29-.52,1.93-.3,.64-.73,1.24-1.29,1.8s-1.16,.99-1.8,1.29c-.64,.3-1.28,.47-1.92,.52Zm2.6,3.1l7.71-.54,7.58-1.05,.1,1.73-7.5,.55-7.81,1.04-.08-1.73Zm10.37,6.59c-.13,.35-.34,.66-.61,.93-.27,.27-.58,.47-.93,.6-.34,.13-.71,.18-1.08,.16-.38-.02-.75-.11-1.12-.27-.36-.17-.7-.4-1-.7s-.54-.64-.7-1.01c-.17-.37-.25-.73-.27-1.11-.02-.37,.03-.73,.16-1.09,.12-.35,.32-.66,.59-.93,.27-.27,.59-.47,.94-.6,.36-.13,.72-.18,1.1-.16,.37,0,.74,.1,1.1,.26,.37,.16,.7,.4,1.01,.7,.3,.31,.54,.64,.7,1.01,.16,.36,.25,.73,.27,1.11,.02,.38-.03,.74-.16,1.1Zm6.51,11.41c-.63-.25-1.23-.67-1.8-1.24-.57-.57-.98-1.17-1.24-1.8s-.38-1.26-.37-1.88c.02-.63,.15-1.23,.42-1.8,.26-.58,.62-1.1,1.08-1.56,.46-.45,.97-.81,1.55-1.08,.58-.26,1.18-.4,1.8-.41,.63-.01,1.26,.11,1.89,.36,.64,.25,1.24,.67,1.81,1.24,.57,.56,.98,1.16,1.23,1.8,.25,.63,.37,1.26,.35,1.88-.01,.62-.14,1.23-.4,1.81-.26,.58-.62,1.1-1.08,1.56-.46,.46-.97,.82-1.55,1.08-.58,.26-1.18,.4-1.8,.41-.63,.02-1.25-.11-1.89-.37Zm8.78,9.09l-2.04-2.04,4.6-4.6-1.47-1.46-4.59,4.59-2.04-2.03,4.6-4.6-.86-.85,1.54-1.54,.86,.85,.21-.21c.39-.39,.79-.68,1.23-.89,.43-.22,.86-.34,1.29-.36,.44-.03,.87,.04,1.29,.2,.42,.16,.82,.43,1.2,.8,.27,.28,.52,.59,.74,.94,.22,.35,.43,.74,.61,1.15,.45-.04,.89,0,1.34,.17,.45,.15,.88,.43,1.29,.84,.3,.29,.55,.62,.75,.98,.2,.35,.39,.72,.55,1.1l-1.9,1.16c-.07-.18-.17-.36-.28-.56-.12-.2-.26-.38-.42-.54-.28-.28-.57-.4-.88-.35-.3,.05-.59,.21-.86,.49l-.63,.62,1.62,1.62-1.54,1.54-1.62-1.62-4.59,4.6Zm9.6,9.59l3.75-3.75c.44-.44,.68-.85,.71-1.21,.04-.37-.08-.69-.35-.96-.15-.14-.32-.26-.52-.34-.21-.08-.43-.14-.67-.17-.24-.03-.49-.03-.74,.01s-.49,.11-.72,.22l-3.83,3.83-2.04-2.03,6.69-6.69,1.83,1.84-1.12,1.12c.64-.15,1.3-.12,1.96,.12,.67,.23,1.3,.64,1.88,1.23,.43,.43,.7,.86,.81,1.28,.11,.42,.11,.82,0,1.22-.11,.39-.29,.76-.54,1.11-.25,.34-.51,.65-.79,.93l-4.28,4.28-2.03-2.04Zm10.12,8.31c-.62,.01-1.25-.11-1.88-.37s-1.24-.68-1.8-1.24c-.57-.57-.99-1.17-1.24-1.8-.26-.64-.39-1.26-.37-1.89,.01-.62,.15-1.22,.41-1.8s.62-1.09,1.08-1.55,.98-.82,1.55-1.08c.58-.27,1.18-.41,1.81-.42,.62-.01,1.25,.11,1.89,.36,.63,.26,1.23,.67,1.8,1.24,.57,.57,.98,1.17,1.23,1.8s.37,1.26,.36,1.88c-.01,.63-.15,1.23-.41,1.81-.26,.58-.62,1.1-1.07,1.56-.46,.46-.98,.82-1.56,1.08-.58,.27-1.17,.4-1.8,.42Zm6.52,8.34l1.72-3.78-3.78,1.72-1.67-1.67,3.93-9.44,1.92,1.92-2.98,6.62,2.44-1.2,1.8-4.16,1.63,1.63-1.37,2.66,2.65-1.38,1.63,1.63-4.15,1.81-1.19,2.44,6.6-2.99,1.94,1.94-9.45,3.92-1.67-1.67Zm7.51,7.51l-2.03-2.04,2.11-2.11,2.04,2.04-2.12,2.11Zm3.59-3.59l-2.03-2.04,5.53-5.53,2.04,2.03-5.54,5.54Z"/>
              <path className="cls-1" d="M149.25,125.37c-.27-.1-.54-.14-.83-.12s-.57,.1-.87,.24c-.29,.14-.57,.34-.82,.59-.53,.53-.81,1.09-.85,1.69-.04,.6,.16,1.11,.59,1.55,.21,.21,.45,.37,.71,.46,.26,.09,.54,.13,.82,.11,.28-.02,.57-.1,.87-.24,.29-.14,.57-.34,.82-.59,.53-.53,.81-1.09,.85-1.69,.04-.6-.15-1.11-.58-1.53-.21-.21-.45-.37-.72-.46Z"/>
            </g>
          </g>
        </svg>
      </Link>
      <div className="h-full flex flex-col items-center justify-center">
        <Link to="/about-us" className="flex relative bottom-0 flex-col justify-center items-center text-center h-max">
          <img src={'assets/imgs/logo.png'} className="m-auto w-[200px] sm:w-max" />
          <p className="text-[15px] text-[#fff] mt-5 sm:text-[32px]">{text}</p>
        </Link>
      </div>
      {bar}
    </div>
  )
}

export default Home
