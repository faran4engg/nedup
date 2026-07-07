'use client';

export default function UrduFontLoader() {
  return (
    <style>{`
      @font-face {
        font-family: 'UrJameel';
        src: url('/fonts/ur-jameel-noori-nastaleeq.woff2') format('woff2'),
             url('/fonts/ur-jameel-noori-nastaleeq.ttf') format('truetype');
        font-weight: 400 700;
        font-style: normal;
        font-display: swap;
      }
    `}</style>
  );
}
