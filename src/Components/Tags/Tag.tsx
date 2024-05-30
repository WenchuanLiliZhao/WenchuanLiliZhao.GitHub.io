import "./Tag.scss";

interface TagProps {
  icon?: string;
  variant: string;
  fontSize: string;
  text: string;
}

export default function Tag({ icon, variant, fontSize, text }: TagProps) {
  return (
    <div className="nbl-tag-container">
      <div className={`react-tag-${variant} size-${fontSize}`}>
        {icon && (
          <div className="icon-container">
            <span className="material-symbols-outlined icon">{icon}</span>
          </div>
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
}
