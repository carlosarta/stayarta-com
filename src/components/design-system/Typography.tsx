import React from 'react';

export const TypeScale = () => {
  return (
    <div className="space-y-12 p-8 bg-white border-2 border-st-darkblue/10 rounded-3xl">
      <div className="space-y-2">
        <p className="text-sm text-st-darkblue/50 font-mono uppercase">Display — DM Serif Display</p>
        <h1 className="font-display text-6xl md:text-8xl text-st-darkblue leading-tight">
          The Future <br />
          <span className="text-st-orange">Is Retro</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-baseline gap-4 pb-4 border-b border-st-darkblue/10">
            <span className="text-xs text-st-darkblue/40 font-mono w-12">H1</span>
            <h1 className="font-display text-5xl text-st-darkblue">Headline One</h1>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-st-darkblue/10">
            <span className="text-xs text-st-darkblue/40 font-mono w-12">H2</span>
            <h2 className="font-display text-4xl text-st-darkblue">Headline Two</h2>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-st-darkblue/10">
            <span className="text-xs text-st-darkblue/40 font-mono w-12">H3</span>
            <h3 className="font-display text-3xl text-st-darkblue">Headline Three</h3>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-baseline gap-4 pb-4 border-b border-st-darkblue/10">
            <span className="text-xs text-st-darkblue/40 font-mono w-12">Body</span>
            <p className="font-body text-lg text-st-darkblue/80 leading-relaxed">
              STAYArta represents the intersection of nostalgic aesthetics and cutting-edge automation. 
              Our typography system balances editorial elegance with functional readability.
            </p>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-st-darkblue/10">
            <span className="text-xs text-st-darkblue/40 font-mono w-12">UI</span>
            <p className="font-ui text-base font-medium text-st-darkblue">
              Button Text • Navigation • Labels • Data Display
            </p>
          </div>
          <div className="flex items-baseline gap-4 pb-4 border-b border-st-darkblue/10">
            <span className="text-xs text-st-darkblue/40 font-mono w-12">Micro</span>
            <p className="font-ui text-xs font-bold tracking-wide text-st-darkblue/60 uppercase">
              System Messages • Captions • Metadata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
