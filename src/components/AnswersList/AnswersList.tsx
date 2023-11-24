import React from 'react';
import AnswerOption from '../AnswerOption';
import './AnswersList.scss';
import { AnswerState } from '../../constants/enums';

interface AnswersListProps {
  answersArray: string[],
  selectedIndex: number | null,
  selectedAnswerState: AnswerState | null,
  onSelectAnswer: (answer: string) => () => void,
}

function AnswersList({
  answersArray, onSelectAnswer, selectedIndex, selectedAnswerState,
}: AnswersListProps) {
  return (
    <ul className="answers">
      {answersArray?.map((answer, index) => {
        const label = String.fromCharCode('A'.charCodeAt(0) + index);

        return (
          <AnswerOption
            key={`_key${answer}`}
            correct={selectedAnswerState}
            selected={selectedIndex === index}
            label={label}
            text={answer}
            onSelect={onSelectAnswer(answer)}
          />
        );
      })}
    </ul>
  );
}

export default AnswersList;
