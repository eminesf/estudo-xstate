import { createMachine } from "xstate";

export const todosMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAIC2BDAxgBYCWAdmAHQAyquEZUmaGsAxBuRWQG6oDWlZljxEylGnQZN0qWAh6p8uAC7FUpANoAGALradiUAAdZxVesMgAHoi0AaEAE9bAXxcOhOAiU4T6pRiE2MAAnENQQiiMAGxUAMwjsCk8RH3Faf0CZOQUlc01dfUsTWDM1UksbBABaAFYKLQAWADYADgB2WodnBABGLVq3dxBSdDhLFO8xYtN8ysRq3sb2imbG1saAZk7uhYBOLQoAJkHhydFfDKkgmdK5pGt9vdX1rZ2nBaOKTrcPGS8LoJspg-JBbmULA8qkd+hRNrVerVmiddjVehRTn8MAC0tQMphlMDQuEQmCHiUIRUoYgjkcVo09jCOl0Pn0lsdTm4gA */
  createMachine({
    id: "Todo machine",
    initial: "Loading Todos",
    schema: {
      // events: {} as
      //   | { type: "Todos loaded"; todos: string[] }
      //   | { type: "Loading todos failed"; errorMessage: string },
      services: {} as {
        loadTodos: {
          data: string[];
        };
      },
    },
    tsTypes: {} as import("./todoAppMachine.typegen").Typegen0,
    states: {
      "Loading Todos": {
        invoke: {
          src: "loadTodos",

          onDone: {
            target: "Todos Loaded",
          },

          onError: { target: "Load todos errored" },
        },
      },

      "Todos Loaded": {},
      "Load todos errored": {},
    },
  });
