import { FC, type PropsWithChildren } from "react";

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDeleteGoal: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({
  title,
  onDeleteGoal,
  id,
  children,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDeleteGoal(id)}>DELETE</button>
    </article>
  );
};

export default CourseGoal;
