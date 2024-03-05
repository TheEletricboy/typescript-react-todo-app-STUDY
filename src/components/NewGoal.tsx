import { useRef, type FC, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const labels = {
  goal: "goal",
  summary: "summary",
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    onAddGoal(enteredGoal, enteredSummary);
    event.currentTarget.reset();

    goalRef.current!.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor={labels.goal}>Your Goal</label>
        <input id={labels.goal} type="text" ref={goalRef} />
      </p>
      <p>
        <label htmlFor={labels.summary}>Short Summary</label>
        <input id={labels.summary} type="text" ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
