import { Handle, Position } from "reactflow";
import "./BaseNode.css";

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
  className = "",
  style = {},
}) => {
  const renderHandles = (ports, type, position) =>
    ports.map((port, index) => (
      <Handle
        key={`${id}-${port.id}`}
        id={`${id}-${port.id}`}
        type={type}
        position={position}
        style={{
          ...(ports.length > 1
            ? {
                top: `${((index + 1) * 100) / (ports.length + 1)}%`,
              }
            : {}),
          ...port.style,
        }}
      />
    ));

  return (
    <div className={`base-node ${className}`} style={style}>
      <div className="base-node__header">
        <span className="base-node__title">{title}</span>
      </div>

      <div className="base-node__body">{children}</div>

      {renderHandles(inputs, "target", Position.Left)}
      {renderHandles(outputs, "source", Position.Right)}
    </div>
  );
};
