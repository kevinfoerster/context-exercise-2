import * as React from 'react'

function SvgRobot({state, ...props}) {
  
  const styles = {
    STOP: {
      greenLight: {opacity: 0.4},
      yellowLight: {opacity: 0.4 , animationIterationCount: '1', animationName: 'blink', animationDuration: '.5s', animationDirection: 'alternate'},
      redLight: {opacity: 1, transitionDelay: '0.5s'},
    },
    GO: {
      greenLight: {opacity: 1},
      yellowLight: {opacity: 0.4},
      redLight: {opacity: 0.4}
    },
    OFF: {
      greenLight: {opacity: 0.4},
      yellowLight: { animationIterationCount: 'infinite', animationName: 'blink', animationDuration: '.5s', animationDirection: 'alternate'},
      redLight: {opacity: 0.4}
    },
  }  
  
  // styles[state].greenLight
  return (
    <svg width={53} height={25} {...props}>
      <defs>
        <ellipse id="robot_svg__b" cx={6.378} cy={6.31} rx={6.378} ry={6.31} />
        <ellipse id="robot_svg__d" cx={6.378} cy={6.31} rx={6.378} ry={6.31} />
        <ellipse id="robot_svg__f" cx={6.378} cy={6.31} rx={6.378} ry={6.31} />
        <filter
          x="-23.5%"
          y="-23.8%"
          width="147%"
          height="147.5%"
          filterUnits="objectBoundingBox"
          id="robot_svg__a"
        >
          <feMorphology
            radius={1}
            in="SourceAlpha"
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
          />
          <feOffset
            dx={-1}
            dy={1}
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-23.5%"
          y="-23.8%"
          width="147%"
          height="147.5%"
          filterUnits="objectBoundingBox"
          id="robot_svg__c"
        >
          <feMorphology
            radius={1}
            in="SourceAlpha"
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
          />
          <feOffset
            dx={-1}
            dy={1}
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-23.5%"
          y="-23.8%"
          width="147%"
          height="147.5%"
          filterUnits="objectBoundingBox"
          id="robot_svg__e"
        >
          <feMorphology
            radius={1}
            in="SourceAlpha"
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
          />
          <feOffset
            dx={-1}
            dy={1}
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2={-1}
            k3={1}
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowInnerInner1"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        
        <path
          d="M53 12.5C53 5.596 47.463 0 40.633 0H12.367C5.537 0 0 5.596 0 12.5S5.537 25 12.367 25h28.266C47.463 25 53 19.404 53 12.5zm-1.01 0c0 6.34-5.084 11.48-11.357 11.48H12.367C6.094 23.98 1.01 18.84 1.01 12.5c0-6.34 5.084-11.48 11.357-11.48h28.266c6.273 0 11.357 5.14 11.357 11.48z"
          fill="#979797"
          fillRule="nonzero"
        />
        <path
          d="M51.99 12.5c0 6.34-5.084 11.48-11.357 11.48H12.367C6.094 23.98 1.01 18.84 1.01 12.5c0-6.34 5.084-11.48 11.357-11.48h28.266c6.273 0 11.357 5.14 11.357 11.48z"
          fill="#000"
          fillRule="nonzero"
        />
        <ellipse
          cx={6.378}
          cy={6.31}
          rx={6.378}
          ry={6.31}
          fill="#7ED321"
          id="greenLight"
          style={styles[state].greenLight}
          transform="rotate(90 6.024 12.147)"
        />
        <use
          filter="url(#robot_svg__a)"
          xlinkHref="#robot_svg__b"
          transform="rotate(90 6.024 12.147)"
          fill="#000"
        />
        <ellipse
          cx={6.378}
          cy={6.31}
          rx={6.378}
          ry={6.31}
          fill="#F5A623"
          id="yellowLight"
          style={styles[state].yellowLight}
          transform="rotate(90 13.217 19.34)"
        />
        <use
          filter="url(#robot_svg__c)"
          xlinkHref="#robot_svg__d"
          transform="rotate(90 13.217 19.34)"
          fill="#000"
        />
        <g>
          <ellipse
            cx={6.378}
            cy={6.31}
            rx={6.378}
            ry={6.31}
            fill="#D0021B"
            id="redLight"
            style={styles[state].redLight}
            transform="rotate(90 20.41 26.533)"
          />
          <use
            filter="url(#robot_svg__e)"
            xlinkHref="#robot_svg__f"
            transform="rotate(90 20.41 26.533)"
            fill="#000"
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgRobot
