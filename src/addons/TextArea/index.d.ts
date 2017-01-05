import * as React from 'react';
import { FormTextAreaProps } from '../../collections/Form/index';

export interface TextareaProps extends FormTextAreaProps{
  
  /** An element type to render as (string or function). */
  as?: any;

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>, value: TextareaOnChangeValue  ) => void;
}

interface TextareaOnChangeValue extends TextareaProps{
  value: any;
}

export const Textarea: React.ComponentClass<TextareaProps>;
