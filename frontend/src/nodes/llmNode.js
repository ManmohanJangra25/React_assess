// llmNode.js

import { BaseNode } from "../components/BaseNode/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        {
          id: "system",
        },
        {
          id: "prompt",
        },
      ]}
      outputs={[
        {
          id: "response",
        },
      ]}
    >
      <p
        style={{
          margin: 0,
          color: "#4b5563",
          fontSize: "13px",
        }}
      >
        This is an LLM.
      </p>
    </BaseNode>
  );
};
