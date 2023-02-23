import { useMachine } from "@xstate/react";
import { todosMachine } from "machines/todoAppMachine";

export default function Home() {
  const [state, send] = useMachine(todosMachine, {
    services: {
      loadTodos: async () => {
        return ["takes bins out", "do laundry"];
      },
    },
  });
  return (
    <div>
      {JSON.stringify(state.value)}
      <button
        onClick={() => {
          send({
            type: "Todos loaded",
            todos: ["takes bins out"],
          });
        }}
      >
        todos loaded
      </button>
      <button
        onClick={() => {
          send({
            type: "Loading todos failed",
            errorMessage: "oh no!",
          });
        }}
      >
        Loading todos failed
      </button>
    </div>
  );
}
