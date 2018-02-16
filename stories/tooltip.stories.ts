import {storiesOf} from '@storybook/angular';
import {MatTooltipModule} from '@angular/material';
import {text} from '@storybook/addon-knobs/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

storiesOf('tooltip', module)
  .add('tooltip', () => ({
    template: `
    <div>
        <span matTooltip="Tooltip!">I have a tooltip</span>
        ---{{sss}}
    </div>
    `,
    props: {
        sss: text('sss', 'My App')
    },
    moduleMetadata: {
      imports: [MatTooltipModule, BrowserAnimationsModule]
    }
  }));

