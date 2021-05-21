import uniqueId from '../../util/uniqueId'
import FacialHair from './facialHair'
import HairColor from './HairColor'
import { FC, useMemo } from 'react'

const ShortHairTheCaesar: FC = ({ children }) => {
  const filter1 = useMemo(() => uniqueId('react-filter-'), [])
  const mask1 = useMemo(() => uniqueId('react-mask-'), [])
  const mask2 = useMemo(() => uniqueId('react-mask-'), [])
  const path1 = useMemo(() => uniqueId('react-path-'), [])
  const path2 = useMemo(() => uniqueId('react-path-'), [])

  return (
    <g strokeWidth='1' fillRule='evenodd'>
      <defs>
        <rect id={path1} x='0' y='0' width='264' height='280'/>
        <path id={path2}
              d='M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z'/>
        <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' id={filter1}>
          <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/>
          <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1' result='shadowMatrixOuter1'/>
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1'/>
            <feMergeNode in='SourceGraphic'/>
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <g mask={`url(#${mask1})`}>
        <g transform='translate(-1.000000, 0.000000)'>
          <FacialHair/>
          <g strokeWidth='1' fillRule='evenodd' transform='translate(75.000000, 34.000000)'>
            <mask id={mask2} fill='white'>
              <use xlinkHref={'#' + path2}/>
            </mask>
            <use fill='#28354B' xlinkHref={'#' + path2}/>
            <HairColor maskID={mask2}/>
          </g>
          {children}
        </g>
      </g>
    </g>
  )
}

export default ShortHairTheCaesar
