import { FC, type PropsWithChildren } from "react";

type HintBoxProps = PropsWithChildren<{
  mode: "hint";
}>;

type WarningBoxProps = PropsWithChildren<{
  mode: "warning";
  severity: "low" | "medium" | "high";
}>;

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
