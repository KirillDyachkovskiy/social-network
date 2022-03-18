import {Field} from "../../../../ui/Field";

export const Wall = ({renderSubmit, renderPosts}) => {
  return (
    <>
      <div style={{marginTop: '10px'}}>
        <Field>
          {renderSubmit()}
        </Field>
      </div>
      <div style={{margin: '10px 0'}}>
        <Field>My posts</Field>
      </div>
      {renderPosts()}
    </>
  );
};
