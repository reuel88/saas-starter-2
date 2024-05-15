import { useEditor } from "@/providers/editor-provider";
import React, { CSSProperties } from "react";
import { Handle, HandleProps, useStore } from "reactflow";

type Props = HandleProps & { style?: CSSProperties };

const selector = (s: any) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
});

const CustomHandle = (props: Props) => {
  const { state } = useEditor();

    return (
        <Handle
            {...props}

    className = "!-bottom-2 !h-4 !w-4 dark:bg-neutral-800"
        />
)
};

export default CustomHandle;
