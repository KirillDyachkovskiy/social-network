import {Field} from "../../../ui/Field";

export const Wall = ({renderSubmit, renderPosts}) => {
  return (
    <>
      <Field style={{marginTop: '10px'}}>
        {renderSubmit()}
      </Field>
      <Field style={{margin: '10px 0'}}>My posts</Field>
      {renderPosts()}
    </>
  );
};
