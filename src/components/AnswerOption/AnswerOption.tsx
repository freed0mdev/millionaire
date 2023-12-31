import React from 'react';
import classNames from 'classnames';
import 'src/components/AnswerOption/AnswerOption.scss';
import { AnswerState } from 'src/constants/enums';
import { ReactComponent as OptionRect } from 'src/assets/images/option.svg';
import { ReactComponent as OptionRectDesktop } from 'src/assets/images/option_large.svg';

interface StepProps {
  text: string;
  label: string;
  selected: boolean;
  correct: AnswerState | null;
  onSelect: () => void;
}

function AnswerOption({
  text, label, selected, correct, onSelect,
}: StepProps) {
  const optionClass = classNames('option', {
    'option--selected': selected,
    'option--correct': selected && correct === AnswerState.CORRECT,
    'option--wrong': selected && correct === AnswerState.INCORRECT,
  });

  return (
    <li>
      <label htmlFor={`label_${text}`}>
        <input type="radio" name="answer" hidden id={`label_${text}`} onClick={onSelect} />
        <span className={optionClass}>
          <OptionRect className="option__rect" />
          <OptionRectDesktop className="option__rect option__rect--desktop" />
          <div className="option__content">
            <span className="option__label">{label}</span>
            {text}
          </div>
        </span>
      </label>
    </li>
  );
}

export default AnswerOption;
