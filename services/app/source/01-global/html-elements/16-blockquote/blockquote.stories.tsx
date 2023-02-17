import { Meta, Story } from '@storybook/react';

const settings: Meta = {
  title: 'Global/HTML Elements/Blockquote',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

const Blockquote: Story = () => {
  return (
    <>
      <blockquote>
        <p>
          A block quotation (also known as a long quotation or extract) is a
          quotation in a written document, that is set off from the main text as
          a paragraph, or block of text, and typically distinguished visually
          using indentation and a different typeface or smaller size quotation.
        </p>
        <cite>
          Jane Doe <em>President and CEO</em>
        </cite>
      </blockquote>
    </>
  );
};

export default settings;
export { Blockquote };
