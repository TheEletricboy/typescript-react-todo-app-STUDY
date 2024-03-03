import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import { type CourseGoal as CourseGoalType } from "../App.tsx";
import { type FC, type ReactNode } from "react";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some.
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity={"medium"}>
        You're adding too many goals be careful.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals?.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              onDeleteGoal={onDeleteGoal}
              id={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
