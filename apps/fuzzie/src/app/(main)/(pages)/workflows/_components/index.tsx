import React from "react";
import Workflow from "./workflow";
// import { onGetWorkflows } from '../_actions/workflow-connections'
// import MoreCredits from './more-creadits'

type Props = {};

const Workflows = async (props: Props) => {
  // const workflows = await onGetWorkflows()
  return (
    <div className="relative flex flex-col gap-4">
      <section className="m-2 flex flex-col">
        <Workflow description="hello" id="1" name="hello" publish={true} />
        {/*<MoreCredits />*/}
        {/*{workflows?.length ? (*/}
        {/*    workflows.map((flow) => (*/}
        {/*        <Workflow*/}
        {/*            key={flow.id}*/}
        {/*            {...flow}*/}
        {/*        />*/}
        {/*    ))*/}
        {/*) : (*/}
        {/*    <div className="mt-28 flex text-muted-foreground items-center justify-center">*/}
        {/*        No Workflows*/}
        {/*    </div>*/}
        {/*)}*/}
      </section>
    </div>
  );
};

export default Workflows;
